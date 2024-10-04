
let soma = 0; 
let contador = 0; 

while (true) {
  let nota = parseFloat(prompt("Digite sua nota (-1 para parar ): ").replaceAll(`,`,`.`)); 
  if (nota == -1) {
    break; 
  }
  soma += nota; 
  contador++; 
}

if (contador == 0) {
  alert("Sem notas!");
} else {
  let media = soma / contador; 
  alert(`Sua média é : ${media}`);
}


