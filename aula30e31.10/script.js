// function verificarParImpar(numero) {
//     if (numero % 2 == 0) {
//         return 'O número ' + numero + ' é par.';
//     } else {
//         return 'O número ' + numero + ' é ímpar.';
//     }
// }

// // Exemplos de uso
// console.log(verificarParImpar(4)); // O número 4 é par.
// console.log(verificarParImpar(7)); // O número 7 é ímpar.



// // Função para converter Celsius para Fahrenheit
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// // Função para converter Celsius para Kelvin
// function celsiusToKelvin(celsius) {
//     return celsius + 273.15;
// }

// // Função para converter Fahrenheit para Celsius
// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
// }

// // Função para converter Fahrenheit para Kelvin
// function fahrenheitToKelvin(fahrenheit) {
//     return (fahrenheit - 32) * 5/9 + 273.15;
// }

// // Função para converter Kelvin para Celsius
// function kelvinToCelsius(kelvin) {
//     return kelvin - 273.15;
// }

// // Função para converter Kelvin para Fahrenheit
// function kelvinToFahrenheit(kelvin) {
//     return (kelvin - 273.15) * 9/5 + 32;
// }

// // Exemplo de uso
// console.log(celsiusToFahrenheit(25)); // 77
// console.log(celsiusToKelvin(25)); // 298.15
// console.log(fahrenheitToCelsius(77)); // 25
// console.log(fahrenheitToKelvin(77)); // 298.15
// console.log(kelvinToCelsius(298.15)); // 25
// console.log(kelvinToFahrenheit(298.15)); // 77


// function somarIntervalo(numeroA, numeroB) {
//     // Verifica se numeroA é maior que numeroB e troca os valores se necessário
//     if (numeroA > numeroB) {
//         [numeroA, numeroB] = [numeroB, numeroA]; // Troca os valores
//     }

//     let soma = 0;
    
//     // Laço for para somar os números no intervalo
//     for (let i = numeroA; i <= numeroB; i++) {
//         soma += i;
//     }

//     return soma;
// }

// // Exemplo de uso
// const resultado = somarIntervalo(1, 5);
// console.log(`A soma do intervalo é: ${resultado}`); // Saída: A soma do intervalo é: 15



function calcularMedia(array) {
    // Verifica se o array está vazio
    if (array.length === 0) {
        return 0; // Retorna 0 se o array estiver vazio
    }

    let soma = 0;

    // Soma todos os elementos do array
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    // Calcula a média
    const media = soma / array.length;

    return media; // Retorna a média
}

// Exemplo de uso:
const numeros = [10, 20, 30, 40, 50];
const media = calcularMedia(numeros);
console.log("A média é:", media); // A média é: 30