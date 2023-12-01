document.getElementById('generarNumeros').addEventListener('click', function() {
    const lista = document.getElementById('listaNumerosPares');
    lista.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            const elemento = document.createElement('li');
            elemento.classList.add('list-group-item');
            elemento.textContent = i;
            lista.appendChild(elemento);
        }
    }
});
