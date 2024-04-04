/*
Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.”
*/

function mostrarDobro(num) {
  alert("O dobro do número " + num + " é " + num * 2);
}

let num = prompt("Digite um número:");
mostrarDobro(parseInt(num)); // Convertendo a entrada para um número inteiro
