// Crea una Promise que se resuelva después de 3 segundos y luego imprima
// "Promise resuelta" cuando se cumpla

//se crea una nueva promesa con new seguido de promise
const mipromise = new Promise(function(){
    //se utiliza settimeout para simular un retraso de 3 sg y luego envie la alerta
    setTimeout(() => {
        alert("promise resuelta ")
    }, 3000);
})