let numeroUm = 1;
let stringUm = "1";
let numeroTrinta = 30;
let stringTrinta = "30";
let numeroDez = 10;
let stringDez = "10";

if (numeroUm == stringUm) {
  console.log(
    "as variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes"
  );
} else {
  console.log(
    "as variáveis numeroUm e stringUm tem o mesmo valor e mesmo tipo"
  );
}

//

if (numeroTrinta === stringTrinta) {
  console.log(
    "as variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo"
  );
} else {
  console.log("as variáveis numeroTrinta e stringTrinta não tem o mesmo tipo");
}

//

if (numeroDez == stringDez) {
  console.log(
    "as variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes"
  );
} else {
  console.log("as variáveis numeroDez e stringDez não tem o mesmo valor");
}
