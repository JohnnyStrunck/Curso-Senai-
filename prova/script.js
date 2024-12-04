//--exercicio 1--//

// let quantidade = Number(prompt("Quantos números você deseja digitar?"));
// let numeros = [];

// for (let i = 0; i < quantidade; i++) {
//     let numero = Number(prompt(`Digite o número ${i + 1}:`)); 
//     numeros.push(numero); 
// }
// console.log("Os números digitados foram:" + numeros);



//--exercicio 2--//

// let quantidade = Number(prompt("Quantos números você deseja digitar?"));
// let numeros = [];
// for (let i = 0; i < quantidade; i++) {
//     let numero = Number(prompt(`Digite o número ${i + 1}:`));
//     numeros.push(numero);
// }
// console.log("Os números na ordem inversa são:");
// for (let i = numeros.length - 1; i >= 0; i--) {
//     console.log(numeros[i]);
// }
    

//--exercicio 3--//
    
// let quantidade = Number(prompt("Quantos números você deseja digitar?"));
// let numeros = [];


// for (let i = 0; i < quantidade; i++) {
//     let numero = Number(prompt(`Digite o número ${i + 1}:`));
//     numeros.push(numero); 
// }

// let maiorNumero = numeros[0];
// let menorNumero = numeros[0];

// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > maiorNumero) {
//         maiorNumero = numeros[i]; 
//     }
//     if (numeros[i] < menorNumero) {
//         menorNumero = numeros[i]; 
//     }
// }
// console.log("O maior número digitado foi: " + maiorNumero);
// console.log("O menor número digitado foi: " + menorNumero);

//--exercicio 4--//

// let quantidade = Number(prompt("Quantos números você deseja digitar?"));
// let numeros = [];

// for (let i = 0; i < quantidade; i++) {
//     let numero = Number(prompt(`Digite o número ${i + 1}:`));
//     numeros.push(numero);
// }
// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i]; 
// }
// console.log("A soma total dos números digitados é: " + soma);

// --exercicio 5--//

// let quantidade = Number(prompt("Quantos números você deseja digitar?"));
// let numeros = [];

// for (let i = 0; i < quantidade; i++) {
//     let numero = Number(prompt(`Digite o número ${i + 1}:`));
//     numeros.push(numero);
// }
// let acimaDe18 = 0;
// let abaixoDe3 = 0;

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] > 18) {
//         acimaDe18++;
//     }
//     if (numeros[i] < 3) {
//         abaixoDe3++;
//     }
// }
// console.log("Quantidade de números acima de 18: " + acimaDe18);
// console.log("Quantidade de números abaixo de 3: " + abaixoDe3);


//exercicio 6 --//
// Faça um programa que solicite ao usuário quantos números deseja digitar, solicite que digite cada número do array e após mostre os números ordenados do maior para menor

// let quantidade = Number(prompt("Quantos números você deseja digitar?"));
// let numeros = [];

// for (let i = 0; i < quantidade; i++) {
//     let numero = Number(prompt(`Digite o número ${i + 1}:`));
//     numeros.push(numero);
// }

// numeros.sort((a, b) => b - a);

// console.log("Os números ordenados do maior para o menor são:");
// console.log(numeros);



//--exercicio 7-//

//Merge sort    


