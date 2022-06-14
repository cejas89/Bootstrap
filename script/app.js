// DOM
let eventoPaquete = document.getElementById('paquetes');
let eventoVuelo = document.getElementById('vuelos')
let eventoHotel = document.getElementById('hoteles');
let seccionPaquetes = document.getElementById('seccionPaquetes');
let seccionHoteles = document.getElementById('seccionHoteles');
let seccionVuelos = document.getElementById('seccionVuelos');

// DOM FORM
let inputPais = document.getElementById('inputPais');
let btnBuscar = document.getElementById('btnBuscar');
let btnReset = document.getElementById('btnReset')
let busquedaPaquetes = document.getElementById('seccionBusqueda');
let errorDestino = document.getElementById('errorDestino');


// Eventos para seleccionar la informacion deseada en el dom
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


btnReset.addEventListener("click", () => {
    location.reload();
})




const buscar = () => {
    btnBuscar.addEventListener("click", async () => {
        const data = await buscarPaquete();
        //console.log(data);
        const divFetch = document.createElement('div')
        divFetch.innerHTML = "";
        //let containerFetch = document.getElementById('containerFetch');
        //let divFetch = document.createElement('div')
        //divFetch.innerHTML = "";
        data.forEach((datos) => {
        const titulos = datos.nombre;
        if (inputPais.value === titulos) {
            console.log(titulos);
            seccionPaquetes.style.display = "none";
            seccionHoteles.style.display = "none";
            seccionVuelos.style.display = "none";
            busquedaPaquetes.style.display = "";
            errorDestino.style.display="none";
        } else {
            errorDestino.style.display="";
            seccionPaquetes.style.display = "none";
            seccionHoteles.style.display = "none";
            seccionVuelos.style.display = "none";
            busquedaPaquetes.style.display = "none";
        }
        })

    })
};

buscar();