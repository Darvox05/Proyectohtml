document.addEventListener('DOMContentLoaded', function() {
    const camposPrecios = document.getElementById('camposPrecios');
    for (let i = 1; i <= 10; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Precio del producto ${i}`;
        input.required = true;
        input.classList.add('form-control', 'mt-2');
        camposPrecios.appendChild(input);
    }
});

document.getElementById('formularioPrecios').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('#camposPrecios input');
    let total = 0;
    inputs.forEach(input => {
        total += parseFloat(input.value) || 0;
    });
    document.getElementById('total').textContent = `Costo total de los productos: ${total.toFixed(2)}`;
});
