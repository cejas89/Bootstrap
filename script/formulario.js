window.onload = iniciar;
import swal from 'sweetalert';

// Declaracion de variables, traidas del DOM
let inputNombre = document.getElementById('form-nombre');
let inputEmail = document.getElementById('form-email');
let inputDireccion = document.getElementById('form-direccion');
let inputMensaje = document.getElementById('form-mensaje');
let botonEnviar = document.getElementById('form-btn');

//ArrayVacio para guardar los objetos
let datosForm = [];
let objetoForm;

//iterador de id
let id = 0;


//Constructor para objetos de formulario

class DatosFormuario {
    constructor (id, nombre, email, dirreccion, mensaje, estado) {
        this.id = id,
        this.nombre = nombre,
        this.email = email,
        this.dirreccion = dirreccion,
        this.mensaje = mensaje;

        /*function tipoEstado(estado) {
            this.estado = estado;
        }*/
    }
}



function iniciar () {
    botonEnviar.addEventListener("click", contacto)

}

const contacto = () => {
    // declaro los valores que traigo en el input
    let valorNombre = inputNombre.value;
    let valorEmail = inputEmail.value;
    let valorDireccion = inputDireccion.value;
    let valorMensaje = inputMensaje.value;

    //creo un objeto donde contengan los datos y lo pusheo al array para guardar la info
    objetoForm = new DatosFormuario(valorNombre, valorEmail, valorDireccion, valorMensaje)
    datosForm.push(objetoForm);
    console.log(datosForm);

    //lo guardo en localstorage
    guardarPaqueteStorage(Math.random(), JSON.stringify(datosForm));

    //mensaje de confirmacion
    swal("Hello world!");

}