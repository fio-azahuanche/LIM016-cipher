import cipher from './cipher.js';

/* Cambio pantalla1 a pantalla2 
Evento: click en botón Empezar más arrow function*/
const botonEmpezar = document.getElementById('botonEmpezar');
botonEmpezar.addEventListener('click', ()=>{
    document.getElementById("pantalla1").style.display='none';
    document.getElementById("pantalla2").style.display='block';
})

let mensajeOriginal="ABCD";
let mensajeCifrado="";
for (let i=0; i<mensajeOriginal.length;i++){
    let codeLetra=mensajeOriginal.charCodeAt(i);
    mensajeCifrado += String.fromCharCode(codeLetra+1);
}
console.log(mensajeCifrado)

console.log(cipher);






