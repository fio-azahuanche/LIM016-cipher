const cipher = {
  encode: (offset, string) =>{
      let mensajeCifrado="";
      for (let i=0; i<string.length ;i++){
        let letra = string[i];
        if(string.charCodeAt(i)>64 && string.charCodeAt(i)<91){
          letra = String.fromCharCode((string.charCodeAt(i)-65+ parseInt(offset))%26+65);
        }
        else if (string.charCodeAt(i)>96 && string.charCodeAt(i)<123){
            letra = String.fromCharCode((string.charCodeAt(i)-97+ parseInt(offset))%26+97);
          }
        else{
          letra = string[i];
        }
        mensajeCifrado += letra;
      }
    return mensajeCifrado;
  },

  decode: (offset,string) =>{
    let mensajeCifrado="";
    for (let i=0; i<string.length ;i++){
      let letra = string[i];
      if(string.charCodeAt(i)>64 && string.charCodeAt(i)<91){
        letra = String.fromCharCode((string.charCodeAt(i)+65- parseInt(offset))%26+65);
      }
      else if(string.charCodeAt(i)>96 && string.charCodeAt(i)<123){
        letra = String.fromCharCode((string.charCodeAt(i)+65- parseInt(offset))%26+97);
      }
      mensajeCifrado += letra;
    }
    return mensajeCifrado;
  }
};

export default cipher;
