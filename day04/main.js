const number = 7;
let guess = 0;
let chances = 3;

alert("olá, seja bem vind@, acerte o número misterioso de 1 a 10");

while (chances != 0) {
  guess = parseInt(prompt("qual número deseja chutar"));

  if (number === guess) {
    alert("você acertou!!!");
    chances = 0;
  } else {
    if (chances !== 0) {
      chances -= 1;
      if (chances != 0) {
        alert(`tente novamente, você tem mais ${chances} chances`);
        if (guess > number) {
          alert("antes uma dica! este número é maior que o número misterioso");
        } else {
          alert("antes uma dica! este número é menor que o número misterioso");
        }
      } else {
        alert("você não tem mais nenhuma chance, você perdeu!");
      }
    }
  }
}
