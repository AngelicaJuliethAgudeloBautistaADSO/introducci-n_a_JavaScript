// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

// función asincrónica llamada fetchData() que simula una llamada a una API.
async function fetchData(item) {//parámetro item
    return new Promise((resolve) => {//devuelve una Promise que se resuelve después de 1 segundo 
      setTimeout(() => {
        console.log(`Procesando elemento: ${item}`);
        resolve(`Resultado de ${item}`);
      }, 1000);
    });
  }
  
  // processElements() que se encarga de procesar una lista de elementos.
  async function processElements(elements) {
    for (const element of elements) {//bucle for...of para iterar sobre la lista de elementos a procesar.
      const result = await fetchData(element);//palabra clave await para esperar a que la llamada a fetchData(element) se complete antes de continuar
      console.log(result);
    }
  }
  
  // Definimos una lista de elementos a procesar llamada elementsToProcess
  const elementsToProcess = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5'];
  
  // Llamada a la función que procesa los elementos
  processElements(elementsToProcess);
  