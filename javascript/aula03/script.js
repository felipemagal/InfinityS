// 1 - Utilize while/for imprima 10 vezes a mensagem 'Olá, Mundo!'
// for (i = 1; i <= 10; i++) {
//   console.log(i + " Olá, mundo!");
// }

// let i = 0;
// while (i < 10) {
//   console.log("Olá, mundo!");
//   i++;
// }

// 2 - Utilize while/for para imprimir uma sequência de 0 a 100.

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// for (i = 1; i <= 100; i++) {
//   console.log(i);
// }

// 3 - Utilize while/for para imprimir um sequência de 0 até um número digitado pelo usuário

// const digiteUmNumero = Number(prompt("Digite um número"));
// for (acc = 0; acc <= digiteUmNumero; acc++) {
//   console.log(acc);
// }

// 4 - Utilize while/for para imprimir todos os pares entre 1 e o número digitado pelo usuário

// const numero = Number(prompt("Digite um número"));
// let acc = 1;
// while (acc <= numero) {
//   if (acc % 2 === 0) {
//     console.log(acc);
//   }
//   acc++;
// }

// 5 - Escreva um programa que solicite um númeor inteiro positivo e faça uma contagem regressiva a partir desse número até 0.

let contagemRegressiva = Number(prompt("Digite um número"));
for (let i = contagemRegressiva; i >= 0; i--) {
  console.log(i);
}
