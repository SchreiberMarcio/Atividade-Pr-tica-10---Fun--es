/*
Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par.
*/

function parOuImpar(valor) {
  if (valor % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let valor = parseInt(prompt("Digite um valor inteiro!"));
let resultado = parOuImpar(valor);

if (resultado) {
  alert(`Falso ${valor} é par.`);
} else {
  alert(`Verdadeiro ${valor} é ímpar.`);
}
