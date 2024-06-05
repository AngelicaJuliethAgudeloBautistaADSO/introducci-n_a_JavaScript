//Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//comenzando desde desde y terminando con hasta.
//Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
//• Usando setInterval.
//• Usando setTimeout anidado

//setInterval

function setinterval(desde,hasta) {
    let contador= desde;
    const tiempoId= setInterval(function(){
        console.log(contador);
        if (contador==hasta) {
            clearInterval(tiempoId);
        }
        contador++;
    }, 1000);
}
setinterval(5, 10);

//setTimeout

function settimeout(desde, hasta) {
    let contador = desde;
    setTimeout(function ejecutar() {
        console.log(contador)

        if (contador<hasta) {
            setTimeout(ejecutar, 1000);
        }
    }, 1000);
        
    };
    settimeout(5, 10);
