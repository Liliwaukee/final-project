//creamos la funciónisValid la cual no tendrá parámetros
function isValid() {
  var number = prompt("ingresa el numero");//pedimos elnúmero de tarjeta delusuario
// si hay espacios, no debe seguir la función
  for(var z = 0; z<number.length; z++){
    if(number[z] === " " || number[z] === "" ){
      return document.write("No puedes ingresar espacios en blanco");
    } else {

        var cardNumber = number.split(""); //convertimos en array
        var inverse = cardNumber.reverse();//87541... números al revés
      //console.log(inverse);
      //declaramosvariables vacías para después almacenar los resultados
        var odd = 0;
        var even = 0;
        var evenPlus = 0;


        for(var i = 0; i <16; i++){ //aquí sacamos la suma de numeros impares
          if(i % 2 !== 1){
             odd = odd + parseInt(inverse[i]);
          }
        }

        for(var j = 1; j <16; j++){
          //sacamos el números pares menores a 4 y multiplicamos por 2
          if (j % 2 === 1 && parseInt(inverse[j]) <= 4){
            even = even + (parseInt(inverse[j])*2);
            // de aquí en adelante reasiganamos los valores mayores del
          } else if (j % 2 === 1 && inverse[j] == 5){
             evenPlus = evenPlus + parseInt(1);
          } else if (j % 2 === 1 && inverse[j] == 6){
             evenPlus = evenPlus + parseInt(3);
          } else if (j % 2 === 1 && inverse[j] == 7){
             evenPlus = evenPlus + parseInt(5);
          } else if (j % 2 === 1 && inverse[j] == 8){
             evenPlus = evenPlus + parseInt(7);
          } else if (j % 2 === 1 && inverse[j] == 9){
             evenPlus = evenPlus + parseInt(9);
          }
        }

      //hacemos la de nuestros numeros pares, pares mayores e impares y comprobamos si son módulo de 10
      var ckeckCard = even + odd + evenPlus;
          if(ckeckCard % 10 === 0){
            return document.write("It´s a valid card");
          } else {
            return document.write("Your card is an invalid card");
          }
      }
  }
}

isValid();


//4152313059935309
//4915665457040406
