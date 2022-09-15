console.log('--- EXERCISE 1: VARIABLES AND OPERATORS');

console.log('- Exercise 1.a:');
//1.a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable
var num1 = 4;
var num2= 8;
var sum = num1 + num2;
console.log('The sum of '+ num1 + ' and ' + num2 + ' equals ' + sum);

console.log('- Exercise 1.b:');
//1.b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
var name = 'Sofia';
var surname = 'Hojberg';
var fullName = name + " " + surname;
console.log('My full name is ' + fullName);

console.log('- Exercise 1.c:');
/*3) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el 
resultado de la suma en una 3er variable (utilizar length)*/
var str1 = 'Sofia';
var str2 = 'Hojberg';
var strsLength = str1.length + str2.length;
console.log('The sum of the length of the strings -' + str1 + '- and -' + str2 + '- is: ' + strsLength);