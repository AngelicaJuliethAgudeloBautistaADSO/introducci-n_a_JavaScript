// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true
function every(array, callback) {
    // Iterar sobre cada elemento del array nums
    for (let i=0; i< array.length; i++){
        if (!callback(array[i])){
            return false;
        }
    }
    return true;
}
const nums = [2,4,6,8,10];
//Se llama a la función every pasándole dos argumentos:
//nums: el array que queremos evaluar.
//callback: una función que será llamada para cada elemento del array. Esta función toma un elemento (num) y devuelve true si el número es par (num % 2 === 0), y false en caso contrario.
const funcEvery = every(nums, function(num){
    return num % 2==0;
});
console.log(funcEvery);