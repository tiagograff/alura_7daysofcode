function printResponse(fruits, dairy, frozen, candy) {
  array = [fruits, dairy, frozen, candy];
  array.forEach((element) => {
    element.sort();
  });
  alert(`-- sua lista --
    frutas: ${array[0].join(", ")}
    laticíveos: ${array[1].join(", ")}
    congelados: ${array[2].join(", ")}
    doces: ${array[3].join(", ")}`);
}

const fruits = [];
const dairy = [];
const frozen = [];
const candy = [];
let ok = true;

alert("bem-vind@ a sua lsita de compras!");

while (ok) {
  let question1 = prompt(
    'deseja adicionar uma comida a sua lista de compras? "sim" ou "não"'
  );
  if (question1 === "sim") {
    let question2 = prompt(
      `deseja adcionar em que lista? +
        1. frutas
        2. laticíneos
        3. congelados
        4. doces`
    );
    let add = prompt("o que deseja adcionar?");
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
