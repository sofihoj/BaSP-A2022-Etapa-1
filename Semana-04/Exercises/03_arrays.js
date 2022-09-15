console.log('--- EXERCISE 3: ARRAYS');

console.log('- Exercise 3.a:');
//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
//"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Month 5: ' + months[4] + '\nMonth 11: ' + months[10]);

console.log('- Exercise 3.b:');
//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
var orderedMonths = months.sort();
console.log('Months in alphabetical order: ' + orderedMonths);

console.log('- Exercise 3.c:');
//Agregar un elemento al principio y al final del array (utilizar unshift y push).
months.push('monthPushed');
months.unshift('monthUnshifted');
console.log('Added elements to the array: ' + months);

console.log('- Exercise 3.d:');
//Quitar un elemento del principio y del final del array (utilizar shift y pop).
months.pop();
months.shift();
console.log('Back to original array: ' + months);

console.log('- Exercise 3.e:');
//Invertir el orden del array (utilizar reverse).
months.reverse();
console.log('Inverted order: ' + months);

console.log('- Exercise 3.f:');
//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
var dashedMonths = months.join(' - ');
console.log(dashedMonths);

console.log('- Exercise 3.g:');
//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var lastMonths = months.slice(4,11);
console.log(lastMonths);




