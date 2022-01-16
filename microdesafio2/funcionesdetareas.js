let fs = require("fs")

const leerArchivo = () => {
    let datos = fs.readFileSync("./tareas.json","UTF-8")
    return JSON.parse(datos)
}

// 2a. Crear una funcion escribirJSON

const escribirJSON  = (arrayTareas) =>
{
    let tareitas = JSON.stringify (arrayTareas)
  fs.writeFileSync ("./tareas.json", tareitas)
  return  
}
// fs.writeFileSync('ruta',informacionEnString)

// 2b. Crear una funcion guardarTarea

const guardarTarea = (objeto) => { 
    let datosJSON = leerArchivo() // lee el archivo y lo guarda en datosJSON

let updateTareas = datosJSON.tareas.push (objeto) // el .push pushea en el array la nueva tarea que le pasamos
escribirJSON (updateTareas) // escribe el nuevo JSON en tareas.json

return ///realmente no es necesario porque no necesito retornar nada, porque ya lo grabo, es por disciplina
}


// 3a. Crear una funcion leerPorEstado

const filtrarPorEstado = (estado) =>
{
    let datosJSON = leerArchivo()
    
    return datosJSON.filter(tarea => tarea.estado == estado)
}


module.exports = leerArchivo, guardarTarea, escribirJSON, filtrarPorEstado;