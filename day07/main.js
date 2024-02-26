//funções

//soma
function sum(a, b) {
  return a + b;
}

//subtração
function subtraction(a, b) {
  return a - b;
}

//multiplicação
function multiplication(a, b) {
  return a * b;
}

//divisão
function division(a, b) {
  return a / b;
}

//chamada de valores
function callNumbers() {
  let a = prompt('entre com o valor de "a"');
  let b = prompt('entre com o valor de "b"');
  return [a, b];
}

//função para perguntar se deseja fazer mais calculo ou não
function continueCalc(ok) {
  const desire = prompt(" você deseja fazer outra operação? 'sim' ou 'não'?");
  if (desire === "sim") {
    return (ok = true);
  } else if (desire === "não") {
    alert("ok... encerraremos aqui, até a próxima!");
    return (ok = false);
  } else {
    alert("valor inválido, vamos encerrar o procedimento");
    return (ok = false);
  }
}
//inicialização de variáveis
let ok = true;

//enquanto for ok
alert("bem vind@ a calculadora js");
while (ok) {
  //escolha de operação
  let operation = prompt(`qual operação deseja realizar?
    1. soma
    2. subtração
    3. multiplicação
    4. divisão`);
  //realização da operação
  switch (operation) {
    case "1":
      [a, b] = callNumbers();
      result = sum(Number(a), Number(b));
      break;
    case "2":
      [a, b] = callNumbers();
      result = subtraction(Number(a), Number(b));
      break;
    case "3":
      [a, b] = callNumbers();
      result = multiplication(Number(a), Number(b));
      break;
    case "4":
      [a, b] = callNumbers();
      result = division(Number(a), Number(b));
      break;
    default:
      continueCalc(ok);
      alert("operação não encontrada ou inválida");
      break;
  }
  alert(`o resultado da operação é ${result}`);
  ok = continueCalc();
}
