// Crea una Promise que se rechace después de 2 segundos y captura el
// error para imprimir "Error: Promise rechazada".
// Crear la promesa que se rechaza después de 2 segundos

// Definición de la función que crea una promesa que se rechaza después de 2 segundos
function promesaRechazada() {//es una función que no toma ningún argumento.
    // resolve se usa para cumplir (resolver) la promesa.
    // reject se usa para rechazar la promesa.
    return new Promise((resolve, reject) => {//crea una nueva promesa.toma una función como argumento con dos parámetros: resolve y reject.
        setTimeout(() => {//esperará 2000 milisegundos (2 segundos) antes de ejecutar la función de flecha () => { ... }.
            reject(new Error('Promise rechazada'));//Dentro de esta función, llamamos a reject con un nuevo objeto de error
        }, 2000);
    });
}

// Llamar a la promesa y manejar el rechazo
promesaRechazada()
//.catch es un método que se usa para manejar el rechazo de una promesa.
//si la funcion es rechazada  el catch captura el error y ejecuta la función proporcionada.
//la función toma el error como argumento.
.catch(error => {
        console.error("Error:", error.message);
    });
