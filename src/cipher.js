const cipher = {
  encode: (string, offset) =>{
    let mensajeCifrado="";
    for (let i=0; i<string.length ;i++){
      let letra = string[i];
      letra = String.fromCharCode((string.charCodeAt(i)-65+ parseInt(offset))%26+65);
      mensajeCifrado += letra;
    }
    return mensajeCifrado;
  }
  

};

export default cipher;
