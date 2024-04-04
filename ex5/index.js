/*
Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.
Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores
*/

function ehPerfeito(numero) {
  let somaDivisores = 0;
  let divisores = [];

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      somaDivisores += i;
      divisores.push(i);
    }
  }

  return {
    perfeito: somaDivisores === numero,
    soma: somaDivisores,
    divisores: divisores,
  };
}

let numero = parseInt(prompt("Digite um número inteiro:"));
let resultado = ehPerfeito(numero);

if (resultado.perfeito) {
  document.write(`${numero} é um número perfeito, pois ${numero} = `);
  for (let i = 0; i < resultado.divisores.length; i++) {
    document.write(resultado.divisores[i]);
    if (i < resultado.divisores.length - 1) {
      document.write(" + ");
    } else {
      document.write(` = ${resultado.soma}.`);
    }
  }
} else {
  document.write(`${numero} não é um número perfeito.`);
}
