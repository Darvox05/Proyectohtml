document.getElementById('conversorTemperaturaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let temperatura = parseFloat(document.getElementById('temperatura').value);
    let tipoConversion = document.getElementById('tipoConversion').value;

    let resultado;
    if (tipoConversion === 'cToF') {
        resultado = celsiusAFahrenheit(temperatura);
        document.getElementById('resultado').innerText = `${temperatura} °C es igual a ${resultado.toFixed(2)} °F`;
    } else {
        resultado = fahrenheitACelsius(temperatura);
        document.getElementById('resultado').innerText = `${temperatura} °F es igual a ${resultado.toFixed(2)} °C`;
    }
});

function celsiusAFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}