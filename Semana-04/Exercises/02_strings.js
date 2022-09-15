console.log('--- EXERCISE 2: STRINGS');

console.log('- Exercise 2.a:');
//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var myStr = 'Murcielago';
var strUpperCase = myStr.toUpperCase();
console.log('Uppercase string: ' + strUpperCase);

console.log('- Exercise 2.b:');
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
//caracteres guardando el resultado en una nueva variable (utilizar substring).
var fiveCharacters = myStr.substring(0, 5);
console.log('First five characters: ' + fiveCharacters);

console.log('- Exercise 2.c:');
/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var lastThreeCharacters = myStr.substring(myStr.length - 3);
console.log('Last three characters: ' + lastThreeCharacters);


console.log('- Exercise 2.d:');
/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra 
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/
var newStr = (myStr.substring(0,1)).toUpperCase() + (myStr.substring(1, myStr.length)).toLowerCase();
console.log('First letter capitalized: ' + newStr);

console.log('- Exercise 2.e:');
/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
var otherStr = "Sofi Hojberg";
var space = otherStr.indexOf(" ");
console.log('Blank space is at position: ' + space);

console.log('- Exercise 2.f:');
/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
var longStr = "thisIsALongString thisIsAnotherLongString";
var blankSpace = longStr.indexOf(' ');
var newLongStr = (longStr.substring(0, 1)).toUpperCase() + (longStr.substring(1, blankSpace)).toLowerCase() + " " + (longStr.substring(blankSpace+1, blankSpace+2)).toUpperCase() + (longStr.substring(blankSpace+2, longStr.length)).toLowerCase();
console.log('First letter of both strings capitalized: ' + newLongStr);

