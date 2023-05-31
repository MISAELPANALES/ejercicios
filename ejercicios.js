//1. Calcula los impuestos
//Escribe una función llamada calcularImpuestos que reciba dos argumentos numéricos: 
//edad e ingresos. Si edad es igual o mayor a 18 y los ingresos 
//son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retorna 0.
//Ejemplos:

calcularImpuestos(18, 1000) // retorna 400
calcularImpuestos(40, 10000) // retorna 4000
calcularImpuestos(17, 5000) // retorna 0

//codigo:
function calcularImpuestos(edad, ingresos){
    if((edad >= 18) && (ingresos >= 1000)){
        return ingresos * 0.40
    }else{
        return 0
    }
}


//2. Cuenta los asteriscos
//Escribe una función llamada asteriscos 
//que reciba un string str y retorne el
//número de asteriscos que hay en str.
//Ejemplos:
//asteriscos("H*o*l*a") // retorna 3
//asteriscos("Hola")  // retorna 0
//codigo:
function asteriscos(str){
    let asterisco = "*";
    let contador = 0;
    for(i = 0; i < str.length; ++i){
        if(asterisco.indexOf(str[i]) !== -1){
            ++contador
        }
    }
    return contador;
}


//. Duplica cada element
//Escribe una función llamada duplicar que reciba un arreglo 
//de números como parámetro y retorne un nuevo arreglo 
//con cada elemento duplicado (multiplicado por dos).
//Ejemplos:
const duplicar = function (array){
    return array.map(function(element){
        return element * 2
    })
}

//duplicar([3, 12, 45, 7]) // retorna [6, 24, 90, 14]
//duplicar([8, 5]) // retorna [16, 10]