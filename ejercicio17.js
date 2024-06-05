// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

// Función asincrónica para obtener y mostrar datos del archivo JSON
async function obtenerDatos() {//la funcion asincrona permite usar un await
    try {
        // Hacer una solicitud fetch para obtener el archivo JSON
        //fetch('datos.json') hace una solicitud HTTP GET para obtener el archivo datos.json.
        //await se usa para esperar a que la solicitud se complete antes de continuar con la siguiente línea de código.
        //la respuesta se guarda en la variable respuesta.
        const respuesta = await fetch('ejercicio17.json');

        // Verificar si la respuesta es exitosa
        if (!respuesta.ok) {//respuesta.ok es una propiedad que indica si la solicitud fue exitosa (código de estado HTTP 200-299).
                            //Si respuesta.ok es false, lanzamos un error con el mensaje "Error al cargar el archivo JSON".
            throw new Error('Error al cargar el archivo JSON');
        }
        // Convertir la respuesta en un objeto JSON
        //respuesta.json() convierte la respuesta en un objeto JSON.
        //await se usa nuevamente para esperar a que la conversión se complete antes de continuar
        //Los datos convertidos se guardan en la variable datos.
        const datos = await respuesta.json();

        // Mostrar los datos en la consola
        console.log('Datos obtenidos:', datos);
    } catch (error) {
        //try...catch se usa para manejar errores que puedan ocurrir durante la ejecución del código dentro del bloque try
        // Manejar errores y mostrar el mensaje de error en la consola
        console.error('Error:', error.message);
    }
}
// Llamar a la función para obtener y mostrar los datos
//ejecuta todo el proceso y obtener los datos del archivo JSON.
obtenerDatos();
