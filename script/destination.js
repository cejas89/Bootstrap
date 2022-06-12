

window.onload = VerMas;

// Traigo elementos del DOM
let button = document.getElementById('btnVerMas');
//let btnVerMenos = document.getElementById('btnVerMenos');
let btnAgregar = document.getElementById('btnAgregar');
let btnEliminar = document.getElementById('btnEliminar');
let containerOculto = document.getElementById('containerOculto');
//let precioAdultos = parseInt(document.getElementById('precioAdultos').textContent);
//let precioMenores = parseInt(document.getElementById('precioMenores').textContent);




function VerMas() {
    button.addEventListener("click", cambiarClase);
    iterador();
   
    console.log("ver mas");
}

function cambiarEstado() {
    btnVerMenos.addEventListener("click", cambiarEstado)
    btnVerMenos.textContent = "";
    cambiarClase();
    button.textContent = "Ver mas";
    console.log("estado");
}

const cambiarClase = (e) => {
    button.textContent = "Ver Menos";
    // e.preventDefault();
    containerOculto.classList.toggle('containerVista');
    console.log("ver menos");
}




function iterador() {
    let contador = 0;

    btnAgregar.addEventListener("click", () => {
        valorDelPaquete();
        contador++;
        let iterador = document.getElementById('iterador')
        if (contador <= 0) {
            iterador.textContent = "";
            contador = 0;
        } else {
            iterador.textContent = contador;

        }
        console.log(contador)

    });


    btnEliminar.addEventListener("click", () => {
        contador--;
        let iterador = document.getElementById('iterador')
        if (contador <= 0) {
            iterador.textContent = "";
        } else {
            iterador.textContent = contador;

        }
        console.log(contador);
        
    })
}


function valorDelPaquete() {
    let precioAdultos = parseInt(document.getElementById('precioAdultos').textContent);
    let precioMenores = parseInt(document.getElementById('precioMenores').textContent);
    let precioTotalAdultos = document.getElementById('precioTotalAdultos');
    let precioTotalMenores = document.getElementById('precioTotalMenores');

    const selectAdultos = document.getElementById('selectAdultos');
    const selectMenores = document.getElementById('selectMenores');

    selectAdultos.addEventListener("click", (e) => {
        let result = e.target.value;
        if (result != 0) {
            precioTotalAdultos.textContent = "El valor del total de los mayores es de USD " + (precioAdultos * result);
            console.log(result);
        } else {
            precioTotalAdultos.textContent = "";
        }

    })

    selectMenores.addEventListener("change", (e) => {
        let result = e.target.value;
        if (result != 0) {
            precioTotalMenores.textContent = "El valor del total de los menors es de USD " + (precioMenores * result);
            console.log(e);
        } else {
            precioTotalMenores.textContent = "";
        }

    })
}