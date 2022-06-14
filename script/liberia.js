// Libreria de funciones Generales
const urlApi = 'script/api.json'


const guardarPaqueteStorage = (clave, valor) => {
    localStorage.setItem(clave, valor);
}

const buscarPaquete = async (query) => {
const resp = await fetch(urlApi)
const data = await resp.json();
return data;
}

const sugerencia = async (query) => {
const resp = await fetch(urlApi)
const data = await resp.json();
return data;
}

