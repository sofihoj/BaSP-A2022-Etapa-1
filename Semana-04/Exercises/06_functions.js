console.log('--- EXERCISE 6: FUNCTIONS');

console.log('- Exercise 6.a:');
/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función 
y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
function sum(num1, num2){
    var result = num1 + num2;
    return result;
};
console.log('The sum of the numbers equals: ' + sum(2, 7))

console.log('- Exercise 6.b:');
//A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; 
//de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function sum(num1, num2){
    var result = num1 + num2;
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        alert('ERROR! Some of the numbers has a mistake');
        return NaN;
    } else {
        return result;
    }
};

var oneTry = sum(2, 5);
var anotherTry = sum(2, 'n')
console.log(oneTry)
console.log(anotherTry)


console.log('- Exercise 6.c:');
//Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validate(num){
    return Number.isInteger(num);
};

var try1 = 5;
var try2 = 5.5;
var try3 = 'm';
console.log(try1 + ' is an integer: ' + validate(try1));
console.log(try2 + ' is an integer: ' + validate(try2));
console.log(try3 + ' is an integer: ' + validate(try3));


console.log('- Exercise 6.d:');
/*A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide 
que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número 
convertido a entero (redondeado).*/
function sum(num1, num2){
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        alert('ERROR! Some of the numbers has a mistake');
        return NaN;
    }
    if (!validate(num1)){
        alert('First parameter is not an integer');
        num1 = Math.round(num1);
    }
    if (!validate(num2)) {
        alert('Second parameter is not an integer');
        num2 = Math.round(num2);
    }
    var result = num1 + num2;
    return result;
};

console.log(sum(4, 5)) // 9
console.log(sum(4, 'n')) // NaN
console.log(sum(4, 5.2)) // 9
console.log(sum(4.6, 5.2)) // 10


console.log('- Exercise 6.e:');
/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que 
todo siga funcionando igual. */
function validateInteger(num){
    if (!validate(num)){
        alert('A number is not an integer');
        num = Math.round(num);
    }
    return num;
}

function sum(num1, num2){
    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        alert('ERROR! Some of the numbers has a mistake');
        return NaN;
    }

    num1 = validateInteger(num1);
    num2 = validateInteger(num2);
    var result = num1 + num2;
    return result;
};

console.log(sum(7, 8)) // 15
console.log(sum(9, 'a')) // NaN
console.log(sum(7, 8.2)) // 15
console.log(sum(7.6, 8.2)) // 16