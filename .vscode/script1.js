function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (!weight || !height) {
        document.getElementById('result').innerText = 'Por favor, preencha ambos os campos.';
        return;
    }

    const imc = weight / (height * height);
    let classification = '';

    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
    } else {
        classification = 'Obesidade';
    }

    document.getElementById('result').innerText = `Seu IMC é: ${imc.toFixed(2)} - ${classification}`;
}
