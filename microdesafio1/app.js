
let leerArchivo = require("./funcionesdetareas");
let guardarTarea = require("./funcionesdetareas");
let filtrarPorEstado = require("./funcionesdetareas");

//let datos = fs.readFileSync('./tareas.json','UTF-8');         
//let datosJSON = JSON.parse(datos); 


// hasta aca tengo una variable DATOSJSON con el array de datos que necesito para el ejercicio esto lo lleve a
// funcionesdetareas para crear una variable que ya me lo haga

let process = require("process"); // modulo propio de node 
let argumentos = process.argv 
// con esto capturamos lo que ponemos por consola 
// El nuevo argumento se posiciona en el indice 2 (el primero es NODE, el segundo es la RUTA, el tercero es lo que agregué)
//console.log(argumentos);


 
switch (argumentos[2]){     // le pido que me verifique lo que hay en argumento.2 (lo que agregó el usuario)
    case "listar": 
    
            let datosJSON = leerArchivo();
            
            datosJSON.forEach(function(cadaDatoJSON) {console.log(cadaDatoJSON.titulo)})
            
    break;
    
    case "crear": 
    
    let nuevaTarea = {
        titulo : argumentos[3],
        estado : "pendiente"
        
    }
    
    guardarTarea(nuevaTarea);
    
    break;
    case "filtrar": 
    let estado = argumentos[3]
    let arraytareasFiltradas = filtrarPorEstado(estado);
    
    arraytareasFiltradas.forEach(function(cadatarea){console.log(cadatarea.titulo)})
    break;

    case undefined: console.log("Atención debes ingresar una palabra");
    break;

    default: console.log("No entiendo que quieres hacer")
    break;
}

// EL PUNTO SIGNIFICA DESDE ESTE DIRECTORIO (MICRODESAFIO1) BUSCAME TAREAS.JSON (el archivo a leer)
//Console.log(datosJSON); // aca traje todo lo que habia en el archivo "tarea.json" A app.js!!





