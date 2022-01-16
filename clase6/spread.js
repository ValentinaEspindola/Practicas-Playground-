// spread operator 
//CON ARRAY
// quiero agrupar estas dos variables
let peliculasSuperheroes = ['Avengers','Capitan America','Iron man', 'Spiderman'];
let peliculaComedia = ['Son como niños','Mi pobre angelito'];
// ¿Cómo puedo hacerlo? SPREAD OPERATOR (...)

let peliculas = [...peliculasSuperheroes,...peliculaComedia];
console.log(peliculas);


// CON OBJETOS LITERALES 
let  generoComedia = {
    Genero: "comedia",
    popularidad: 3,
    
};

let mipobreAngelito = {
    nombre: 'Mi Pobre angelito',
    duracion: 120,
    ...generoComedia // aca le estoy pidiendo que me agrege lo que tiene genero comedia
    // como si fuera parte del objeto mipobreAngelito
};
let sonComoniños = {
    nombre: 'Son como niños',
    duracion: 110,
    ...generoComedia // same here
};
console.log(mipobreAngelito);
console.log(sonComoniños);

// CON FUNCIONES 
//quiero una función que me diga si una persona vio una pelicula 
function peliculasVistas(nombrePeliculas) {
    return console.log(nombrePeliculas)
};
// las peliculas pueden ser varias y ¿como se cuantos parametros pasarle?
//peliculasVistas('Avengers','Mi pobre angelito');
// cuando aca le paso dos parametros solo me tira el primero 
// Y entonces?

function peliculasVistas(...nombrePeliculas) {
    return console.log(nombrePeliculas)
};



// me lo devuelve en formato de array 
// si lo quiero cambiar y hacer un texto 
function peliculasVistas(...nombrePeliculas){
    for (let i = 0; i < nombrePeliculas.length; i ++) {
        console.log('La persona ya vió ' + nombrePeliculas[i])
    }
}
peliculasVistas('Avengers','Mi pobre angelito');