/* Revisá el siguiente código y asegurate de entenderlo para poder avanzar con el
ejercicio.
*/

/*
if(edad < 18) {
console.log("No puede pasar al bar.")
} else if (edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else {
console.log("Puede pasar al bar y tomar alcohol.")
}*/

let edad = 23;

// Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas:

/* Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
inválida. Por favor ingrese un número válido."

Importante: no se deberá mostrar ningún otro mensaje.
*/
console.log("Edad negativa");
if (edad < 0) {
  console.log("hola");
} else if (edad < 18) {
  console.log("No puede pasar al bar.");
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
}

//Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
//la mayoría de edad.

console.log("Edad 21 años");

if (edad < 0) {
  console.log("hola");
} else if (edad < 18) {
  console.log("No puede pasar al bar.");
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else if (edad === 21) {
  console.log("Puede pasar al bar y tomar alcohol.");
  console.log("Felicidades por haber llegado a la mayoría de edad.");
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
}

//Si su edad es impar, decirle en cualquiera de los mensajes: "¿Sabías que tu
//edad es impar?".

console.log("Edad impar");

if (edad < 0) {
  console.log("hola");
} else if (edad < 18) {
  console.log("No puede pasar al bar.");
  if (edad % 2 !== 0) {
    console.log("Sabías que tu edad es impar? Bueno, ya lo sabes");
  }
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  if (edad % 2 !== 0) {
    console.log("Sabías que tu edad es impar? Bueno, ya lo sabes");
  }
} else if (edad === 21) {
  console.log("Puede pasar al bar y tomar alcohol.");
  console.log("Felicidades por haber llegado a la mayoría de edad.");
  console.log("Sabías que tu edad es impar? Bueno, ya lo sabes");
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
  if (edad % 2 !== 0) {
    console.log("Sabías que tu edad es impar? Bueno, ya lo sabes");
  }
}

// totalAPagar()
// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// litrosConsumidos.
// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:

// ● Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

const totalAPagar = (vehiculo, litrosConsumidos) => {
  let total = 0;
  if (vehiculo === "coche") {
    total = litrosConsumidos * 86;
    if (litrosConsumidos > 0 && litrosConsumidos < 25) {
      total += 50;
    } else if (litrosConsumidos > 25) {
      total += 25;
    }
  } else if (vehiculo === "moto") {
    total = litrosConsumidos * 70;
    if (litrosConsumidos > 0 && litrosConsumidos < 25) {
      total += 50;
    } else if (litrosConsumidos > 25) {
      total += 25;
    }
  } else if (vehiculo === "autobus") {
    total = litrosConsumidos * 55;
    if (litrosConsumidos > 0 && litrosConsumidos < 25) {
      total += 50;
    } else if (litrosConsumidos > 25) {
      total += 25;
    }
  }
  return total;
};

let resultadoTotalAPagar = totalAPagar("autobus", 2);
console.log(resultadoTotalAPagar);

// Local de sándwiches

// Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
// diferente por cada selección:
// ● Pollo = $150 (“pollo”)
// ● Carne = $200 (“carne”)
// ● Vegetariano (verduras asadas) = $100 (“veggie”)
// Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
// otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
// deseado:
// ● Blanco c/orégano y parmesano = $50 (“blanco”)
// ● Negro c/avena = $60 (“negro”)
// ● Sin gluten = $75 (“s/gluten”)
// Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
// adicionales:
// ● Queso = $20
// ● Tomate = $15
// ● Lechuga = $10
// ● Cebolla = $15
// ● Mayonesa = $5
// ● Mostaza = $5

// Cada uno de estos adicionales están representados por booleanos —es decir, true o
// false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
// total de seis valores booleanos, uno por cada adicional—.

const sanguche = (
  tipo,
  pan,
  queso,
  tomate,
  lechuga,
  cebolla,
  mayonesa,
  mostaza
) => {
  let total = 0;
  if (tipo === "pollo") {
    total += 150;
  } else if (tipo === "carne") {
    total += 200;
  } else if (tipo === "veggie") {
    total += 100;
  }
  if (pan === "blanco") {
    total += 50;
  } else if (pan === "negro") {
    total += 60;
  } else if (pan === "s/gluten") {
    total += 75;
  }
  queso === true ? (total += 20) : total;
  tomate === true ? (total += 15) : total;
  lechuga === true ? (total += 10) : total;
  cebolla === true ? (total += 15) : total;
  mayonesa === true ? (total += 5) : total;
  mostaza === true ? (total += 5) : total;

  return `Total a pagar: $${total}`;
};

let resultadoSanguche = sanguche(
  "pollo",
  "blanco",
  true,
  false,
  false,
  false,
  false,
  false
);
console.log(resultadoSanguche);

// ¿Cuál es el número secreto?

// Creá una función que reciba un parámetro numérico y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
// retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.

const numSecreto = (num) => {
  let random = Math.floor(Math.random() * 10);
  if (num !== random) {
    return `Los siento, el número correcto es: ${random}. Que no pinte le bajón, sigue intentando`;
  } else {
    return `Genial, acertaste`;
  }
};

let resultadpNumSecreto = numSecreto(2);
console.log(resultadpNumSecreto);

/* abrirParacaidas()
Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
siguiente:
● La velocidad debe ser menor a 1000 km/h.
● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.
*/

const abrirParacaidas = (velocidad, altura) => {
  if (velocidad < 1000) {
    if (altura >= 2000 && altura < 3000) {
      console.log("Puede abrirse el paracaídas");
    } else {
      console.log(
        "No puede abrirse el paracaídas, no está dentro de la altura parmitida"
      );
    }
  } else {
    console.log("No puede arbrirse el pararcaídas, velocidad no permitida");
  }
};

abrirParacaidas(500, 6500);

// Estructura switch

// Traductor condicional

// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta

switch ("arbol") {
  case "casa":
    console.log("house");
    break;
  case "perro":
    console.log("dog");
    break;
  case "pelota":
    console.log("ball");
    break;
  case "árbol":
    console.log("tree");
    break;
  case "genio":
    console.log("genius");
    break;
  default:
    console.log("Palabra incorrecta");
}

/* Valoración de películas
Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
según la siguiente escala:
● Muy mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
*/

switch ("muy buena") {
  case "muy mala":
    console.log('Calificaste la película como "muy mala". Que bajonaso amigx');
    break;
  case "mala":
    console.log('Calificaste la película como "mala". Que bajón');
    break;
  case "mediocre":
    console.log(
      'Calificaste la película como "mediocre". Es peor que haber sido calificado como "malo"'
    );
    break;
  case "buena":
    console.log('Calificaste la película como "buena". Vamos!!!');
    break;
  case "muy buena":
    console.log(
      'Calificaste la película como "muy buena". Eso es una "muy buena" noticia'
    );
    break;
  default:
    console.log("Ingresaste un valor inválido");
}
