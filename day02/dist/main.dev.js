"use strict";

//inicialização de variáveis
var peopleName = "";
var yearsOld = 0;
var language = "";
var like = ""; //perguntas do prompt para obter as respostas e armazena-las nas variáveis

peopleName = prompt("qual é o seu nome?");
yearsOld = parseInt(prompt("quantos anos você tem?"));
language = prompt("agora me diga, que linguagem você esta estudando atualmente"); //mensagem do console

window.alert("ola ".concat(peopleName, ", voc\xEA tem ").concat(yearsOld, " anos e j\xE1 est\xE1 aprendendo ").concat(language, "!")); //desafio extra

like = prompt("voc\xEA gosta de estudar ".concat(language, "? responda 1 - sim e 2 - n\xE3o"));

if (like == "1") {
  alert("muito bom! Continue estudando e você terá muito sucesso.");
} else if (like == "2") {
  alert("ahh que pena... já tentou aprender outras linguagens?");
} else {
  alert("resposta inválida");
}