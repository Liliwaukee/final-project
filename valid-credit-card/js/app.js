// creamos nuestra function
function isValid() {

// vamos a guardar los datos que ingrese el usuario en una variable
var numbers = prompt("Ingresa los números de tu tarjeta");
var cadena = numbers.toString();//convertimos a string
var newArray = cadena.split("");//convertimos a array
var inverse = newArray.reverse();// cambiamos el orden de los números

if(inverse.length === 16){ //aquí comprobamos que sea un tarjeta con 16 digitos o no la podrá validar

var odd = 0;
var even = 0;
var evenPlus = 0;

//aquí sacamos numeros impares y los vamos aguardar en la variable odd


for(var i = 0; i <16; i++){
   if(i % 2 !== 0){
     odd += parseInt(inverse[i]);

  } else if(inverse[i] === 5){
    evenPlus += 1;

  } else if(inverse[i] === 6){
    evenPlus += 3;

  } else if(inverse[i] === 7){
    evenPlus += 5;

  } else if(inverse[i] === 8){
    evenPlus += 7;

  }else if(inverse[i] === 9){
    evenPlus += 9;

  }else{
    even = even + (inverse[i] * 2);
  }
}

      var ckeckCard = odd + even + evenPlus;
        if(ckeckCard % 10 === 0){
          return document.write("It´s a valid card");
        } else {
          return document.write("Your card isn´t a valid card");
  }
    } else {
   return "Debes ingresar 16 digitos para validar tu tarjeta";
  }
}

isValid();
//4152313059935309
