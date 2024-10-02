function tabuada (numero , inicio){
    for(var i = 1  ;i <= inicio ; i++){
        if(par(i * numero)==true){
        //Start //Stop//---Step//  
console.log(numero*i)
}
}
}
function par (pares){
    if(pares % 2 == 0 ){
        return true
    }else {
        return false
        
    }
} 
    

let fim = prompt("Digite um número para ter a tabuada : ")
let inicio = prompt("Digite até que número você deseja saber :")
fim = parseInt(fim)
inicio = parseFloat (inicio)
tabuada(fim , inicio)


