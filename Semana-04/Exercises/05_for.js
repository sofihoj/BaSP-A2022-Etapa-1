console.log('--- EXERCISE 5: FOR');

console.log('- Exercise 5.a:');
//Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript 
//para mostrar una alerta utilizando cada una de las palabras.
var myArray = ['word1', 'word2', 'word3', 'word4', 'word5'];
for (var contador = 0; contador < 5; contador++){
    alert(myArray[contador]);
};
// for (let i of myArray) {
//     alert(i);
// };


console.log('- Exercise 5.b:');
//Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
for (let i of myArray){
    alert(i[0].toUpperCase() + i.slice(1));
};


console.log('- Exercise 5.c:');
//Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo 
//con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta 
//con la cadena completa.
var sentence = '';

for (let i = 0; i < myArray.length; i++) {
  sentence += ' ' + myArray[i];
}

alert(sentence);


console.log('- Exercise 5.d:');
//Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, 
//es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 
//hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
var newArray = [];

for(let i = 0; i < 10; i++) {
    newArray.push(i);
};

console.log(newArray);



