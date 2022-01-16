let autos = require('./autos');
let persona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }


let concesionaria = 
{
   autos : autos, 
   persona : persona,
    
   buscarAuto : function (patenteIngresada) 
    { 
       for(let i=0;i<autos.length;i++ )
       {
          if (patenteIngresada === autos[i].patente){return autos[i]}
        }

        return null
    
    },

   venderAuto: function (patente)
    {
        let auto = this.buscarAuto(patente)
        
        if (auto !== null)
        {
            auto.vendido = true
        }
    } ,
 
    autosParaLaVenta: function ()
    {
        let auto = this.autos
        let arrayAutoVenta =  auto.filter(function(auto){return auto.vendido != true})
       return arrayAutoVenta
    },


    autosNuevos: function ()
    {
        let autosDisponibles = this.autosParaLaVenta(); 
        let arrayAutosNuevos =  autosDisponibles.filter(function(autosDisponibles)
        {
            return autosDisponibles.km < 100
             
        })
       return arrayAutosNuevos
    },
    listaDeVentas : function ()
    {
        let auto = this.autos;
        let vendidos = []
       
        for(let i=0;i<auto.length;i++ )
       {
          if (auto[i].vendido == true)
          {
              vendidos.push(auto[i].precio)

            }
        } return vendidos;

    },

    totalDeVentas : function ()
    {   
        lista = this.listaDeVentas()
        let suma = lista.reduce((acumulador,lista) => acumulador + 
            lista, 0) 
;
        return suma
    }
    ,

    puedeComprar: function (auto, persona)  
    {   
            
        
        let totalcuotas = auto.precio/auto.cuotas

        if (auto.precio<persona.capacidadDePagoTotal && totalcuotas<persona.capacidadDePagoEnCuotas)
        {
            return true
        }else{return false}
        
},

    autosQuePuedeComprar: function (persona)
    {
        let autos = this.autosParaLaVenta()
        
        
        let autosQuePuedeComprar = autos.filter(auto =>
         {
                return this.puedeComprar(auto, persona) == true;
            })
        
        
        return autosQuePuedeComprar
        
    }
        
        
    

 
}

//Terminamos