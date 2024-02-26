"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//funções
//soma
function sum(a, b) {
  return a + b;
} //subtração


function subtraction(a, b) {
  return a - b;
} //multiplicação


function multiplication(a, b) {
  return a * b;
} //divisão


function division(a, b) {
  return a / b;
} //chamada de valores


function callNumbers() {
  var a = prompt('entre com o valor de "a"');
  var b = prompt('entre com o valor de "b"');
  return [a, b];
} //função para perguntar se deseja fazer mais calculo ou não


function continueCalc(ok) {
  var desire = prompt(" você deseja fazer outra operação? 'sim' ou 'não'?");

  if (desire === "sim") {
    return ok = true;
  } else if (desire === "não") {
    alert("ok... encerraremos aqui, até a próxima!");
    return ok = false;
  } else {
    alert("valor inválido, vamos encerrar o procedimento");
    return ok = false;
  }
} //inicialização de variáveis


var ok = true; //enquanto for ok

alert("bem vind@ a calculadora js");

while (ok) {
  //escolha de operação
  var operation = prompt("qual opera\xE7\xE3o deseja realizar?\n    1. soma\n    2. subtra\xE7\xE3o\n    3. multiplica\xE7\xE3o\n    4. divis\xE3o"); //realização da operação

  switch (operation) {
    case "1":
      var _callNumbers = callNumbers();

      var _callNumbers2 = _slicedToArray(_callNumbers, 2);

      a = _callNumbers2[0];
      b = _callNumbers2[1];
      result = sum(Number(a), Number(b));
      break;

    case "2":
      var _callNumbers3 = callNumbers();

      var _callNumbers4 = _slicedToArray(_callNumbers3, 2);

      a = _callNumbers4[0];
      b = _callNumbers4[1];
      result = subtraction(Number(a), Number(b));
      break;

    case "3":
      var _callNumbers5 = callNumbers();

      var _callNumbers6 = _slicedToArray(_callNumbers5, 2);

      a = _callNumbers6[0];
      b = _callNumbers6[1];
      result = multiplication(Number(a), Number(b));
      break;

    case "4":
      var _callNumbers7 = callNumbers();

      var _callNumbers8 = _slicedToArray(_callNumbers7, 2);

      a = _callNumbers8[0];
      b = _callNumbers8[1];
      result = division(Number(a), Number(b));
      break;

    default:
      continueCalc(ok);
      alert("operação não encontrada ou inválida");
      break;
  }

  alert("o resultado da opera\xE7\xE3o \xE9 ".concat(result));
  ok = continueCalc();
}