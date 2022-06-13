//window.onload = VerMas;

// Traigo elementos del DOM
let buttonVerMas = document.querySelectorAll('.btnVerMas');
let btnVerMenos = document.querySelectorAll('.btnVerMenos');
let btnAgregar = document.getElementById('btnAgregar');
let btnEliminar = document.getElementById('btnEliminar');
let containerOculto = document.getElementById('containerOculto');
//let precioAdultos = parseInt(document.getElementById('precioAdultos').textContent);
//let precioMenores = parseInt(document.getElementById('precioMenores').textContent);
let precioTotalAdultos = document.getElementById('precioTotalAdultos');
let precioTotalMenores = document.getElementById('precioTotalMenores');
let valorAdultos = "";
let containerPrice = document.getElementById('container-price')




function VerMas() {

}


const cambiarClase = (e) => {

}


buttonVerMas.forEach(boton => {
    boton.addEventListener("click", () => {
    boton.style.display = "none";
    containerPrice.style.visibility = "hidden";
    containerOculto.classList.toggle('containerVista');
    console.log("ver menos");
    })
    
})

btnVerMenos.forEach(boton => {
    boton.addEventListener("click", () => {
    boton.innerText = "Ver Mas";
        iterador();  
        containerOculto.classList.toggle('containerVista');
        buttonVerMas.style.visibility = "visible";
        containerPrice.style.visibility = "visible";
        console.log("ver mas");
        console.log(valorAdultos);
    })
    
})




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
        precioTotalAdultos.textContent = "";
        precioTotalMenores.textContent = "";
        
    })
}


function valorDelPaquete() {
    let precioAdultos = parseInt(document.getElementById('precioAdultos').textContent);
    let precioMenores = parseInt(document.getElementById('precioMenores').textContent);


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