# Entregáveis da Faculdade - Universidade CEUMA

Repositório destinado aos projetos e entregáveis desenvolvidos durante a disciplina de Desenvolvimento para Web.

---

## 📁 Projetos e Entregáveis

### 1. Introdução ao JavaScript (Semana 03)
**Pasta:** `/semana03-javascript`

Resolução de desafios práticos cobrindo os fundamentos do ES6+:
- **Bloco 1:** Declaração de variáveis (`let`, `const`), tipagem primitiva (`typeof`) e manipulação de strings.
- **Bloco 2:** Estruturas de funções (Declaradas, Expressões e Arrow Functions), comportamento de *hoisting* e valores padrão.
- **Bloco 3:** Controle de fluxo (`if/else`, `switch`) e laços de repetição (`for`, `while`).

**Como rodar:**
Rode no terminal: `node semana03-javascript/app.js`

---

### 2. Arrays, DOM e Eventos (Semana 04)
**Pasta:** `/semana04-dom-eventos`

Aplicação de manipulação de arrays e interação dinâmica com o DOM:
- **Bloco 1 (Arrays):** Utilização dos métodos `map`, `filter`, `reduce` e `forEach` em arrays simples e coleções de objetos.
- **Bloco 2 (Manipulação do DOM):** Seleção de elementos (`querySelector`, `querySelectorAll`), alteração de conteúdo, adição de elementos dinâmicos (`createElement`, `appendChild`) e gestão de classes (`classList`).
- **Bloco 3 (Eventos & Event Delegation):** Manipulação de eventos de formulários (`submit`, `e.preventDefault()`), eventos de teclado/mouse e aplicação de **Event Delegation** em listas para melhoria de desempenho.

**Explicação Teórica dos Métodos de Array:**
- `map`: Transforma cada item de um array e retorna um **novo array** do mesmo tamanho.
- `filter`: Filtra os elementos de acordo com uma condição lógica e retorna um **novo array** apenas com os itens aprovados.
- `reduce`: Acumula todos os itens do array em um **único valor final** (ex: soma de totais).
- `forEach`: Apenas percorre o array para executar um efeito colateral, sem retornar nada.

**Importância do Event Delegation:**
Em vez de anexar um listener de evento para cada `<li>` individualmente, anexamos um único listener no elemento pai (`<ul>`). Quando qualquer item filho é clicado, o evento sobe na árvore do DOM (*event bubbling*) e é capturado pelo pai via `e.target`. Isso otimiza o uso da memória e garante que elementos criados **dinamicamente** via JavaScript também respondam aos cliques automaticamente.

**Como rodar:**
Abra o arquivo `semana04-dom-eventos/index.html` no navegador.

---

### 3. Objetos, Dados e Assincronismo (Semana 05)
**Pasta:** `/semana05-javascript-assincrono`

Mini projeto prático focado em consumo de APIs REST, assincronismo (`async/await`, `fetch`), manipulação segura do DOM sem `innerHTML` e gerenciamento dos 4 estados de tela (Carregando, Erro, Vazio e Sucesso).

- **Parte 1 (Validação e Processamento):** Validação de array de pedidos, filtragem de compras pagas e cálculo de total usando `reduce`.
- **Parte 2 (Buscador de CEP):** Consumo da API ViaCEP com validação Regex, timeout de requisição (`AbortSignal`), tratamento de erros e histórico de buscas.
- **Parte 3 (Desafio Mini Pokédex):** Consumo da PokéAPI tratando retornos 404 HTTP, renderizando imagem e tipos do Pokémon.

**Como rodar:**
Abra o arquivo `semana05-javascript-assincrono/index.html` no navegador.

---

## 💭 Refletindo sobre Assincronismo: Promise.all vs Await Sequencial

> **Por que `Promise.all` pode ser mais rápido que vários `await` seguidos?**

Quando utilizamos `await` de forma sequencial (ex: `const a = await buscaA(); const b = await buscaB();`), o JavaScript aguarda a resolução completa da primeira promessa para só então iniciar a segunda. Se cada requisição demorar 1 segundo, o tempo total acumulado será de 2 segundos.

Com o `Promise.all([buscaA(), buscaB()])`, todas as requisições assíncronas são disparadas **simultaneamente em paralelo**. Se ambas demorarem 1 segundo, como foram executadas juntas no tempo de rede, o tempo total de resposta será de apenas **1 segundo** (o tempo da promessa mais lenta).
