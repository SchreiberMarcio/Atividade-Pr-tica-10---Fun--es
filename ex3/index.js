/*
Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.
*/

function primo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

let numero = parseInt(prompt("Digite um número inteiro e positivo:"));
let resultado = primo(numero);

if (resultado) {
  console.log(`Verdadeiro! ${numero} é primo.`);
} else {
  console.log(`Falso! ${numero} não é primo.`);
}
