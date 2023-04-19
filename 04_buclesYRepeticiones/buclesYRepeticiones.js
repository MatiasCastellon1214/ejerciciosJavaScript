// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.
console.log("Ejercicio 1");
const numSiguientes = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(num + i);
  }
};
numSiguientes(4);

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
console.log("Ejercicio 2");
const saltando = () => {
  for (let i = 5; i <= 20; i = i + 3) {
    console.log(i);
  }
};

saltando();

//  3) Escribir un programa que muestre la sumatoria de todos los números
//  entre el 0 y el 100
console.log("Ejercicio 3");
const sumatoria = () => {
  let acc = 0;
  for (let i = 0; i < 100; i++) {
    acc += i;
    console.log(acc + 1);
  }
};

sumatoria();

/* 4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.
*/
console.log("Ejercicio 4");
const factorial = (num) => {
  let acc = 1;
  for (let i = 1; i <= num; i++) {
    acc *= i;
    console.log(acc);
  }
};

factorial(5);

/* 5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.
*/
console.log("Ejercicio 5");
const fibonacci = (num) => {
  let num0 = 0;
  let num1 = 1;
  let secuencia = [];
  for (let i = 0; i < num; i++) {
    secuencia.push(num0);
    let num3 = num0 + num1;
    num0 = num1;
    num1 = num3;
  }
  return secuencia;
};
let resultadoFibonacci = fibonacci(5);
console.log(resultadoFibonacci);
// 0 1 1 2
