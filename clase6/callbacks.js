// calbacks
let sumar = (a,b) =>  a + b;
let restar = (a,b) =>  a - b;
let multiplicar = (a,b) =>  a * b;
let dividir = (a,b) =>  a / b;

let calculadora = (a,b,operacion) => operacion(a,b)

console.log(calculadora(2,3,sumar));

let doble = numero => numero * 2;
let triple = numero => numero * 3;
let aplicarCallback = (numero, operacion) => operacion(numero);
console.log(aplicarCallback(4,triple));
