let nota1 = Number(prompt("Digite sua primeira nota"))
let nota2 = Number(prompt("Digite sua segunda nota"))
let nota3 = Number(prompt("Digite sua terceira nota"))

let media = (nota1 + nota2 + nota3) / 3
media = parseFloat(media);

if(media >= 7){
    alert(`Voce está aprovado com a média ${media.toFixed(2)}`)
}else{
    alert(`Você está reprovado com a média ${media.toFixed(2)}`)
}

