//En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
//pesado que demora más de 100 ms en finalizar.
//¿Cuándo se ejecutará la función programada y por qué se ejecutará?
//a) Después del bucle: ya ue es bucle es una operacion asincrona que bloquea la ejecucion de otras tareas hasta que finalice
//b) Antes del bucle.
//c) Al comienzo del bucle.
// ¿Qué va a mostrar alert()?
// mostrara 100000000 ya que i se incrementa al final del bucle
let i=0;
//setTimeout se ejecuta primero y programa una tarea para que se ejecute después de 100 milisegundos.
//Esta tarea se coloca en la cola de tareas del navegador.
setTimeout(()=> alert(i), 100);
//la funcion programada por settimeout se ejecuta despues del for porque js es de un solo hilo y 
//hasta que no se termine el bucle no se interrumpira 

//asumimos que el tiempo para ejecutaresta funcion es > ms
//el bucle comienza despues del settimeout
for(let j=0; j< 100000000; j++){//operacion sincrona no permite que se ejecute ninguna otra cosa hasta que termine. 
    i++
}
