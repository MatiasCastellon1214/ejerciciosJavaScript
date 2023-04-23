// Descripción del problema

// Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
// de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
// forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
// tiene la siguiente información:
// ● N.º de cuenta (solo números).
// ● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en
// pesos).
// ● Saldo en pesos (solo la cantidad).
// ● Titular de la cuenta (nombre completo).
// Teniendo en cuenta esta información, se nos pide que hagamos lo siguiente:


// 1. Descargar y analizar el siguiente archivo, el cual contiene la lista de clientes
// (cuentas bancarias).

//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];


/* 2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
propiedad llamada “clientes” que estará compuesta de la lista de objetos
obtenidos en el punto anterior.
*/
console.log('Ejercicio 2')

let banco = {
    clientes: arrayCuentas
}

console.log(banco.clientes)


/* 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
objeto cliente que corresponda con ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
*/

console.log('Ejercicio 3')

banco.consultarCliente = function (titular){
    for(let i = 0; i < this.clientes.length; i++) {
        if (titular === this.clientes[i].titularCuenta) {
            return this.clientes[i]
        }
    }
    return null
}

console.log(banco)
let clienteEncontrado = banco.consultarCliente('Jacki Shurmer')
console.log(clienteEncontrado)



/* 4. Crear otro método llamado depósito que recibirá dos parámetros: el titular de
cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
nuevo saldo es: XXXX”.
*/
console.log('Ejercicio 4')


banco.deposito = function(titular, depositar) {
    let clienteCuenta = this.consultarCliente(titular)
    if (clienteCuenta){
        clienteCuenta.saldoEnPesos += depositar
        return `Depósito realizado, su nuevo salgo es ${clienteCuenta.saldoEnPesos}`
    }
}

let resultado4 = banco.deposito('Jacki Shurmer', 1)
console.log(resultado4)



/* 5. Crear un último método llamado extracción que recibirá también dos parámetros:
el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
saldo es: XXXX”.
*/
console.log('Ejercicio 5')
banco.extraccion = function(titular, extraer) {
    let clienteCuenta = this.consultarCliente(titular)
    if (clienteCuenta){
        if (clienteCuenta.saldoEnPesos < 0){
            return 'Fondos insuficientes'
        } else {
            clienteCuenta.saldoEnPesos -= extraer
            return `Extracción realizada correctamente, su nuevo
            saldo es: ${clienteCuenta.saldoEnPesos}`
        }
    }
}

let resultadoExtraccion = banco.extraccion('Jacki Shurmer', 1)
console.log(resultadoExtraccion)



// Propiedad única

// Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
// parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
// parámetro la propiedad que fue pasada como string.
// Ejemplo:
// let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
// propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
// propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]
console.log('Ejercicio 6')


const propiedadUnica = (arr, string) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        let newElem = {}
        if (string === 'edad') {
            newElem.edad = arr[i].edad
            newArr.push(newElem)
        } else if (string === 'nombre') {
            newElem.nombre = arr[i].nombre
            newArr.push(newElem)
        } else {
            return `Propiedad no encontrada`
        }
        
    }
    return newArr
}

let array = [ { nombre: 'Lean', edad: 27 }, { nombre: 'Eze', edad: 49} ]

let resultadoPropiedadUnicaEdad = propiedadUnica(array, 'edad')
console.log(resultadoPropiedadUnicaEdad)

let resultadoPropiedadUnicaNombre = propiedadUnica(array, 'nombre')
console.log(resultadoPropiedadUnicaNombre)

let resultadoPropiedadUnicaDesconocido = propiedadUnica(array, 'cuenta')
console.log(resultadoPropiedadUnicaDesconocido)





/* Calculador de notas
Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
● Nombre
● Número de legajo
● Lista de notas
Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
todos los métodos y propiedades que puedan hacer falta para que el programa funcione
correctamente de la manera solicitada.
*/


let alumno = 
    {
        nombre: 'jaimito',
        numLegajo: 001,
        notas: [7, 8, 1, 1]
    }



alumno.calcularPromedio = function(){
    let suma = 0
    for (let i = 0; i < this.notas.length; i++) {
        suma += this.notas[i]
        
    }
    let promedio = suma / this.notas.length
    return promedio
}

alumno.condicion = function(){
    if(this.calcularPromedio() >= 7){
        return `Esta aprobado`
    } else {
        return `No está aprobado`
    }
}

console.log(alumno.calcularPromedio())
console.log(alumno.condicion())