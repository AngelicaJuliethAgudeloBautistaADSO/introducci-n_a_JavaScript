// La función incorporada setTimeout utiliza callbacks. Crea una alternativa
// probasada en mesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería
// resolverse después de ms milisegundos, para que podamos agregarle. then, así:
//la funcion delay toma un argumento milisegundos
function delay(ms) {//esta funcion devuelve una promesa
    //Las promesas son objetos que representan la eventual finalización (o falla) de una operación asíncrona y su valor resultante.
    //new Promise toma una función de ejecución recibe dos argumentos: resolve y reject
    //solo usamos resolve porque no necesitamos manejar ningún error para un simple retraso.
    return new Promise(resolve => {
        //usamos setTimeout para que ejecute una función después de un número específico de milisegundos.
        //toma dos argumentos  la función a ejecutar (resolve en este caso) y el número de milisegundos a esperar (ms).
        setTimeout(resolve, ms);
    });
}
//se llama a la funcion delay con 3000 ms 3 sg
//.then para especificar lo que debe suceder después de que la promesa devuelta por delay se resuelva. se resuelve 3000ms despues
delay(3000).then(()=>  alert("se ejecutara despues de 3 minutos"))
