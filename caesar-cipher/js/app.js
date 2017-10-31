function cipher (){

var userPhrase = prompt("Ingresa la frase que quieras cifrar");
var arrayPhrase = userPhrase.split("");

var toAscii = [];
var arrayCipher = [];
var toAsciiRest = [];


for (var i = 0; i< arrayPhrase.length; i++){
  var letras = arrayPhrase[i].charCodeAt();
    if(letras < 116){
      toAscii.push(letras + 7);
    } else {
      toAscii.push(letras - 19);
    }
}

for (var j = 0; j < toAscii.length; j++){
  var result = String.fromCharCode(toAscii[j]);
      arrayCipher.push(result);
}

var textCipher = arrayCipher.join("");
return textCipher;

}

//aquí empieza la función decipher

function decipher (){

var userPhrase = prompt("Ingresa la frase que quieras decifrar");
var arrayPhrase = userPhrase.split("");

var toAscii = [];
var arrayCipher = [];
var toAsciiRest = [];


for (var i = 0; i< arrayPhrase.length; i++){
  var letras = arrayPhrase[i].charCodeAt();
    if(letras < 104){
      toAscii.push(letras + 19);
    } else {
      toAscii.push(letras - 7);
    }
}

for (var j = 0; j < toAscii.length; j++){
  var result = String.fromCharCode(toAscii[j]);
      arrayCipher.push(result);
}

var textCipher = arrayCipher.join("");
return textCipher;

}

//cipher();
//decipher ();
