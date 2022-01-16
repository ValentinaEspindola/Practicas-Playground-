
// Calculadora de iva por continente 
let america = 21;
let europa = 11;
let africa = 19;
let asia = 25;
let oceania = 16;

function mi_calculadora (continente,precio){return ((continente/100) +1)  * precio}

console.log( mi_calculadora(america,120) ) // devuelve 145.2
console.log( mi_calculadora(europa,15) ) // devuelve 16.65
console.log( mi_calculadora(africa,216) ) // devuelve 257.04
console.log( mi_calculadora(asia,235) ) // devuelve 293.75
console.log( mi_calculadora(oceania,12) ) // devuelve 13.92



// Pasó o no de año 
// Primera función para ver si cada elemento del array es >= 4

let notas = [ ]
function mayorACuatro(notas) 
{ 
    for(let i = 0; i < notas.length; i++){
    if (notas [i] >= 4) 
        
        
  
    {return true}else{return false}
}}
// función para ver si la suma de los elementos es >= 6

function promedio(notas) 

{ let suma = 0
    for (let i = 0; i < notas.length; i++) {suma = suma + notas [i]}
    

    {return suma / notas.length}

}
 // función final  
function pasaONoPasa(notas) {
    if ((mayorACuatro(notas) == true) && (promedio(notas) >= 6 )) 
    
    
    {return true}else{return false}
};

// Prueba 
console.log( pasaONoPasa([4,6,4,7,9,10]) ) // devuelve true
console.log( pasaONoPasa([2,8,7,10,9,10,8]) ) // devuelve false
console.log( pasaONoPasa([6,6,4,5,6,10,5]) ) // devuelve true
console.log( pasaONoPasa([7,4,5,6,4,5]) ) // devuelve false
console.log( pasaONoPasa ([2,4,5,3]) ) // devuelve false

// 1) condicionales (ternario)
// Problema: 
// Generar una funcion que retorne un condicional ternario que devuelva un boolean si un numero es par o impar
function par (numero){return numero % 2 === 0? true : false};
console.log(par(45));

// 2) Agus Taylor condicionales (switch)
// Problema: 
// Generar un condicional switch que devuelva un string el largo de un string
// Si tiene <= 5 caracteres devolverá "Corto"
// Si tiene > 5 y < 10 devolverá "Mediano"
// Si tiene >= 10 devolverá "Largo"

let saludo = 'Hola Mundo'
let longitud = saludo.length
switch(saludo) 
{
    case (saludo.length <= 5) : console.log("Corto");
    break; 
    case (saludo.length > 5) && (saludo.length < 10) : console.log("mediano");
    break;
    case (saludo.length) >= 10 : console.log("largo");
    break;

};


// 3) Juli Hernandes Objetos literales
// Problema: 
// Generar un objeto literal Auto que tenga las siguientes propiedades y metodos
// marca: string
// estado: string que por defecto es "detenido"
// arrancar: function que cambia el estado del auto a "en marcha"
// apagar: function que cambia el estado del auto a "detenido"

let auto = {
    marca : "Toyota",
    estado: "Detenido",
    arrancar: function(){this.estado = "en marcha" },
    apagar: function() {this.estado = "detenido"},

};
console.log(auto.estado);
auto.arrancar();
console.log(auto.estado)
// 4) Pato Williams JSON
// Problema:
// Crear un archivo JSON con una lista de tareas (3 tareas)
// Debe tener las siguientes propiedades:
// id: numero
// nombre: string
// estado: string que por defecto es "pendiente"


// 5) Jose Guillen Arrow Function
// Problema:
// Crear dos arrow functions:
// 1. que reciba un numero y devuelva el numero elevado al cuadrado
// 2. que reciba un numero y devuelva el numero elevado al cubo
let cuadrado = numero => numero*numero;
console.log(cuadrado(23));
let cubo = numero => numero*numero*numero;
console.log(cubo(5));

// 6) Sara Valentina Ciclos I 
// Problema:
// Generar una arrow function que reciba un min y un max e imprima por consola los numeros impares de mayor a menor



let minmax = (min,max) => {
    if(min < max){
    for (let i = max; i > min; i--) { i % 2 !== 0 && console.log(i)};

}else {
    console.log('El mínimo debe ser menor que el máximo');
}
}

minmax(20, 30);