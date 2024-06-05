// Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

async function fetchData() {
    try {
      const response = await fetch('ejercicio23.json');//fetch() Enviar datos en el cuerpo de la petición (por ejemplo en formato JSON)
    //   Recibir la respuesta del servidor y acceder a sus datos (por ejemplo convertirlos a JSON)
      if (!response.ok) {// indica si la solicitud HTTP fue exitosa
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      document.getElementById('content').innerText = JSON.stringify(data, null, 2);//getElementById() Obtener una referencia a un elemento específico de la página Acceder y modificar las propiedades del elemento seleccionado
    } catch (error) {//JSON.stringify() Serializar objetos, arrays, números, strings, booleanos y valores null a JSON
      console.error('Hubo un problema con la solicitud fetch:', error);
      document.getElementById('content').innerText = 'Error al cargar los datos: ' + error.message;
    }
  }
  
  fetchData();

//   async function fetchData() {
//     try {
//       const response = await fetch('ejercicio23.json');
//       if (!response.ok) {
//         throw new Error('Network response was not ok ' + response.statusText);
//       }
//       const data = await response.json();
//       const contentElement = document.getElementById('content');
//       if (contentElement) {
//         contentElement.innerText = JSON.stringify(data, null, 2);
//       } else {
//         console.error('No se pudo encontrar el elemento con id "content".');
//       }
//     } catch (error) {
//       console.error('Hubo un problema con la solicitud fetch:', error);
//       const contentElement = document.getElementById('content');
//       if (contentElement) {
//         contentElement.innerText = 'Error al cargar los datos: ' + error.message;
//       } else {
//         console.error('No se pudo encontrar el elemento con id "content" para mostrar el mensaje de error.');
//       }
//     }
//   }
  
//   fetchData();
  