"use strict";

var numeroUm = 1;
var stringUm = "1";
var numeroTrinta = 30;
var stringTrinta = "30";
var numeroDez = 10;
var stringDez = "10";

if (numeroUm == stringUm) {
  console.log("as variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes");
} else {
  console.log("as variáveis numeroUm e stringUm tem o mesmo valor e mesmo tipo");
} //


if (numeroTrinta === stringTrinta) {
  console.log("as variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo");
} else {
  console.log("as variáveis numeroTrinta e stringTrinta não tem o mesmo tipo");
} //


if (numeroDez == stringDez) {
  console.log("as variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes");
} else {
  console.log("as variáveis numeroDez e stringDez não tem o mesmo valor");
}