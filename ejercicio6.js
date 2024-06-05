// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

function some(array, callback) {//se crea la funcion some con un parametro array y un callback
    //se itera sobre cada elemento del array nums
    for (let i = 0; i < array.length; i++) {
        //ejecuta el callback con el elemento actual como argumento
        if (callback(array[i])) {//array[i] es el elemento actual nums
            //callback es la función function(num) { return num % 2 === 0; }.
            return true;
        }
    }
    //si ninguno de los callbacks es TRUE se retorna a FALSE
    return false
}

const nums=[1,3,5,7,8];//se define el array nums con esos numeros 
//se llama a la funcion some y se pasan los argumentos, nums el array que queremos evaluar
const oper= some(nums, function(num){//callback:funcion que se llama para cada elemento array
//esta funcion toma un elemento num y devuelve TRUE si es par o false si no
    return num% 2==0;
}); 
console.log(oper);