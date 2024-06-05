// Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".
function filter(array, callback) {
    //se crea un array para almacenar los elementos que pasan por el filtro
    let resultadoarray=[];
    // Itera sobre cada elemento del array original
    for (let i = 0; i < array.length; i++) {
        // Ejecuta el callback con el elemento actual como argumento
        if(callback(array[i])){
            // Si el callback devuelve true, pushear el elemento al nuevo array
            resultadoarray.push(array[i]);//push:se utiliza para agregar uno o más elementos 
//al final de un array, lo cual modifica un array original y devuelve la nueva longitud del array.
        }
    }
    //Devolver el array con los elementos que pasaron el filtro
    return resultadoarray;
}
//creamos un array nums
const nums=[1,2,3,4,5];
//se llama a la funcion filter pasandole 2 argumentos

//nums el array que se quiere filtrar 

//Un callback: una función que se llama para cada elemento del array. toma un elemento 
//(num) y devuelve true si el número es par (num % 2 === 0), y false en caso contrario.
const evenNumbers = filter(nums, function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);