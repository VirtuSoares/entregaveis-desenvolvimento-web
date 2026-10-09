// ==========================================
// Parte 1 – Manipulação e Validação de Dados
// ==========================================
const pedidosExemplo = [
    { cliente: "Bia", valor: 120.00, status: "pago" },
    { cliente: "Lucas", valor: 0, status: "pago" },
    { cliente: "", valor: 50.00, status: "pago" },
    { cliente: "Carlos", valor: 250.50, status: "pendente" },
    { cliente: "Mariana", valor: 80.00, status: "pago" }
];

document.getElementById("btn-processar-pedidos").addEventListener("click", () => {
    const listaUl = document.getElementById("lista-pedidos");
    const totalSpan = document.getElementById("total-faturado");
    const statusDiv = document.getElementById("status-pedidos");

    listaUl.replaceChildren();

    const pedidosValidos = pedidosExemplo.filter(p => p.cliente.trim() !== "" && typeof p.valor === "number" && p.valor > 0);
    const pedidosPagos = pedidosValidos.filter(p => p.status === "pago");
    const totalFaturado = pedidosPagos.reduce((acc, p) => acc + p.valor, 0);

    pedidosPagos.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.cliente} — R$ ${p.valor.toFixed(2)}`;
        listaUl.appendChild(li);
    });

    totalSpan.textContent = `R$ ${totalFaturado.toFixed(2)}`;
    statusDiv.textContent = "Pedidos processados com sucesso!";
});


// ==========================================
// Parte 2 – Buscador de CEP (Com Histórico)
// ==========================================
const formCep = document.getElementById("form-cep");
const cepInput = document.getElementById("cep-input");
const btnCep = document.getElementById("btn-cep");
const statusCep = document.getElementById("status-cep");
const resultadoCep = document.getElementById("resultado-cep");
const historicoCepUl = document.getElementById("historico-cep");

const historicoCeps = [];

function atualizarHistoricoCep() {
    historicoCepUl.replaceChildren();
    historicoCeps.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.cep} - ${item.logradouro}, ${item.bairro} (${item.localidade}/${item.uf})`;
        historicoCepUl.appendChild(li);
    });
}

formCep.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cepLimpo = cepInput.value.trim().replace(/\D/g, "");
    resultadoCep.replaceChildren();

    if (!/^\d{8}$/.test(cepLimpo)) {
        statusCep.textContent = "Por favor, digite um CEP válido contendo exatamente 8 números.";
        return;
    }

    statusCep.textContent = "Buscando...";
    btnCep.disabled = true;

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`, {
            signal: AbortSignal.timeout(5000)
        });

        if (!response.ok) throw new Error(`Erro na requisição (${response.status})`);

        const data = await response.json();

        if (data.erro) {
            statusCep.textContent = "CEP não encontrado.";
            return;
        }

        statusCep.textContent = "";

        const campos = [
            { label: "Rua", valor: data.logradouro || "N/A" },
            { label: "Bairro", valor: data.bairro || "N/A" },
            { label: "Cidade", valor: data.localidade || "N/A" },
            { label: "UF", valor: data.uf || "N/A" }
        ];

        campos.forEach(c => {
            const dt = document.createElement("dt");
            const strong = document.createElement("strong");
            strong.textContent = `${c.label}: `;
            dt.appendChild(strong);

            const dd = document.createElement("dd");
            dd.textContent = c.valor;

            resultadoCep.appendChild(dt);
            resultadoCep.appendChild(dd);
        });

        if (!historicoCeps.some(item => item.cep === data.cep)) {
            historicoCeps.push({
                cep: data.cep,
                logradouro: data.logradouro,
                bairro: data.bairro,
                localidade: data.localidade,
                uf: data.uf
            });
            atualizarHistoricoCep();
        }

    } catch (erro) {
        statusCep.textContent = erro.name === "TimeoutError" ? "A requisição demorou muito." : "Falha na conexão ao buscar CEP.";
    } finally {
        btnCep.disabled = false;
    }
});


// ==========================================
// Parte 3 – Desafio Mini Pokédex
// ==========================================
const formPokemon = document.getElementById("form-pokemon");
const pokemonInput = document.getElementById("pokemon-input");
const btnPokemon = document.getElementById("btn-pokemon");
const statusPokemon = document.getElementById("status-pokemon");
const resultadoPokemon = document.getElementById("resultado-pokemon");

formPokemon.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nomeBusca = pokemonInput.value.trim().toLowerCase();
    resultadoPokemon.replaceChildren();

    if (!nomeBusca) {
        statusPokemon.textContent = "Digite o nome de um Pokémon.";
        return;
    }

    statusPokemon.textContent = "Buscando Pokémon...";
    btnPokemon.disabled = true;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeBusca}`, {
            signal: AbortSignal.timeout(5000)
        });

        if (!response.ok) {
            statusPokemon.textContent = response.status === 404 ? "Pokémon não encontrado." : `Erro ao buscar (${response.status}).`;
            return;
        }

        const data = await response.json();
        statusPokemon.textContent = "";

        const container = document.createElement("div");

        const h3 = document.createElement("h3");
        h3.textContent = data.name.toUpperCase();

        const img = document.createElement("img");
        img.src = data.sprites.front_default;
        img.alt = `Sprite do ${data.name}`;

        const pTipos = document.createElement("p");
        const tipos = data.types.map(t => t.type.name).join(", ");
        
        const strongTipos = document.createElement("strong");
        strongTipos.textContent = "Tipo(s): ";
        pTipos.appendChild(strongTipos);
        pTipos.appendChild(document.createTextNode(tipos));

        container.appendChild(h3);
        container.appendChild(img);
        container.appendChild(pTipos);

        resultadoPokemon.appendChild(container);

    } catch (erro) {
        statusPokemon.textContent = erro.name === "TimeoutError" ? "A busca demorou muito." : "Falha na conexão ao buscar Pokémon.";
    } finally {
        btnPokemon.disabled = false;
    }
});
