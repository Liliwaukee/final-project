var number = prompt("ingresa el numero");
var cardNumber = number.split("");


function isValid() {

var inverse = cardNumber.reverse();//87541... números al revés
//console.log(inverse);

var impares = 0;
var pares = 0;
var paresMayor = 0;


for(var i = 0; i <16; i++){ //aquí sacamos numeros impares
  if(i % 2 !== 1){
     impares = impares + parseInt(inverse[i]);
  }
}

for(var j = 1; j <16; j++){ 
  if (j % 2 === 1 && parseInt(inverse[j]) <= 4){
    pares = pares + (parseInt(inverse[j])*2);
  } else if (j % 2 === 1 && inverse[j] == 5){
     paresMayor = paresMayor + parseInt(1);
  } else if (j % 2 === 1 && inverse[j] == 6){
     paresMayor = paresMayor + parseInt(3);
  } else if (j % 2 === 1 && inverse[j] == 7){
     paresMayor = paresMayor + parseInt(5);
  } else if (j % 2 === 1 && inverse[j] == 8){
     paresMayor = paresMayor + parseInt(7);
  } else if (j % 2 === 1 && inverse[j] == 9){
     paresMayor = paresMayor + parseInt(9);
  } 
}

var ckeckCard = impares + pares + paresMayor;
    if(ckeckCard % 10 === 0){
      return "It´s a valid card";
    } else {
      return "Your card is an invalid card"
    }  
}

isValid();


//4152313059935309
//4915665457040406
