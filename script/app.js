
// DOM
let paisDestino = document.getElementById('paisDestino');
let nombreDestino = document.getElementById('nombreDestino');
let btnBuscar = document.getElementById('btnBuscar');
//let inputPais = document.getElementById('inputPais').value;
let eventoPaquete = document.getElementById('paquetes');
let eventoVuelo = document.getElementById('vuelos')
let eventoHotel = document.getElementById('hoteles');
let seccionPaquetes = document.getElementById('seccionPaquetes');
let seccionHoteles = document.getElementById('seccionHoteles');
let seccionVuelos = document.getElementById('seccionVuelos');



/*
// funcion para buscar de paquetes 
const obtenerPaquete = (inputPais) => {  
    console.log(data);
}

// evento para buscar esa funcion

btnBuscar.addEventListener("click", buscarPaquete())

*/
function cambiarVuelos () {
    seccionPaquetes.classList.toggle = "containerOculto";
    seccionHoteles.classList.toggle = "containerOculto";
    seccionVuelos.classList.toggle = "vuelos-ofertas";
}

function cambiarPaquetes () {
    seccionPaquetes.classList.toggle = "paquetes-ofertas";
    seccionHoteles.classList.toggle = "containerOculto";
    seccionVuelos.classList.toggle = "containerOculto";
}

function cambiarHoteles () {

}

eventoHotel.addEventListener("click", () => {
    seccionPaquetes.style.display = "none";
    seccionHoteles.style.display = "";
    seccionVuelos.style.display = "none";
});

eventoPaquete.addEventListener("click", () => {
    seccionPaquetes.style.display = "";
    seccionHoteles.style.display = "none";
    seccionVuelos.style.display = "none";
});

eventoVuelo.addEventListener("click", () => {
    seccionPaquetes.style.display = "none";
    seccionHoteles.style.display = "none";
    seccionVuelos.style.display = "";
});