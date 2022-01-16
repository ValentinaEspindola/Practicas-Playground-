//Metodo map

let notas = [10,10,9,9,10,9,4,10,10];

let notas100 = notas.map(function(cadaNota) // cadaNota = CADA ELEMENTO DEL ARRAY 

{
return cadaNota * 100

});
//console.log(notas100);
//Metodo filter 
let notasAprobadas = notas.filter(function(cadaNota)
{
    return cadaNota >= 7 //le pido  que me retorne solo aquellas notas que superen o igualen a 7 

})
//console.log(notasAprobadas); // me FILTRA aquellas notas y pasan solo las que cumplen con el return

let estudiantes = [
    {nombre: 'John', promedio: 9, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(cadaEstudiantes)
{return cadaEstudiantes.promedio >= 7 });
//console.log(aprobados);


// .reduce()
let vueltas = [5, 8, 12, 3, 22];
let totalVueltas =  vueltas.reduce(function
(acumulador,cadaVuelta)
{return acumulador + cadaVuelta});
 console.log(totalVueltas);

// for.each 
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
listaDeSuperMercado.forEach(function(cadaProducto){console.log(cadaProducto)})


