//inicialização de variáveis

let peopleName = "";
let yearsOld = 0;
let language = "";
let like = "";
//perguntas do prompt para obter as respostas e armazena-las nas variáveis

peopleName = prompt("qual é o seu nome?");
yearsOld = parseInt(prompt("quantos anos você tem?"));
language = prompt(
  "agora me diga, que linguagem você esta estudando atualmente"
);
//mensagem do console

window.alert(
  `ola ${peopleName}, você tem ${yearsOld} anos e já está aprendendo ${language}!`
);

//desafio extra

like = prompt(`você gosta de estudar ${language}? responda 1 - sim e 2 - não`);
if (like == "1") {
  alert("muito bom! Continue estudando e você terá muito sucesso.");
} else if (like == "2") {
  alert("ahh que pena... já tentou aprender outras linguagens?");
} else {
  alert("resposta inválida");
}
