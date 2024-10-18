// let numero = 1
// let soma = 0
// let quantidade = 0

// while(numero > 0){
//     numero = Number(prompt('Digite um número'))

// if(numero <= 0){
//     alert(`Finalizando`)
//     break;
//     }    


//     soma = soma + numero
//     quantidade++
    
// }
// media = soma / quantidade
// alert(`A média é de ${media}`)

// function realizarEleicao() {
   
//     let votosCandidato1 = 0;
//     let votosCandidato2 = 0;
//     let votosCandidato3 = 0;
//     let votosNulos = 0;
//     let votosEmBranco = 0;

//     let voto; 

//     do {
//         voto = parseInt(prompt("Digite o voto (1, 2, 3 para candidatos, 4 para nulo, 5 para em branco, 0 para encerrar):"));

       
//         switch (voto) {
//             case 1:
//                 votosCandidato1++;
//                 break;
//             case 2:
//                 votosCandidato2++;
//                 break;
//             case 3:
//                 votosCandidato3++;
//                 break;
//             case 4:
//                 votosNulos++;
//                 break;
//             case 5:
//                 votosEmBranco++;
//                 break;
//             case 0:
             
//                 break;
//             default:
//                 alert("Opção inválida, por favor digite um número entre 0 e 5.");
//         }
//     } while (voto !== 0);

   
//     console.log("Total de votos do Candidato 1: " + votosCandidato1);
//     console.log("Total de votos do Candidato 2: " + votosCandidato2);
//     console.log("Total de votos do Candidato 3: " + votosCandidato3);
//     console.log("Total de votos nulos: " + votosNulos);
//     console.log("Total de votos em branco: " + votosEmBranco);

   
//     let vencedor;
//     if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
//         vencedor = "Candidato 1";
//     } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
//         vencedor = "Candidato 2";
//     } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
//         vencedor = "Candidato 3";
//     } else {
//         vencedor = "Empate ou sem votos válidos.";
//     }

//     console.log("Candidato vencedor: " + vencedor);
// }


// realizarEleicao();

// let voto 
// let candidato1 = 0
// let candidato2 = 0
// let candidato3 = 0
// let votosNulos = 0
// let votosEmBranco = 0
// // variaveis que fazem soma sempre começam com ZERO


//     while(voto != 0){
//         voto = Number(prompt('Passe o numero do seu voto'))


//     }


// ---- exercicio ---- //
// let numero = Number(prompt('Digite um número'))
// let soma = 0

// for(let contador = 0;contador<=numero;contador++){
// console.log(contador)

//   soma += contador 
// }
// alert(`A soma dos números é ${soma}`)

// ---- exercicio 1 ----//


let multas = Number(prompt('Digite quantas multas você deseja cadastrar'))
let pontosPerdidos = 0
let somaPontos = 0

    for(let contador = 0; contador < multas; contador++){
        pontosPerdidos = Number(prompt('Digite a quantidade de pontos perdido em cada multa '))
        somaPontos += pontosPerdidos
        
}

    if(pontosPerdidos >=21){
        alert(`Você está irregular`)
    }else{
        alert(`Você está regular`)
    }