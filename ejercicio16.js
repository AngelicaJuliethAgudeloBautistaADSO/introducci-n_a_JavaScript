//Crea tres Promises consecutivas, donde cada una se resuelva después de 1
//segundo y devuelva un número diferente. Luego, encadena las tres Promises para sumar
//los resultados y mostrar el resultado final.

//definimos tres funciones que crean promesas.
//se crean las promesas
function promesaUno() {
    return new Promise(resolve => {// devuelve una nueva promesa.
        setTimeout(() => {//setTimeout para esperar 1 segundo (1000 milisegundos).
            resolve(1);
        }, 1000);
    });
}
function promesaDos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
}
function promesaTres() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(3);
        }, 1000);
    });
}
// se encadenan las promesas y suma los resultados
promesaUno()// se Llama a promesaUno, que devuelve una promesa que se resuelve con el valor 1 después de 1 segundo.
    //result1 es el valor con el que se resolvió promesaUno, que es 1.
    .then(result1 => {//.then() para manejar el resultado de promesaUno.
        /////////////////////////result2 se llama a promesaDos.
        ////////////////////////////////Cuando promesaDos se resuelve, devuelve 2.
        ////////////////////////////////////Sumamos result1 (que es 1) y result2 (que es 2), y devolvemos esta suma (que es 3).
        return promesaDos().then(result2 => result1 + result2);
    })
    .then(result12 => {//resultado de la suma de promesaUno y promesaDos, que es 3.
        //llamamos a promesaTres.
        //Cuando promesaTres se resuelve, devuelve 3.
        //Sumamos result12 (que es 3) y result3 (que es 3), y devolvemos esta suma (que es 6)
        return promesaTres().then(result3 => result12 + result3);
    })
    .then(finalResult => {//Resultado de la suma de result12 y result3, que es 6.
        //se Imprime el finalResult en la consola.
        console.log("Resultado final:", finalResult);
    })
    .catch(error => {//si hay algún error en cualquier parte de la cadena de promesas, el .catch() captura el error.
        console.error("Error:", error);
    });