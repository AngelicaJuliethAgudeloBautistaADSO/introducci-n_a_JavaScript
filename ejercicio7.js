// Crear una función find que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined
// const num = [1,3,,5,7,8];
// const operacion= find(nums, num => num % 2 == 0);

function find(array, callback) {
    for (let elemento of array){
        if(callback(elemento)){
            return elemento
        }
    }
        return undefined;
}
const num = [1,3,,5,7,8];
const operacion= find(num, num => num % 2 == 0);
console.log(operacion)