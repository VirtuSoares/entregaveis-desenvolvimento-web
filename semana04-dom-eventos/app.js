// ==========================================
// Bloco 1 – Arrays e Métodos
// ==========================================
console.log("--- Bloco 1: Arrays ---");

const nomes = ["Ana", "Bruno", "Carla"];
nomes.forEach(nome => console.log(`Olá, ${nome}!`));
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

const precos = [10, 25, 40, 5, 60];
const precosMaiores20 = precos.filter(preco => preco > 20);
const somaPrecos = precos.reduce((acc, preco) => acc + preco, 0);
console.log("Preços > 20:", precosMaiores20);
console.log("Soma total dos preços:", somaPrecos);

const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 120 },
    { nome: "Caneta", preco: 5 },
    { nome: "Livro", preco: 45 }
];
const nomesProdutos = produtos.map(p => p.nome);
const produtosBaratos = produtos.filter(p => p.preco < 50);
const totalProdutos = produtos.reduce((acc, p) => acc + p.preco, 0);

console.log("Nomes dos produtos:", nomesProdutos);
console.log("Produtos < 50:", produtosBaratos);
console.log("Total produtos:", totalProdutos);
produtos.forEach(p => console.log(`Nome: R$ ${p.preco}`));


// ==========================================
// Bloco 2 – Manipulação do DOM
// ==========================================
console.log("\n--- Bloco 2: DOM ---");

const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Victor";

const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log("Texto do parágrafo:", p.textContent));

const lista = document.querySelector("#lista");
lista.innerHTML = "<li>Item Inserido via innerHTML 1</li><li>Item Inserido via innerHTML 2</li>";

const novoLi = document.createElement("li");
novoLi.textContent = "Terceiro item";
lista.append(novoLi);

novoLi.classList.add("destaque");
console.log("Novo li possui 'destaque'?", novoLi.classList.contains("destaque"));

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    lista.appendChild(li);
});

const primeiroLi = lista.querySelector("li");
if (primeiroLi) primeiroLi.classList.add("feito");

console.log("Total de LIs na lista:", document.querySelectorAll("li").length);


// ==========================================
// Bloco 3 – Eventos e Event Delegation
// ==========================================
const botao = document.querySelector("#botao");
botao.addEventListener("click", () => console.log("Clicou!"));
botao.addEventListener("mouseover", () => botao.textContent = "Pode clicar!");

const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", (e) => console.log("Valor atual:", e.target.value));

// Event Delegation na lista
lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log("Item clicado:", e.target.textContent);
    }
});

// Testando inclusão dinâmica para provar o Event Delegation
const liDinamico = document.createElement("li");
liDinamico.textContent = "Item Dinâmico Criado Via JS";
lista.appendChild(liDinamico);

// Formulário
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const textoTarefa = campoTarefa.value.trim();

    if (textoTarefa !== "") {
        const li = document.createElement("li");
        li.textContent = textoTarefa;
        lista.appendChild(li);
        campoTarefa.value = "";
    }
});
