import cipher from './cipher.js';

/* Cambio pantalla1 a pantalla2 
Evento: click en botón Empezar más arrow function*/
const botonEmpezar = document.getElementById('botonEmpezar');
botonEmpezar.addEventListener('click', ()=>{
    document.getElementById("pantalla1").style.display='none';
    document.getElementById("pantalla2").style.display='block';
})

let mensajeCifrado="";
function cifrar(){
    const botonCifrar = document.getElementById('botonCifrar');
    let mensajeOriginal = document.getElementById('mensajeOriginal').value;
    let shift = parseInt(document.getElementById('shift').value);
    for (let i=0; i<mensajeOriginal.length;i++){
        mensajeCifrado += String.fromCharCode((mensajeOriginal.charCodeAt(i)-65+shift)%26 +65);
    }
    console.log(mensajeCifrado);
}
//Evento: click en cifrar
botonCifrar.addEventListener('click',cifrar,false)

console.log(cipher);






