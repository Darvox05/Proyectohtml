document.getElementById('sumarNumeros').addEventListener('click', function() {
    let suma = 0;
    for (let i = 1; i <= 150; i++) {
        suma += i;
    }

    document.getElementById('resultadoSuma').textContent = `La suma de los primeros 150 números es: ${suma}`;
});
