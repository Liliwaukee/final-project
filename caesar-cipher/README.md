# Caesar cipher
-Descripción: Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha. El programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas.

## Pseudocódigo
...
1. Crear un prompt que guarde en la variable "usePhrase" donde se pida ingresar una frase al usuario,
2. Crear dos funciones, la primera debe llamarse "cipher" y la segunda "decipher".
3. Primero la función "cipher" debe encontrar el código ascii de cada uno de los carácteres de "usePhrase".
  3.1 Crear un arreglo vacío llamado "asciiCode", el cual almacenará el código ascii de cada carácter.
  3.2 Crear un for para que recorra toda nuestra "usePhrase" y por medio de "charCodeAt()" obtener su código ascii.
  3.3 Teniendo el código de cada letra se guardará en el arreglo "asciiCode" a través de ".push()".
  3.4 Desplazar el código 33 lugares (Analizando el lugar que ocupa cada letra en el abecedario y tomando en cuenta 26 caracteres, podemos omitir una vuelta y sólo desplazarlo 7 lugares).
  3.5 Crear un nuevo arreglo vacío llamado "newAsciiCode".
  3.6 Crear otro for para que recorra el arreglo "asciiCode" y le sume "7" a cada elemento del arreglo y lo guarde en "newAsciiCode".
  3.7 Teniendo el código ascii del carácter desplazado, convertirlo en carácter por medio de "fromCharCode()".
  3.8 Crear un nuevo arreglo vacío llamado "newCipher".
  3.9 Crear un for que recorra "newAsciiCode" y lo convierta en carácter por medio "fromCharCode" y lo almacene en "newCipher".
  3.10 Retornar "newCipher".
4. La función "decipher" debe descrifrar la "usePhrase", repetiremos los pasos de arriba pero tomando en cuenta que debemos retroceder "7" lugares para encontrar la letra descrifrada.


## Diagrama de flujo
![Diagrama de flujo](https://www.lucidchart.com/publicSegments/view/cc237e15-2858-47c2-86d7-5dd8ae07a447/image.png)
