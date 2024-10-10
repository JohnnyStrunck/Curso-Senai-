// exercicio 1

// let numero = 1;

// while (numero !== 11){
// console.log(numero)
// numero++;
// }

//----Exercicio 2----///

// let anos = 0;
// let populacaoA = 80000; // taxa anual de crescimento = 2400
// let populacaoB = 200000; // taxa anual de crescimento = 3000

// while(populacaoA < populacaoB){
//  populacaoA += populacaoA * 0.03;
//  populacaoB += populacaoB * 0.015;
//  anos++;

// }
// alert(`A população A irá alcançar a população B em ${anos} anos`)

//----Exercicio 3----///

let totalGasto = 0;
let quantidadeJogos = 0;
let maisCaro = 0;
let maisBarato = 0; 
while (totalGasto < 2000) {
    let nomeJogo = prompt("Digite o nome do jogo:");
    let valorJogo = Number(prompt("Digite o valor do jogo em R$:"));

   
    if (isNaN(valorJogo) || valorJogo < 0) {
        alert("Por favor, insira um valor válido para o jogo.");
        continue; 
    }

    
    if (totalGasto + valorJogo > 2000) {
        alert("O valor total ultrapassa R$2000. Compra encerrada.");
        break; 
    }

    totalGasto += valorJogo;
    quantidadeJogos++;

  
    if (valorJogo > maisCaro) {
        maisCaro = valorJogo;
    }
    if (valorJogo < maisBarato) {
        maisBarato = valorJogo;
    }
}


alert(`Total gasto: R$${totalGasto.toFixed(2)}`);
alert(`Quantidade de jogos: ${quantidadeJogos}`);
alert(`O jogo mais caro custou: R$${maisCaro.toFixed(2)}`);
alert(`O jogo mais barato custou: R$${maisBarato.toFixed(2)}`);

//----Exercicio 5----//

// let parar = 0;
// let tempoTotal = 0

//     while(parar === 0){

//         let musica = prompt('Qual o nome da música?\nDigite 0 para parar!')
//         let tempoMusica = Number(prompt('Quantos minutos tem a música?'))

//         parar++;
//     }


