// Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)

// función takeWhile que recibe los parametros array y callbacks
function takeWhile(array, callback) {
    //se crea un array vacio para guardar los resultados
    const result = [];
    //se crea un bucle que itera sobre el array original numbers usando la variable i
    for (let i = 0; i < array.length; i++) {
        //se ejecuta el callback que le pasa el elemento actual del array (array[i])
        //si el callaback es true
        if (!callback(array[i])) {
            break;
        }
        result.push(array[i]);
    }
    
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = takeWhile(numbers, (num) => num < 4);

console.log(result); 
