// Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").

// Función para obtener datos del archivo JSON y filtrar nombres que comiencen con "A"
//Definimos una función que realizará la operación completa de obtener y filtrar datos.
function obtenerYFiltrarDatos() {
    //fetch('datos.json') hace una solicitud HTTP GET para obtener el archivo datos.json.
    fetch('ejercicio18.json')
    //.then() para manejar la respuesta.
        .then(response => {
            // Verificamos si la respuesta es exitosa con response.ok.
            if (!response.ok) {
                //Si la respuesta no es exitosa, lanzamos un error
                throw new Error('Error al cargar el archivo JSON');
            }
            // Si la respuesta es exitosa, convertimos la respuesta en un objeto JSON con response.json().
            return response.json();
        })
        //.then(), recibimos los datos ya convertidos a un objeto JSON.
        .then(datos => {
            // método filter para crear un nuevo array que contenga solo los objetos donde el nombre comienza con "A".
            //persona.nombre.startsWith('A') verifica si el nombre de cada persona empieza con "A".
            //Guardamos los resultados filtrados en la variable nombresConA.
            const nombresConA = datos.filter(persona => persona.nombre.startsWith('A'));
            // Mostrar los datos filtrados en la consola
            console.log('Nombres que comienzan con "A":', nombresConA);
        })
        .catch(error => {//.catch() para manejar errores que puedan ocurrir durante la ejecución del código.
            // Manejar errores y mostrar el mensaje de error en la consola
            console.error('Error:', error.message);
        });
}
// Llama a la función para obtener y filtrar los datos
obtenerYFiltrarDatos();
