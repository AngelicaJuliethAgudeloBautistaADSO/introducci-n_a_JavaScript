// Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

// Función asincrónica para obtener y manipular datos del archivo JSON
//función asincrónica (async), lo que permite usar await
async function obtenerYManipularDatos() {
    try {
        // Hacer una solicitud fetch para obtener el archivo JSON
        //fetch('datos.json') hace una solicitud HTTP GET para obtener el archivo datos.json.
        //await se usa para esperar a que la solicitud se complete antes de continuar con la siguiente línea de código.
        //se guarda en la variable respuesta.
        const respuesta = await fetch('ejercicio19.json');

        // Verificar si la respuesta es exitosa
        if (!respuesta.ok) {//respuesta.ok es una propiedad que indica si la solicitud fue exitosa (código de estado HTTP 200-299).
            //Si respuesta.ok es false, lanzamos un error con el mensaje "Error al cargar el archivo JSON".

            throw new Error('Error al cargar el archivo JSON');
        }

        //respuesta.json() convierte la respuesta en un objeto JSON.
        //await se usa nuevamente para esperar a que la conversión se complete antes de continuar.
        //se guardan en la variable datos.
        const datos = await respuesta.json();

        // Usamos el método filter para crear un nuevo array que contenga solo los objetos donde la edad es mayor de 25 años.
        //persona.edad > 25 verifica si la edad de cada persona es mayor de 25.
        //Guardamos los resultados filtrados en la variable mayoresDe25.
        //Mostramos las personas mayores de 25 años en la consola.
        const mayoresDe19 = datos.filter(persona => persona.edad > 19);
        console.log('Personas mayores de 19 años:', mayoresDe19);

        //Usamos el método map para crear un nuevo array que contenga solo los nombres de las personas mayores de 25 años.
        //persona.nombre obtiene el nombre de cada persona.
        //Guardamos los nombres en la variable nombresMayoresDe25.
        //Mostramos los nombres de las personas mayores de 25 años en la consola.
        const nombresMayoresDe19 = mayoresDe19.map(persona => persona.nombre);
        console.log('Nombres de personas mayores de 19 años:', nombresMayoresDe19);
    } catch (error) {
        //try...catch se usa para manejar errores que puedan ocurrir durante la ejecución del código dentro del bloque try.
        //Si ocurre un error, se captura en el bloque catch y se muestra el mensaje de error en la consola usando console.error.
        console.error('Error:', error.message);
    }
}

// Llamar a la función para obtener y manipular los datos
obtenerYManipularDatos();
