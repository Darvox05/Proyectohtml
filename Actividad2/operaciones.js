document.getElementById('calculadoraForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let operacion = document.getElementById('operacion').value;

    let resultado;
    switch (operacion) {
        case 'sumar':
            resultado = numero1 + numero2;
            break;
        case 'restar':
            resultado = numero1 - numero2;
            break;
        case 'multiplicar':
            resultado = numero1 * numero2;
            break;
        case 'dividir':
            resultado = numero2 !== 0 ? numero1 / numero2 : 'Error: División por cero';
            break;
        default:
            resultado = 'Operación no válida';
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
});
