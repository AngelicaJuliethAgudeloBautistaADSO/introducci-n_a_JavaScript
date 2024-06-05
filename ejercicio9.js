// Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
// todos los elementos restantes a partir de dicho elemento inclusive)

//se declara la funcion dropWhile con los argumentos array, callback
function dropWhile(array, callback) {
    //se declara una variable drop y se inicializa en true, se utiliza para controlar cuando se deben comenzar a incluir los elementos en el resultado
    let drop = true;
    //filter crea un nuevo array con los elementos que cumplan con una condición específica.
    // itera sobre cada elemento del array original y ejecuta una función de devolución de llamada para cada elemento.
    return array.filter(element => {
        //si drop es true significa que aún no se ha encontrado el primer elemento que haga que el callback devuelva false
        if (drop) {
            //Se ejecuta el callback pasando el elemento actual como argumento y se almacena el resultado en la variable drop.
            drop = callback(element);
            //si el callback devuelve true, el elemento actual no se incluirá en el resultado. Si el callback
            //devuelve false, se establecerá drop en false y se incluirá el elemento actual
            return !drop;
        } else {//si es false todos los elementos restantes deben incluirse en el resultado
            return true;
        }
    });
}

// Ejemplo de uso
const numbers = [1, 2, 3, 4, 5, 6];
const result = dropWhile(numbers, num => num < 3);

console.log(result); // Output: [3, 4, 5, 6]