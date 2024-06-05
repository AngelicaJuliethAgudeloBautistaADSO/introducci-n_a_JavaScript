// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelt

// se crean tres promesas que se resolveran despues da cada intervalo
// se utiliza una Arrow function
const promise1 = new Promise((resolve) => {
    //constructor, pasamos una función que recibe dos parámetros: resolve y reject. Estos son funciones que se utilizan para controlar el estado de la Promise.
    setTimeout(() => {//simular una operación asíncrona que toma cierto tiempo en completarse.
      // funciones que se utilizan para controlar el estado de la Promise.
      resolve('Promise 1 resuelta');
    }, 2000);
  });//llamamos a la función resolve() pasándole el valor 'Promise 1 resuelta
  
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 2 resuelta');
    }, 3000);
  });
  
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 3 resuelta');
    }, 1000);
  });
  
  // Promise.all() y pasamos un array con las tres Promises (promise1, promise2 y promise3) como argumento.
  // Promise.all() espera a que todas las Promises se resuelvan antes de continuar
  Promise.all([promise1, promise2, promise3])
  // método .then(), mostramos un mensaje indicando que todas las Promises se han resuelto.

    .then((results) => {
      console.log('Todas las Promises se han resuelto:');
      //results.forEach() para iterar sobre el array de resultados y mostrar cada resultado en la consola.
      results.forEach((result) => {
        console.log(result);
      });
    })
    // si alguna de las promesas es rechazada el método .catch() se ejecutará y recibirá el error. 
    .catch((error) => {
      console.error('Error:', error);
    });

    // .forEach:ejecutar una función proporcionada una vez por cada elemento de un array