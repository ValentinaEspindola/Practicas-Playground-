let process = require("process")
let leerArchivo = require("./funcionesDeTareas")
let guardarTarea = require("./funcionesDeTareas")
let filtrarPorEstado = require("./funcionesDeTareas")

let argumentos = process.argv
let miComando = argumentos[2]
 

switch (miComando) {
    case "listar":
        let datosJSON = leerArchivo()           
        // 1. Refactorizar for por forEach
         // for (let i = 0; i < datosJSON.length; i++) {
         //   console.log( datosJSON[i].titulo )
         //}

        datosJSON.forEach(tareas => {
            console.log(tareas.titulo);
        });
        break;

    // 2c. Agregar un CASE "crear" -> guardarTarea()

    case "crear":
        let nuevaTarea = {
            titulo: argumentos[3],
            estado: "pendiente"
        }
        guardarTarea(nuevaTarea)
        break;
        

    // 3. Agregar un CASE "filtar"
    case "filtrar":
        let estado = argumentos[3]
        let tareasFiltradas = filtrarPorEstado(estado)
        tareasFiltradas.forEach(function(cadatarea){console.log(cadatarea.titulo)})
    break;
            
        
        
        break;
    

    case undefined:
        console.log("Atención - Tienes que pasar una acción.")
        break;
    
    default:
        console.log("No entiendo qué quieres hacer.")
        break;
}