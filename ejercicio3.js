//Crear una función map que acepte un array y un callback y que:
//• por cada elemento del array ejecute el callback pasándole dicho elemento como
//argumento
//• obtenga el resultado
//• lo pushee a un nuevo array
//• devuelva el array final con el resultado de cada una de las llamadas al callback.

function map(array, callback) {
    let resultadoarray=[]; //se crea un array para que almacene los resultados 
    //se itera sobre cada elemento del array principal
    for(let i=0; i<array.length; i++){
        let resultado= callback(array[i]);//ejecuta el callback con el elemento actual como argumento

        resultadoarray.push(resultado);//Pushear el resultado al nuevo array
                    //push:     //se utiliza para agregar uno o más elementos al final de un array, lo cual modifica un array original y devuelve la nueva longitud del array.
    }
    return resultadoarray;//se devuelve el array con los resultados
}
//creamos un array nums
const nums=[1,2,3,4,5];
//llamamos la funcion map y le pasamos dos argumentos
const  operacion= map(nums, function(num){ //argumentos: el array nums que queremos transformar y un callback que sera llamada para cada elemento del array
    //toma un elemento (num) y devuelve el doble de dicho elemento (num * 2).
    return num*2;
});
console.log(operacion);