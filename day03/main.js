ok = true;
ok2 = true;
const tecs = [];
let question1, question2, question3, question4, question5;

while (ok) {
  question1 = prompt(
    "você deseja seguir carreira na área do front-end ou back-end?"
  );
  if (question1 === "front-end" || question1 === "front") {
    question2 = prompt("você deseja aprender react ou vue?");
    if (question2 === "react" || question2 == "vue") {
      ok = false;
    } else {
      alert("resposta inválida");
      ok = false;
    }
  } else if (question1 === "back-end" || question1 === "back") {
    question2 = prompt("você deseja aprender c# ou java?");
    if (question2 === "c#" || question2 == "java") {
      ok = false;
    } else {
      alert("resposta inválida");
      ok = false;
    }
  } else {
    alert("erro: resposta inválida, tente novamente");
    ok = false;
  }

  question3 = prompt("você deseja ser especialista na área ou ser fullstack?");
  while (ok2) {
    question4 = prompt(
      'deseja adcionar uma tecnologia para se especializar ou aprender? "sim" ou "não"'
    );
    if (question4 === "sim") {
      question5 = prompt(
        "quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer?"
      );
      tecs.push(question5);
    } else if (question4 === "não") {
      alert("ok... encerraremos por aqui");
      ok2 = false;
    } else {
      alert("erro: resposta inválida");
      ok2 = false;
    }
  }
}
if (tecs.length !== 0) {
  alert(
    `você deseja se tornar um programador ${question1}, aprender ${question2} ser ${question3} e aprender: ${tecs}`
  );
} else {
  alert(
    `você deseja se tornar um programador ${question1}, aprender ${question2} ser ${question3}`
  );
}
