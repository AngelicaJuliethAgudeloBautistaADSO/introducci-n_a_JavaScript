// Crear un objeto proxy usando la clase Proxy

// creamos un objeto llamado objetivo
let objetivo = {
    mensaje: "hoy es 29/05/2024"// propiedad llamada mensaje
  };//Este será el objeto sobre el cual crearemos el proxy.
  
  // Crear un objeto proxy
  let manejador = {//objeto llamado manejador
    get: function(obj, prop) {//definido el método get, que se activa cuando intentamos acceder a una propiedad del proxy.
      if (prop in obj) {//Si existe, devolvemos el valor de esa propiedad. Si no existe, devolvemos un mensaje indicando que la propiedad no existe.
        return obj[prop];
      } else {
        return "La propiedad no existe.";
      }
    }
  };
  //creamos el proxy utilizando la clase Proxy
  let proxyObj = new Proxy(objetivo, manejador);
  
  // Accediendo a propiedades
  console.log(proxyObj.mensaje); // Imprimirá "hoy es 29/05/2024"
  console.log(proxyObj.otraPropiedad); // Imprimirá "La propiedad no existe."
  
