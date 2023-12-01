document.getElementById('conversionForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let cantidad = parseFloat(document.getElementById('cantidad').value);
    let unidadOrigen = document.getElementById('unidadOrigen').value;
    let unidadDestino = document.getElementById('unidadDestino').value;

    let resultado = convertirUnidades(cantidad, unidadOrigen, unidadDestino);
    document.getElementById('resultado').innerText = `Resultado: ${resultado} ${unidadDestino}`;
});

function convertirUnidades(cantidad, unidadOrigen, unidadDestino) {
    let enLitros;
    switch (unidadOrigen) {
        case 'centilitros': enLitros = cantidad / 100; break;
        case 'decilitros': enLitros = cantidad / 10; break;
        case 'galones': enLitros = cantidad * 3.78541; break;
        case 'onzas': enLitros = cantidad * 0.0295735; break;
        default: enLitros = cantidad; 
    }

    // Convertir de litros a la unidad destino
    switch (unidadDestino) {
        case 'centilitros': return enLitros * 100;
        case 'decilitros': return enLitros * 10;
        case 'galones': return enLitros / 3.78541;
        case 'onzas': return enLitros / 0.0295735;
        default: return enLitros; 
    }
}
