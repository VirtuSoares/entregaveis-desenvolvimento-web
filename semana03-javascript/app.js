// ==========================================
// Bloco 1 – Fundamentos e Variáveis
// ==========================================
console.log("--- Bloco 1 ---");

let pontos = 50;
pontos += 10;
console.log("Pontos:", pontos);

const MAX_PONTOS = 100;
try {
    MAX_PONTOS = 150;
} catch (erro) {
    console.log("Erro ao reatribuir MAX_PONTOS:", erro.name);
    console.log("Motivo: Variáveis declaradas com 'const' são constantes e não podem receber um novo valor após a inicialização.");
}

let tipoString = "Desenvolvimento Web";
let tipoNumber = 2026;
let tipoBoolean = true;
let tipoUndefined = undefined;
let tipoNull = null;

console.log("typeof tipoString:", typeof tipoString);
console.log("typeof tipoNumber:", typeof tipoNumber);
console.log("typeof tipoBoolean:", typeof tipoBoolean);
console.log("typeof tipoUndefined:", typeof tipoUndefined);
console.log("typeof tipoNull:", typeof tipoNull);

let nome = "Victor";
let curso = "Engenharia de Software";

console.log(`O aluno ${nome} estuda ${curso}.`);
console.log("O aluno " + nome + " estuda " + curso + ".");

// ==========================================
// Bloco 2 – Funções
// ==========================================
console.log("\n--- Bloco 2 ---");

console.log("É maior de idade (21)?", ehMaiorDeIdade(21));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

try {
    console.log(ehMaiorDeIdadeExpressao(21));
} catch (erro) {
    console.log("Erro de hoisting na expressão:", erro.name);
    console.log("Motivo: Funções de expressão não sofrem hoisting para o topo do escopo.");
}
const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};

function dobroDeclarada(n) { return n * 2; }
const dobroExpressao = function(n) { return n * 2; };
const dobroArrow = n => n * 2;

console.log("Dobro (Declarada - 5):", dobroDeclarada(5));
console.log("Dobro (Expressão - 5):", dobroExpressao(5));
console.log("Dobro (Arrow - 5):", dobroArrow(5));

function dobroPadrao(n = 1) { return n * 2; }
console.log("Dobro com valor padrão (sem argumentos):", dobroPadrao());

// ==========================================
// Bloco 3 – Controle de Fluxo
// ==========================================
console.log("\n--- Bloco 3 ---");

function classificarNota(nota) {
    return nota >= 6 ? "Aprovado" : "Reprovado";
}
console.log("Classificar nota 7:", classificarNota(7));
console.log("Classificar nota 4:", classificarNota(4));

let corSemaforo = "Amarelo";
switch (corSemaforo.toLowerCase()) {
    case "vermelho": console.log("Semaforo: Pare"); break;
    case "amarelo": console.log("Semaforo: Atenção"); break;
    case "verde": console.log("Semaforo: Siga"); break;
    default: console.log("Semaforo: Cor inválida");
}

console.log("\nTabuada do 5:");
for (let i = 1; i <= 10; i++) console.log(`5 x ${i} = ${5 * i}`);

console.log("\nContagem regressiva:");
let regressiva = 5;
while (regressiva >= 1) {
    console.log(regressiva);
    regressiva--;
}

console.log("\nPares e Ímpares de 1 a 20 (FOR):");
for (let i = 1; i <= 20; i++) {
    console.log(`${i} é ${i % 2 === 0 ? "par" : "ímpar"}`);
}

console.log("\nPares e Ímpares de 1 a 20 (WHILE):");
let contador = 1;
while (contador <= 20) {
    console.log(`${contador} é ${contador % 2 === 0 ? "par" : "ímpar"}`);
    contador++;
}

function diaDaSemana(numero) {
    switch (numero) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Número inválido. Insira um valor entre 1 e 7.";
    }
}
console.log("\nDia da semana (3):", diaDaSemana(3));
