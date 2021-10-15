const cipher = {
  encode: (offset, string) =>{
    if (offset === null || offset === 0) {
      throw new TypeError(); /* TypeError se usa cuando un parametro no es valido*/
    }

    let mensajeCifrado="";
    for (let i=0; i<string.length ;i++){
      let letra = string[i];
      /* Mayusculas */
      if(string.charCodeAt(i)>64 && string.charCodeAt(i)<91){
        letra = String.fromCharCode((string.charCodeAt(i)-65+ parseInt(offset))%26+65);
      }
      /* minusculas y números */
      else if (string.charCodeAt(i)>96 && string.charCodeAt(i)<123){
        letra = String.fromCharCode((string.charCodeAt(i)-97+ parseInt(offset))%26+97);
      }
      else if(string.charCodeAt(i)>47 && string.charCodeAt(i)<58){
        letra = String.fromCharCode((string.charCodeAt(i)-48+ parseInt(offset))%10+48);        
      }
      /* Espacios en blanco y demás caracteres */
      else{
        letra = string[i];
      }
      mensajeCifrado += letra;
      }
    return mensajeCifrado;
  },

  decode: (offset,string) =>{
    if (isNaN(offset) || offset ===null || offset === 0) {
      throw new TypeError();
    }

    let mensajeCifrado="";
    for (let i=0; i<string.length ;i++){
      let letra = string[i];
      /* Mayusculas */
      if(string.charCodeAt(i)>64 && string.charCodeAt(i)<91){
        letra = String.fromCharCode((string.charCodeAt(i)-90- parseInt(offset))%26+90);
      }
      /* minusculas y números */
      else if(string.charCodeAt(i)>96 && string.charCodeAt(i)<123){
        letra = String.fromCharCode((string.charCodeAt(i)-122- parseInt(offset))%26+122);
      }
      else if(string.charCodeAt(i)>47 && string.charCodeAt(i)<58){
        letra = String.fromCharCode((string.charCodeAt(i)-57- parseInt(offset))%10+57);        
      }
      /* Espacios en blanco y demás caracteres */
      else{
        letra = string[i];
      }
      mensajeCifrado += letra;
    }
    return mensajeCifrado;
  }
};

export default cipher;
