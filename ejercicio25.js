// Usar un proxy para la validación de los valores de propiedades
// • Cuando declaremos que el atributo es numérico solo permitimos que ingresen
// números
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
// letras
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen
// correos
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
// fechas
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
// al final de estos y se debe mostrar el error personalizado por consola

// Función para validar si un valor es numérico
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  // Función para validar si un valor es alfanumérico
  function isAlphanumeric(value) {
    return /^[a-zA-Z0-9]+$/.test(value);
  }
  
  // Función para validar si un valor es un correo electrónico válido
  function isEmail(value) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  }
  
  // Función para validar si un valor es una fecha válida
  function isDate(value) {
    return !isNaN(Date.parse(value));
  }
  
  // Función para validar si un valor contiene espacios en blanco al inicio o al final
  function hasWhitespace(value) {
    return /^\s|\s$/.test(value);
  }
  
  // Crear un objeto proxy para validar las propiedades
  const validator = {
    set(target, property, value) {
      let isValid = true;
      let errorMessage = '';
  
      switch (property) {
        case 'numericProperty':
          if (!isNumeric(value)) {
            isValid = false;
            errorMessage = 'El valor debe ser numérico';
          }
          break;
        case 'alphanumericProperty':
          if (!isAlphanumeric(value)) {
            isValid = false;
            errorMessage = 'El valor debe ser alfanumérico';
          }
          break;
        case 'emailProperty':
          if (!isEmail(value)) {
            isValid = false;
            errorMessage = 'El valor debe ser un correo electrónico válido';
          }
          break;
        case 'dateProperty':
          if (!isDate(value)) {
            isValid = false;
            errorMessage = 'El valor debe ser una fecha válida';
          }
          break;
      }
  
      if (isValid && hasWhitespace(value)) {
        isValid = false;
        errorMessage = 'El valor no puede contener espacios en blanco al inicio o al final';
      }
  
      if (isValid) {
        target[property] = value.trim();
        return true;
      } else {
        console.error(`Error en la propiedad ${property}: ${errorMessage}`);
        return false;
      }
    }
  };
  
  // Crear un objeto con las propiedades a validar
  const obj = new Proxy({}, validator);
  
  // Asignar valores a las propiedades
  obj.numericProperty = '42';
  obj.alphanumericProperty = 'abc123';
  obj.emailProperty = 'example@example.com';
  obj.dateProperty = '2023-05-28';
  
  // Asignar valores inválidos
  obj.numericProperty = 'abc';
  obj.alphanumericProperty = '123@#$';
  obj.emailProperty = 'invalid-email';
  obj.dateProperty = 'not-a-date';
  obj.anyProperty = '  value with spaces  ';
  


//   En este ejemplo, creamos un objeto proxy llamado validator que se encarga de validar los valores asignados a las propiedades del objeto obj. El objeto validator utiliza el método set() para interceptar las asignaciones de valores a las propiedades.
// Dentro del método set(), verificamos el tipo de propiedad y aplicamos las validaciones correspondientes utilizando las funciones isNumeric(), isAlphanumeric(), isEmail(), isDate() y hasWhitespace(). Si el valor es válido, se asigna a la propiedad después de eliminar los espacios en blanco al inicio y al final utilizando value.trim(). Si el valor no es válido, se muestra un mensaje de error personalizado en la consola.
// Finalmente, creamos un objeto obj utilizando el proxy validator y asignamos valores a las propiedades. Si se asigna un valor inválido, se muestra el mensaje de error correspondiente en la consola.
// Este ejemplo demuestra cómo usar un proxy para validar los valores de las propiedades de un objeto según reglas específicas, evitando que se asignen valores no deseados y proporcionando mensajes de error personalizados.
