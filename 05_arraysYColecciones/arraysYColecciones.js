// ¿Qué devuelven estos códigos?
// En este ejercicio deberás pensar qué devuelven estos códigos sin probarlos en la
// consola.

// 1)
let numbers = [22, 33, 54, 66, 72];
//console.log(numbers[numbers.length])
// Retorna 'undefined'

// 2)
let grupoDeAmigos = [
  "Harry",
  "Ron",
  "Hermione",
  "Spiderman",
  "Hulk",
  "Ironman",
  "Penélope Glamour",
  "Pierre Nodoyuna",
  "Patán",
];
//console.log(grupoDeAmigos[5])
// Retorna 'Ironman'

// 3)

let str = "un string cualquiera";
let arrayAleatorio = [
  "Digital",
  "House",
  "true",
  "string",
  "123",
  "false",
  "54",
  str,
];
//console.log(arrayAleatorio[arrayAleatorio.length - 1])
//devuelve 'un string cualquiera'

// Colecciones de películas (y más…)

/* 1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.
*/
console.log("ejercicio 1");
let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

let elementos = peliculas[1];
console.log(elementos);

/* 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().
*/
console.log("ejercicio 2");

const mayusculas = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let mayusc = arr[i].toUpperCase();
    newArr.push(mayusc);
  }
  return newArr;
};

let resultado2 = mayusculas(peliculas);
console.log(resultado2);

/* 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas.
*/

console.log("Ejercicio 3");
/*
let peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

const unirArrays = (arr1, arr2) => {
    let newArr = []
    for( let i = 0; i < arr2.length; i++) {   
        let union = arr1.push(arr2[i].toUpperCase())
    }
    return arr1
}

let resultado3 = unirArrays(peliculas, peliculas2)
console.log(resultado3)
*/

peliculas.push(
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite"
);
console.log(mayusculas(peliculas));

/* 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.
*/
console.log("Ejercicio 4");

console.log(peliculas);
let eliminado = peliculas.pop();
console.log(eliminado);
console.log(peliculas);

/* 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
*/
console.log("Ejercicio 5");

const comparar = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      newArr.push(true);
    } else {
      newArr.push(false);
    }
  }
  return newArr;
};

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

let resultado5 = comparar(asiaScores, euroScores);
console.log(resultado5);

// Array inverso

/* 1. Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
array).
*/
console.log("Array inverso");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const inverso = (arr) => {
  for (let i = arr.length; i >= 0; i--) {
    console.log(arr[i]);
  }
};

console.log(inverso(array));

/* 2. Creá la función inversor que tome un array como argumento y devuelva uno
nuevo invertido.
*/
console.log("Array inversor");

const inversor = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

let resultadoInversor = inversor(array);
console.log(resultadoInversor);

// sumaArray()

// En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
// números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
// ● sumArray([1,2,3]) // 6
// ● sumArray([10, 3, 10]) // 23
// ● sumArray([-5,100, 19]) // 114

console.log("Sumar array");

const sumarArray = (arr) => {
  let cont = 0;
  for (let i = 0; i < arr.length; i++) {
    cont += arr[i];
  }
  return cont;
};

let array1 = [1, 2, 3];

let resultadoSumarArrays = sumarArray(array1);
console.log(resultadoSumarArrays);

let resultadoSumarArrays2 = sumarArray([-5, 100, 19]);
console.log(resultadoSumarArrays2);

// Simulación Array.join()

// En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
// strings de 4 elementos y simule el comportamiento del método Array.join().
// Importante: no podés usar el método Array.join() original.

// Ejemplo:
// ● join(["h","o","l","a"]) debe retornar el string "hola".
// ● join(["c","h","a,"u"]) debe retornar el string "chau".

console.log("Array join");

const join = (arr) => {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i];
  }
  return string;
};

let arrHola = ["h", "o", "l", "a"];

let resultadoJoin = join(arrHola);
console.log(resultadoJoin);
