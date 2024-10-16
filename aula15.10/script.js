let listaNumeros = [ 30 , 40 , 50 , 30 , 20]; // array
listaNumeros.push(35) // inclui 1 numero
listaNumeros.pop() // retira o ultimo numero incluido
listaNumeros[3] = 10 // seleciona posicao e troca o numero
console.log (listaNumeros)
let i ;
for ( i=0;i<=20;i++){
    if(i % 2 == 0)
    listaNumeros.push(i)
    
}
listaNumeros[5] = 15
console.log(listaNumeros)