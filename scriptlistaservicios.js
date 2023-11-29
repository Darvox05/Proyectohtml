`use strict`
function consulDatos() {
    fetch("./informacion-json/informacion-listaservicios.json")
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("no response");
            }
            console.log(respuesta)
            return respuesta.json();
        })
        .then(data => {
            const seleccionarlistaservicios = document.querySelector("#listaservicios")
            console.log(data)
            for (let i = 0; i < data.tarjetas.length; i++) {
                const crearDoc = document.createElement("div")
                crearDoc.classList.add("rectangulo3")
                const crearImagen = document.createElement("img")
                crearImagen.classList.add("square1")
                crearImagen.src = (data.tarjetas[i].imagen)
                console.log(data.tarjetas[i].imagen)
                console.log(crearImagen)
                crearDoc.innerHTML = `
                <span class="texto">${data.tarjetas[i].texto}</span>
                `
                crearDoc.appendChild(crearImagen)
                seleccionarlistaservicios.appendChild(crearDoc)
            }
        })
        .catch(error => {
            console.error(error, "errorrrrr");
        });
}
consulDatos();