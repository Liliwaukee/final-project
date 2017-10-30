//Creamos un promt para recibir la frase del usario y la guardamos en una variable
var usePhrase = prompt("Ingresa la frase que quieras cifrar o descrifrar");

//Creamos la función cipher

function cipher (){
  var asciiCode = [];
  var asciiMasSiete = [];
  var cifrado = [];

  //acá se saca el código ascii de cada caracter

  for (var i = 0; i< usePhrase.length; i+=1){
    var letters = usePhrase[i].charCodeAt();
    asciiCode.push(letras);
    }
    console.log(asciiCode);
/*
  //aquí adelante los códigos más 7

  for (var i = 0; i< llenar.length; i+=1){
    var newAscii = llenar[i] + 7
    asciiMasSiete.push(newAscii);
    }

    console.log(asciiMasSiete);

  //acá vamos a cifrar el código a césar

    for (var i = 0; i < asciiMasSiete.length; i+=1){
      var resultado = String.fromCharCode(asciiMasSiete[i]);
      cifrado.push(resultado);
    }

  console.log(cifrado);
*/
}
