    let valorCompra = Number(prompt('Qual o valor de sua compra?'))
    let categoria = Number(prompt('\nSelecione sua categoria: \n 1) Assinante Premium \n 2) Assinante Gold \n 3) Assinante Silver \n 4) Não Assinante'))
    
switch(categoria){

    case 1: // assinante premium 

        let percentualPremium = 0.20
         valorCompra = valorCompra - (valorCompra * percentualPremium)
         let valorTotal = valorCompra
         alert(`O valor da sua compra foi de ${valorTotal} reais. `)
    break ;

    case 2 : // assinante gold

        let percentualGold = 0.20
        valorCompra = valorCompra - (valorCompra * percentualGold) + 12.50
        let valorTotal1 = valorCompra
        alert(`O valor de sua compora foi de R$ ${valorTotal1} .`)
    break;

    case 3 : // assinante silver 

        let percentualSilver = 0.10
        valorCompra = valorCompra - ( valorCompra * percentualSilver) + 12.50
        let valortotal2 = valorCompra
        alert(`O valor de sua compra foi de R$ ${valortotal2}.`)
    break ;

    case 4 : // Sem beneficios

    valorTotal3 = valorCompra + 12.50
    alert(`O valor de sua compra foi de R$ ${valorTotal3}.`)
    break;

    default:

    alert(`Digite uma opção válida`)


}


