const regex = {
  usuario: /^[A-Za-z1-90@.]+$/i,
  nombres: /^[A-Za-záéúíóàèìòùÑñ ]+$/i,
  cedula: /^[1-90() -]+$/i,
  email: /[A-Z0-9a-z._%+-]+@mppct+\.gob+\.ve/g,
  no_space: /^[\w\S]+$/g,
  no_special: /^[\w\s.:,"()áéúíóàèìòùÑñ-]+$/g,
  number: /^[0-9+]+/
};
const RULES = {
  required: {
    required: { value: true, message: 'Campo requerido' }
  },
  username: {
    required: { value: true, message: 'Campo requerido' },
    pattern: {
      value: regex.usuario,
      message: 'No se aceptan caracteres especiales ni espacio'
    }
  },
  names: {
    required: { value: true, message: 'Campo requerido' },
    pattern: {
      value: regex.nombres,
      message: 'No se aceptan caracteres especiales ni espacio ni numeros'
    }
  },

  no_required_no_special: {
    pattern: {
      value: regex.no_special,
      message: 'Solo se aceptan los siguientes caracteres: . : , " ( )'
    }
  },
  correo: {
    required: { value: true, message: 'Campo requerido' },
    pattern: {
      value: regex.email,
      message: 'Solo se acepta el correo institucional (@mppct.gob.ve)'
    }
  },

  cedula: {
    maxLength: { value: 8, message: 'Maximo 8 caracteres' },
    required: { value: true, message: 'Campo requerido' },
    pattern: { value: regex.cedula, message: 'Solo acepta numeros' }
  },
  rif: {
    maxLength: { value: 9, message: 'Maximo 9 caracteres' },
    required: { value: true, message: 'Campo requerido' },
    pattern: { value: regex.cedula, message: 'Solo acepta numeros' }
  },
  password: {
    minLength: { value: 6, message: 'Minimo 6 caracteres' },
    required: { value: true, message: 'Campo requerido' }
  },
  codigo: {
    maxLength: { value: 7, message: 'Maximo 7 caracteres alfanumericos' },
    required: { value: true, message: 'Campo requerido' }
  },
  no_space: {
    required: { value: true, message: 'Campo requerido' },
    pattern: {
      value: regex.no_space,
      message: 'No se aceptan espacios en blanco'
    }
  },
  no_special: {
    required: { value: true, message: 'Campo requerido' },
    pattern: {
      value: regex.no_special,
      message: 'Solo se aceptan los siguientes caracteres: . : , " ( )'
    }
  },
  number: {
    required: { value: true, message: 'Campo requerido' },
    pattern: {
      value: regex.number,
      message: 'Solo se aceptan numeros'
    }
  },
  cellphone:{
    required: { value: true, message: 'Campo requerido' },
   maxLength: { value: 11, message: 'Maximo 11 caracteres numericos' },
    pattern: {
      value: regex.number,
      message: 'Solo se aceptan numeros'
    }
  }
};

export { RULES };
