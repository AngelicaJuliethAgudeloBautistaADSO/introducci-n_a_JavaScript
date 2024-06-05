// Define una función asincrónica que espere 1 segundo y luego devuelva una
// cadena que diga "Operación completada". Utiliza async/await.


//espera 1 segundo utilizando await y setTimeout envuelto en una promesa.
//palabra clave async antes de function declara que esta función es asíncrona, lo que permite usar await dentro de ella.
async function operacionAsincrona() {
    //Se utiliza para manejar errores que puedan ocurrir dentro del bloque try.
    try {
        // Simulamos una operación asíncrona con setTimeout
        //await hace que la función espere hasta que la promesa se resuelva
        //new Promise(resolve => setTimeout(resolve, 1000)) crea una nueva promesa que se resuelve después de 1 segundo.
        await new Promise(resolve => setTimeout(resolve, 1000));//setTimeout se utiliza para esperar 1 segundo antes de resolver la promesa.
        
        // Devolvemos el resultado
        return "Operación completada";// la función devuelve la cadena "Operación completada".
    } catch (error) {//Si ocurre algún error, se captura en catch y se imprime en la consola.
        console.error("Error:", error);
    }
}
// Llamando a la función y mostrando el resultado se llama y se utiliza .then() para manejar la promesa devuelta.
operacionAsincrona().then(resultado => console.log(resultado));//.then() es un método que se utiliza para manejar el resultado de una promesa una vez que se resuelve.
operacionAsincrona().then(resultado => alert(resultado));
