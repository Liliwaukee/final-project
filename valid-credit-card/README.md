# Valid credit card
Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.

## Pseudocódigo
1. Crear un prompt que pida el número de tarjeta del usuario, el cuál se guardará en la variable "numbers".
2. Convertir el número en string con "toString()" para separarlo en números individuales.
3. Con ".split" pasarlo a un array para poder manipularlo, el cuál llamaremos  "newArray"
4. Para aplicar el algoritmo de Luhn, cambiar el orden del array con ".reverse" que se guardará en una variable llamada "reverse".
5. Crear un arreglo vacio donde se guardará la suma de los números impares.
6. Crear un for para que recorra "reverse" y pueda ir guardando y sumando todos los números que se encuentren en index impar.
7. Crear un nuevo arreglo vacío donde se guardarán los números en index par menor a 4.
8. Crear un for para que recorrar "reverse" y encuentre los números que estén en index par menor que 4 y los multiplique por dos.
9. Crear una variable vacia donde guardará los index pares mayores a 4.
10. Crear un for que recorra "reverse" y encuentre los index pares mayores a 4.
11. Dentro del for haremos una comparación y reasiganremos los valores (ej, 5+5 = 10, 1+0=1).
12. Sumar nuestros 3 resultados y haremos la comparación si el resultado es módulo de 10.
13. Regresar un mensaje dependiendo si la tarjeta es válida o no.

### Diagrama de flujo
![Diagrama de flujo](http://subefotos.com/ver/?05857069c51ce5b825ddd4ca737f5165o.jpg)
