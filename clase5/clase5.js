// Json pasar de Objeto a string (Stringify) 
let amigos = ["Maria", "Juan", "Nora"];
let amigosJson = JSON.stringify(amigos);
console.log(amigosJson);
// Pasar de un string a un objeto (parse)
let amigosOriginal = JSON.parse(amigosJson);
console.log(amigosOriginal);


// Metodos de string
let mensaje = "Que calor que hace dios mio"


//lenght --> para saber la cantidad de caracteres 

console.log(mensaje.length); // me dá 27

//index.of --> me dice en que caracter empieza la palabra que busco 
console.log(mensaje.indexOf("calor"));// empieza en el caracter 4

// slice  --> le digo desde donde hasta donde quiero hacer un recorte (parametro desde donde hasta donde)
// (No afecta al mensaje original solo a lo que se mmuestra por consola)
console.log(mensaje.slice(4,27));

// trim --> elimina los espacios en blanco del principio y de final 
let trim = " Hola Mundo Todo bien  "
console.log(trim.trim()); 

// split --> pasar de string a un array 
console.log(mensaje.split(" "));

//replace --> reemplazar algo en un string por otra cosa 
console.log(mensaje.replace("calor","frio"));



//contruir moldes para objetos literales
function Auto (laMarca,elModelo) 
{
    this.laMarca = laMarca;
    this.elModelo = elModelo;


}

// Arrow function 
let elTriple = numero => numero * 3;
console.log(elTriple(9));

let dividir = (numeroa,numerob) => numeroa / numerob;
console.log(dividir(20,4));

let tengoquetrabajar = dia => {
    if (dia == "Sábado" || dia == "Domingo") {return "No tenes que trabajar capo"}else
    { return "si tenes que trabajar vago"}
};
console.log(tengoquetrabajar("Lunes"));


// Condicionales 
//if ternario 
let gaseosa = "Fanta"
let resultado = gaseosa === "Coca Cola" ? console.log("Tu gaseosa favorita es la coca cola"): 
"Me gusta mas la fanta";
 console.log(resultado);

 // Switch 
 let semaforo = "amarillo" 
 switch (semaforo) 
{
    case "verde":
console.log("Podés cruzar tranquilo");
break;
    case "rojo": 
console.log("No cruzes");
break;
    case "amarillo":
console.log("Precaución");
break;
default: 
console.log("No funciona el semaforo");
}
// Agrupar casos 
    function tengoClases(dia) {
        switch (dia) { 
            case 'lunes':
            case 'miércoles':
            case 'viernes':
            console.log("tenés clases");
            break;
            default: console.log( "no tenés clases");
        }
    }


    
    let bicicletaA = {
        rodado: 18,
        marca: "Mountain Bike"
    }
    let bicicletaB = {
        rodado: 24,
        marca: "Aurora"
    }
    
    let bicicletaConRodadoGrande = 
    bicicletaA.rodado >bicicletaB.rodado ? bicicletaA : bicicletaB;	
    console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );
  
  
  
  
    function loro (texto){
        for (let i = 0; i<5; i++){
            console.log(texto)
        }
    }
    console.log(loro("Hola"));