// Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

// se crea tres Promise usando el constructor new Promise().
const promise1 = new Promise((resolve) => {//pasamos una función que recibe dos parámetros: resolve y reject. Estos son funciones que se utilizan para controlar el estado de la Promise.
    setTimeout(() => {//simular una operación asíncrona que toma cierto tiempo en completarse.
      resolve('Promise 1 resuelta');
    }, 2000);
  });
  //antes de llamar a reject() con el valor 'Promise 2 rechazada'. Esto cambia el estado de la Promise a "rechazada" y le asigna el valor especificado.
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Promise 2 rechazada');
    }, 3000);
  });
  //ntervalo de 1 segundo (1000 milisegundos) antes de llamar a resolve() con el valor 'Promise 3 resuelta'
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 3 resuelta');
    }, 1000);
  });
  
//Promise.allSettled() espera a que todas las Promises se resuelvan o rechacen antes de continuar. A diferencia de Promise.all(), Promise.allSettled() no se rechaza si alguna Promise se rechaza.
  Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {//método .then() se ejecuta y recibe un array con información sobre el estado de cada Promise.
      console.log('Estado de las Promises:');//indicando que vamos a mostrar el estado de las Promises.
      results.forEach((result) => {//results.forEach() para iterar sobre el array de resultados y mostrar el estado de cada Promise.
        if (result.status === 'fulfilled') {//result.status para verificar si el estado es "fulfilled" (resuelto) o "rejected" (rechazado)
          console.log(`  ${result.value}`);
        } else {
          console.log(`  ${result.reason}`);
        }
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  