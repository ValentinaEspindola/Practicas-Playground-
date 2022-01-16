// creo una función aca que me retorne la lectura de los datos "tareasJSON" parseados. 
let fs = require('fs');




let leerArchivo = () => // array con objetos literales
{let datosJSON = fs.readFileSync('./tareas.json','UTF-8')
return JSON.parse(datosJSON);}



// 2a. Crear una funcion escribirJSON


let escribirJSON = (arrayDeTareas) => {

    let tareasNuevas = JSON.stringify(arrayDeTareas);
    
     fs.writeFileSync("./tareas.json", tareasNuevas) 
    return
};

 
//2B
//dentro del archivo tareas.js , vamos a crear otra función
//llamada guardarTarea . La función recibirá una objeto tarea y la guardará en
// el archivo .json junto con todas las tareas que ya estén allí.
let guardarTarea = (nuevaTarea) => {
    let datosJSON = leerArchivo (); 
    let update = datosJSON.push(nuevaTarea)
    escribirJSON(update)
    return 
 // no retorna nada solo lo guarda
}
//3a Necesitaremos crear en tareas.js un nuevo método “ leerPorEstado ” que
//reciba un estado como parámetro.
let filtrarPorEstado = (estadoIngresado) => {
    let datosJSON = leerArchivo();
    let arrayfiltrado = datosJSON.filter(objeto=>{objeto.estado == estadoIngresado  })
    return arrayfiltrado
}

module.exports = leerArchivo, escribirJSON, guardarTarea,filtrarPorEstado;
    
