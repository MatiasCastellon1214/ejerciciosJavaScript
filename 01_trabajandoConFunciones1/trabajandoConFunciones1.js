//¿Qué devuelve cada función?
//En este ejercicio deberás pensar qué devuelve cada función sin ejecutarla en la
//consola.

// MICRO DESAFÍO 1

function test1(x, y) {
    return y - x
}

test1(10, 40)

// La función devuelve 30, porque no importa el orden de los Argumentos,
// sino el de los Parámetros en el 'return'



// MICRO DESAFÍO 2

function test2(x, y) {
    return x * 2
    console.log(x)
    return x/ 2
}

test2(10)

// Devuelve 20, porque el return corta aitomaticamente cuando se ejecuta



// FUNCIONES SIMPLES

/* 1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
*/

const pulgadasACentimetros = num => {
    let resultado = num * 2.54
    return `Pulgada= ${num}; Centímetro= ${resultado}`
}

let resultado1= pulgadasACentimetros(2)
console.log(resultado1)


/* 2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”
*/

const url = string => {
    return `http://www.${string}.com`
}

let resultado2 = url('charlygarcia')
console.log(resultado2)


/*3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración.
*/

const admiracion = string => {
    return `${string}!!!!!!!`
}

let resultado3 = admiracion('charlygarcia')
console.log(resultado3)


/* 4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.
*/

const edadCanina = edad => {
    let resultado = edad * 7
    return `La edad canina de tu perro es de: ${resultado} años` 
}

let resultado4 = edadCanina(2)
console.log(resultado4)


/* 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.
*/

const horaTrabajo = sueldo =>{
    let resultado = sueldo / 40
    return `Si tu sueldo es de ${sueldo} por 40 horas mde trabajo mensuales, entonces el valor de tu hora de trabajo es de: $${resultado}`
}

let resultado5 = horaTrabajo(230000)
console.log(resultado5)


/* 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.
*/

const imc = (peso, altura) => {
    let resultado = peso / Math.pow(altura, 2)
    return `Si tu peso es de ${peso}, y tu altura de ${altura}, entonces tu IMC es de: ${resultado}`
}

let resultado6 = imc(68, 1.65)
console.log(resultado6)


/* 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investigá qué hace el método de strings .toUpperCase()
*/

const mayuscula = string => {
    return string.toUpperCase()
}

let resultado7 = mayuscula('hola, mundo')
console.log(resultado7)


/* 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro.
Pista: te servirá revisar qué hace la palabra reservada typeof.
*/

const tipoDeDato = dato => {
   let resultado = typeof dato
   return resultado
}

let resultado8 = tipoDeDato('hola')
console.log(resultado8)


/* 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.
*/

const circunferencia = radio => {
    let c =  2 * Math.PI * radio
    return `De acuerdo al radio (${radio}) que ingresaste, el valor de la circunferencia es de : ${c}`
}

let resultado9 = circunferencia(2)
console.log(resultado9)