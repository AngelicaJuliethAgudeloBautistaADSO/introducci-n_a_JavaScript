// ¿Cuál es el resultado del código a continuación?
//ejemplo
let i=0;
setTimeout(() => alert(i), 100); //?
//asumimos que el tiempo para ejecutar esra funcion es > 100 ms
for (let j =0; j < 100000000; j++){
    i++;
}
//el resultado del codigo es 100000000 ya que se define la variable i y se inicializa en 0
//y se establece un setTimeout para que la funcion se muestre en 100 ms
//el bucle for se ejecuta de manera sincrona y bloquea el hilo principal e incrementa i desde 0 hasta 99999999 iteraciones en total
