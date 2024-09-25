let num1 = Number(prompt("Digite um numero"))
let num2 = Number(prompt("Digite outro numero"))
let operador =prompt("Coloque um operador")
let resultado


function calculadora(num1, num2, operador) {
    
    switch (operador) {
        case '+':
            resultado = num1 + num2
            break;
            
        case '-':
            resultado = num1 - num2; 
            
            break;
        case '*':
            resultado = num1 * num2;
           
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2; 
            } else {
                return "Erro: Divisão por zero"; 
            }
            break;
        default:
            return "Erro: Operador inválido";
    }
    
    return resultado; 
}
calculadora(num1,num2,operador)
alert (resultado)