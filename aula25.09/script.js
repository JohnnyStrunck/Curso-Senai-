// let dias = Number(prompt("Escolha um mês"));

// switch(dias){
   
//     case 1 :
//     case 3 :
//     case 5 :  
//     case 7 :
//     case 8 :  
//     case 10 :
//     case 12 :
//          alert(`Esse mês possui 31 dias`)
// break
    
//     case 2 :
//          alert(`Esse mês possui 28 dias`)        
// break
    
//     case 4 :
//     case 6 :
//     case 9 :
//     case 11 :
//          alert(`Esse mês possui 30 dias`)
// break

// default :
//          alert(`Digite um mês correto`)
// break
// }


//---------------------- exercicio 2 ----------------------//



let saldo = 9500
let deposito
let saldototal
let saque
let saldosaque
let opcao = Number(prompt("Escolha uma das opções abaixo.\n 1) Saldo \n 2) Depósito \n 3) Saque \n "))
    
 
switch(opcao){
    
    case 1 : 
        alert(`Seu saldo é de ${saldo} reais.`)
    break

    case 2 :
    deposito = Number(prompt("Qual o valor do seu depósito?"))
    
    if(deposito <=0){ 
        alert(`Depósito insuficiente`)

    }else{
    // saldototal += deposito
    saldototal = deposito + saldo
        alert (`Seu saldo atual é de ${saldototal} reais`)
    }
    break

    case 3 :
    saque = Number(prompt("Quanto você deseja sacar de sua conta?"))
    //saldosaque -= saque 
    saldosaque = saldo - saque 

    if(saque >saldo){
        alert(`Saque Indisponível`)
    
    }else{
        alert(`Seu saldo atual é de ${saldosaque} reais`)

    }
    break
    
    default:
        alert(`..`)


}
