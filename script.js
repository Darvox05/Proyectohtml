// en constructor recibo un parametro, no importa el nombre
class ValidadorFormulario {
    constructor(idFormulario){
    console.log(idFormulario)
    this.form = document.getElementById(idFormulario);

    //seleccionar inputs
    this.nombre = document.getElementById('nombre');
    this.email = document.getElementById('email');
    this.mensaje = document.getElementById('mensaje');


    // Seleccionar span de error
    this.nombreError = document.getElementById('nombreError');
    this.emailError = document.getElementById('emailError');
    this.mensajeError = document.getElementById('mensajeError');


    //Escuchar los eventos del usuario
    this.form.addEventListener('submit', (event) => {
        event.preventDefault();  // evitar el envío de formulario por defecto

        if (this.validarFormulario()) {
            alert('enviando informacion')
        }
    });

}

// método, fuera del constructor y dentro de la clase.
//validarFormulario() {
//}
validarFormulario() {

    // console.log('ingreso al método')

    // console.log(this.usuario.value, 'esto llega de usUARIOOOOO');
    let valid = true;

    // Validacion del nombre
    if (this.nombre.value === '') {
        this.nombreError.textContent = 'El nombre del usuario es obligatorio';
        this.nombre.classList.add('error-input');
        console.log('Clase error-input agregada al elemento nombre');
        valid = false;
    }else {
        this.nombreError.textContent = '';
        this.nombre.classList.remove('error-input');
    }



    // Validacion del email
    if (this.email.value === '') {
        this.emailError.textContent = 'Email es obligatoria';
        this.email.classList.add('error-input');
        valid = false;
    }else {
        this.emailError.textContent = '';
        this.email.classList.remove('error-input');
    }



     // Validacion del mensaje 
    if (this.mensaje.value === '') {
        this.mensajeError.textContent = 'Mensaje es obligatorio';
        this.mensaje.classList.add('error-input');
        valid = false;
    }else {
        this.mensajeError.textContent = '';
        this.mensaje.classList.remove('error-input');
    }

    if (this.nombre.value !== '' && this.email.value !== '') {
    alert('Informacion Correcta');
    }
    
    return valid;
}
}
