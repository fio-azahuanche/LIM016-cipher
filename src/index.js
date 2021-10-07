import cipher from './cipher.js';

/* Cambio pantalla1 a pantalla2 
Evento: click en botón Empezar más arrow function*/
const botonEmpezar = document.getElementById('botonEmpezar');
botonEmpezar.addEventListener('click', ()=>{
    document.getElementById("pantalla1").style.display='none';
    document.getElementById("pantalla2").style.display='block';
})

/*Evento: click en boton Limpiar*/
const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', ()=>{
    document.getElementById("mensajeCifrado").innerHTML="";
})

/* Cifrando el mensaje 
Evento: click en botón CIFRAR más método obj.encode*/
const botonCifrar = document.getElementById('botonCifrar');
botonCifrar.addEventListener('click', ()=>{
    let mensajeOriginal=document.getElementById('mensajeOriginal').value;
    let shift = document.getElementById('shift').value;
    document.getElementById("mensajeCifrado").innerHTML = cipher.encode(shift,mensajeOriginal);
})

/* Descifrando el mensaje 
Evento: click en botón DESCIFRAR más método obj.decode*/
const botonDescifrar = document.getElementById('botonDescifrar');
botonDescifrar.addEventListener('click', ()=>{
    let mensajeOriginal=document.getElementById('mensajeOriginal').value;
    let shift = document.getElementById('shift').value;
    document.getElementById("mensajeCifrado").innerHTML = cipher.decode(shift,mensajeOriginal);
})



//NO BORRAR ESTO
console.log(cipher);






