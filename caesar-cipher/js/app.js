//creamos la función para cifrar
function cipher (){
//pedimos la frase al usuario y lo convertimos en array
var userPhrase = prompt("Ingresa la frase que quieras cifrar");
var arrayPhrase = userPhrase.split("");

var toAscii = [];
var arrayCipher = [];
var toAsciiRest = [];

// creamos un for para entrar al array y sacar el código ascii de cada letra y lo guardamos en un nuevo array
for (var i = 0; i< arrayPhrase.length; i++){
  var letras = arrayPhrase[i].charCodeAt();
  //dependiendo del código ascii de la letra le vamos a sumar 7 o le vamos arestar 19
    if(letras < 116){
      toAscii.push(letras + 7);
    } else {
      toAscii.push(letras - 19);
    }
}
//creamos otro for que entre al array de código ascii y le pedimos que lo convierta en carácter y lo guardamos en un nueva variable
for (var j = 0; j < toAscii.length; j++){
  var result = String.fromCharCode(toAscii[j]);
      arrayCipher.push(result);
}
//pasamos el array a strin para mostrarlo al usuario
var textCipher = arrayCipher.join("");
return document.write(textCipher);

}

//aquí empieza la función decipher

function decipher (){
//pedirmos la frase cifrada y la convertimos en array
var userPhrase = prompt("Ingresa la frase que quieras decifrar");
var arrayPhrase = userPhrase.split("");

var toAscii = [];
var arrayCipher = [];
var toAsciiRest = [];

//entramos al array de caracteres y pedimos su código ascii, dependiendo del número le sumaremos 19 o le restaremos 7, lo inverso a la función cifrar
for (var i = 0; i< arrayPhrase.length; i++){
  var letras = arrayPhrase[i].charCodeAt();
    if(letras < 104){
      toAscii.push(letras + 19);
    } else {
      toAscii.push(letras - 7);
    }
}
//entramos al array de código ascii y le pedimos que lo convierta en carácter
for (var j = 0; j < toAscii.length; j++){
  var result = String.fromCharCode(toAscii[j]);
      arrayCipher.push(result);
}
//pasamos el array a string y lo mostramos al usuario
var textCipher = arrayCipher.join("");
return document.write(textCipher);

}

//cipher();
decipher ();
