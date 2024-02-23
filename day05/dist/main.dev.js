"use strict";

function printResponse(fruits, dairy, frozen, candy) {
  array = [fruits, dairy, frozen, candy];
  array.forEach(function (element) {
    element.sort();
  });
  alert("-- sua lista --\n    frutas: ".concat(array[0].join(", "), "\n    latic\xEDveos: ").concat(array[1].join(", "), "\n    congelados: ").concat(array[2].join(", "), "\n    doces: ").concat(array[3].join(", ")));
}

var fruits = [];
var dairy = [];
var frozen = [];
var candy = [];
var ok = true;
alert("bem-vind@ a sua lsita de compras!");

while (ok) {
  var question1 = prompt('deseja adicionar uma comida a sua lista de compras? "sim" ou "não"');

  if (question1 === "sim") {
    var question2 = prompt("deseja adcionar em que lista? +\n        1. frutas\n        2. latic\xEDneos\n        3. congelados\n        4. doces");
    var add = prompt("o que deseja adcionar?");

    switch (question2) {
      case "1":
        fruits.push(add);
        break;

      case "2":
        dairy.push(add);
        break;

      case "3":
        frozen.push(add);
        break;

      case "4":
        candy.push(add);
        break;

      default:
        alert("lista não encontrada!");
        break;
    }
  } else if (question1 === "não") {
    alert("ok, até uma próxima!");
    ok = false;
  } else {
    alert("resposta inválida");
  }
}

printResponse(fruits, dairy, frozen, candy);