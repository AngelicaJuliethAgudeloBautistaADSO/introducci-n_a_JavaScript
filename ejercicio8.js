//Crear una función findIndex que acepte un array y un callback y que:
//• por cada elemento del array ejecute el callback pasándole dicho elemento como
//argumento
//• devuelva el índice del elemento pasado como argumento del primer callback que
//devuelva true
//• sí ningún callback devuelve true, devuelva undefined

//se declara la funcion findIndex con los argumentos array y callback
function findIndex(array, callback) {
    //itera sobre cada elemento del array nums
    for (let i = 0; i < array.length; i++) {
        //si callback se ejecuta donde el array i es el elemento actual nums
        if (callback(array[i])) {//callback en este caso es la función num => num % 2 === 0.
        //callback toma el elmento num y devuelve true si es par si no es false
            return i;
        }
    }
    //si se cimple el bucle sin que el callback sea true por lo que ningun elemento paso el filtro
    return undefined;
}

const nums = [1, 3, 5, 7, 8];
const indexFind = findIndex(nums, num => num % 2 === 0);
console.log(indexFind); //Esto se debe a que el primer número par en el array numbers es 8, y su índice es 4.
