// Calculadora - Nivel I

/* 1. Crear un archivo calculadora.js que contendrá las distintas operaciones a
realizar de nuestra calculadora.
*/

/* 2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la
suma de los mismos.
*/

const sumar = (n1, n2) => {
    let resultado = n1 + n2
    return resultado
}
let resultadoSuma = sumar(4, 8)
console.log(resultadoSuma)


/* 3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la
resta del primero menos el segundo.
*/

const restar = (n1, n2) => {
    let resultado = n1 - n2
    return resultado
}
let resultadoResta = restar(4, 8)
console.log(resultadoResta)


/* 4. Crear una función multiplicar, la misma deberá recibir dos parámetros y
retornar el resultado de su multiplicación.
*/

const multiplicar = (n1, n2) => {
    let resultado = n1 * n2
    return resultado
}
let resultadoMultiplicacion = multiplicar(4, 8)
console.log(resultadoMultiplicacion)


/* 5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
de la división del primero sobre el segundo.
*/

const dividir = (n1, n2) => {
    let resultado = n1 / n2
    return resultado
}
let resultadoDivision = dividir(4, 8)
console.log(resultadoDivision)



// Calculadora - Nivel II

/* 1. En el archivo calculadora.js —debajo de nuestras 4 funciones hechas con
anterioridad— creá un console.log en el cual vas a poner un string para indicar
que debajo de él comenzarás a probar las funciones, algo así como un
“separador de código”. Por ejemplo:
console.log(“-------------- Testeo de Operaciones / Calculadora --------------”)
*/

console.log('------------- Testeo de Operaciones / Calculadora -------------')

/* 2. Ejecutar la función que permite sumar y la función que permite restar pasando
como argumentos dos números cualesquiera. Mostrar en consola los
resultados.
*/
console.log('Resultado Suma')
console.log(sumar(5, 6))
console.log('Resultado Resta')
console.log(restar(6, 6))

/* 3. Ejecutar la función que permite multiplicar pasando como argumentos dos
números cualesquiera. Mostrar en consola el resultado.
*/

console.log('Resultado Multiplicación')
console.log(multiplicar(5, 5))

/* 4. Ejecutar la función que permite dividir pasando como argumentos dos
números cualesquiera. Mostrar en consola el resultado.
*/

console.log('Resultado División')
console.log(dividir(25, 5))


/* 5. Ejecutar la función que permite dividir pasando, ahora, como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado.
*/

console.log('Resultado División con cero (0)')
console.log(dividir(0, 40))



// Calculadora - Nivel III - Funciones extras

/* 1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un
número como parámetro y deberá retornar ese número elevado al cuadrado.
Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()
*/

const cuadradoDeUnNumero = num => {
    return multiplicar(num, num)
}

let resultadoCuadradoDeUnNumero = cuadradoDeUnNumero(3)
console.log(resultadoCuadradoDeUnNumero)


/* 2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
de 3 números, que serán ingresados por parámetro.
Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
previamente creadas de nuestra calculadora.
*/

const promedioDeTresNumeros = (n1, n2, n3) => {
    let suma = n1 + n2 + n3
    let promedio = dividir(suma, 3) 
    return promedio
}

let resultadoPromedio = promedioDeTresNumeros(9, 10, 11)
console.log(resultadoPromedio)


/* 3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
creadas de nuestra calculadora.
*/

const calcularPorcentaje = (total, porcentaje) => {
    let resultado1 = multiplicar(porcentaje, total)
    let resultado2 = dividir(resultado1, 100)
    return resultado2
}

let resultadoPorcentaje = calcularPorcentaje(300, 15)
console.log(resultadoPorcentaje)


/* 4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
retornar el porcentaje del primero con respecto al segundo.
Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones
previamente creadas de nuestra calculadora.
Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
200*/

const generadorDePorcentaje = (num1, num2) => {
    let resultado1 = multiplicar(num1, 100)
    let resultado2 = dividir(resultado1, num2)
    return resultado2
}

let resultadoGeneradorPorcentaje = generadorDePorcentaje(2, 200)
console.log(resultadoGeneradorPorcentaje)