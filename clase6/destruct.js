let frutas = ['Manzana','Pera','Sandia','Melon','Durazno'];

// destructuracion de un array
// para desestructurar un array declaramos una variable y entre corchetes escribimos el nombre que queremos. 
let [manzana,pera] = frutas; // como es un array a la hora  de definir la variable uso []
console.log(manzana);
console.log(pera);

// Destructuring de un objeto literal

let estudiantes = {
    nombre: "Valentina",
    apellido: "Espíndola",
    edad: 19
};
let {nombre,edad} = estudiantes;
console.log(nombre);
console.log(edad);