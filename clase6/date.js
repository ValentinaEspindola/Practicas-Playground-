
let fechaActual = new Date() // si no pongo nada me toma la fecha actual 

//.getday(),
console.log(fechaActual.getDay()); // numero de la semana (0 es domingo, 1 es lunes, 2 es martes...)

//.getdate(),
console.log(fechaActual.getDate()); // numero del dia del mes en el que estoy 

//.getmonth(),
console.log(fechaActual.getMonth()); // numero del mes ( 0 es enero, 1 es febrero, 2 es marzo...)

//.getfullyear()
console.log(fechaActual.getFullYear()); // el año 

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

console.log("Hoy es el " + dia + ' del ' + (mes + 1) + ' del ' + anio );

let meses = ['enero', 'febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre',
'noviembre','diciembre'];

console.log("Hoy es el " + dia + ' de ' + (meses[mes]) + ' del ' + anio );