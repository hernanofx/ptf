// Variables = Númericas, de Texto, Booleanos y Arrays

// Números
var numero_1 = 2;
var numero_2 = 100;

// Textos
var mensaje_1 = "Bienvenidos a PTF!";
var mensaje_2 = "Esto es Javascript";

// Booleanos
var usuarioMentor = true;
var usuarioAlumno = false;

// Arrays
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Indices
var dias[0] = "lunes";
var dias[6] = "domingo";

// Asignación
var numero_1 = 3;
var numero_2 = 5;
var numero_1 = numero_2;

// Incremento y decremento
// Prefijos
var numero = 5;
++numero; // numero = 6
--numero; // numero = 5

// Sufijos
var numero = 5;
numero++; // numero = 6
numero--; // numero = 5

// Lógicos
var visible = true;
alert(!visible) // Alerta false

// AND &&
var valor1 = true;
var valor2 = false;
resultado = valor1 && valor2; // resultado = false

// OR ||
var valor1 = true;
var valor2 = false;
resultado = valor1 || valor2; // resultado = true

// Matematicos
var numero1 = 10;
var numero2 = 5;
res = numero1 / numero2; // res = 2
res = 3 + numero1; // res = 13
res = numero1 * numero2; // res = 50

// Relacionales > < >= <= == !=
var numero1 = 3;
var numero2 = 5;
res = numero1 > numero2; // res = false
res = numero1 < numero2; // res = true
numero1 = 5;
numero2 = 5;
res = numero1 >= numero2; // res = true
res = numero1 <= numero2; // res = true
res = numero1 == numero2; // res = true
res = numero1 != numero2; // res = false

// ESTRUCTURAS DE CONTROLL
// IF
var mostrarMensaje = true;
if (mostrarMensaje) {
    alert("Hola PTF!");
}

// IF ELSE
var edad = 18;
if (edad >= 18) {
    alert("Sos mayor de edad.");
} else {
    alert("Todavía sos menor. =( ");
}

// FOR
//1
for (inicio; condicion; actualizacion) {
    ...
}
//2
var mensaje = "Hola, soy un mensaje molesto!";
for (var i = 0; i < 10; i++) {
    alert(mensaje);
}

// FOR IN
//1
for (indice in array) {
    ...
}
//2
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
for (i in dias) {
    alert(dias[i]);
}

// FUNCIONES BASICAS
// Longitud
var mensaje = "Hola PTF!";
var numeroLetras = mensaje.length; // numeroLetas = 9

// Concatenar
var mensaje1 = "Hola";
var mensaje2 = " PTF!";
var mensaje = mensaje1 + mensaje2; // mensaje = "Hola PTF!"

var mensaje1 = "Hola";
var mensaje2 = mensaje1.concat(" PTF!"); // mensaje2 = "Hola PTF!"

var variable1 = "Hola";
var variable2 = 5;
var mensaje = variable1 + variable2; // mensaje = "Hola 5"

// Transformación
var mensaje1 = "Hola";
var mensaje2 = mensaje1.toUpperCase(); // mensaje2 = "HOLA"

var mensaje1 = "HoLa";
var mensaje2 = mensaje1.toLowerCase(); // mensaje2 = "hola"

// Indicadores
var mensaje = "Hola";
var letra = mensaje.charAt(0); // letra = H
letra = mensaje.charAt(3); // letra = a

var mensaje = "Hola";
var posicion = mensaje.indexOf('a'); // posicion = 3
posicion = mensaje.indexOf('b'); // posicion = -1

var mensaje = "Hola programadores";
var posicion = mensaje.lastIndexOf('a'); // posicion = 12
posicion = mensaje.lastIIndexOf('b'); // posicion = -1

// Subcadenas
var mensaje = "Hola PTF!";
var res = mensaje.substring(2); // res = "la PTF!"
var res = mensaje.substring(5); // res = "PTF!"

var res = mensaje.substring(-1); // res = "Hola PTF!"

var mensaje = "Hola PTF!";
var res = mensaje.substring(2, 8); // res = "la PTF"
var res = mensaje.substring(3, 4); // res = "a"

// Separador
var mensaje = "Hola Programa Tu Futuro";
var palabras = mensaje.split(" "); // palabras = ["Hola", "Programa", "Tu", "Futuro"]

var mensaje = "Hola";
var letras = mensaje.split(""); // letras = ["H", "o", "l", "a"]

// Funciones útiles para Arrays
// Longitud
var vocales = ["a", "e", "i", "o", "u"];
var numeroLetras = vocales.length; // numeroLetas = 5

// Concatenar
var array1 = [1, 2, 3];
var array2 = array1.concat(4, 5, 6); // array2 = [1, 2, 3, 4, 5, 6]
var array3 = array1.concat([4, 5, 6]); // array3 = [1, 2, 3, 4, 5, 6]

// Unir (!split)
var array = ["Hola", "PTF"];
var mensaje = array1.join(""); // mensaje = "HolaPTF"
mensaje = array1.join(" "); // mensaje = "Hola PTF"

// Eliminar último
var numeros = [1, 2, 3];
var ultimo = numeros.pop(); // ultimo = 3 / numeros = [1, 2]

// Insertar Ultimo
var numeros = [1, 2, 3];
numeros.push(4); // numeros = [1, 2, 3, 4]

// Eliminar Primero
var numeros = [1, 2, 3];
var primero = numeros.shift(); // primero = 1 / numeros = [2, 3]

// Insertar primero
var numeros = [1, 2, 3];
numeros.unshift(0); // numeros = [0, 1, 2, 3]

// Al inverso
var numeros = [1, 2, 3];
numeros.reverse(); // numeros = [3, 2, 1]

// Funciones útiles para Números
// Not a number (NaN)
var numero1 = 0;
var numero2 = 0;
if (isNaN(numero1 / numero2)) {
    alert("La división isNaN.");
} else {
    alert("La división es: " + numero1 / numero2);
}

// Redondeo decimal
var numero = 123.45678;
numero.toFixed(2); // numero = 123.45
numero.toFixed(4); // numero = 123.4567
numero.toFixed(); // numero = 123
