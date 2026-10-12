export const explicaciones = {
  html: {
    header: ['Encabezado semántico', 'Identifica la introducción de una página o sección. Puede contener el título y la navegación.'],
    main: ['Contenido principal', 'Agrupa la información central y única de la página. Debe existir solo uno visible.'],
    form: ['Formulario', 'Reúne controles que permiten a la persona introducir y enviar datos.'],
    label: ['Etiqueta de campo', 'Describe un control y, mediante for, lo conecta con su input para mejorar la accesibilidad.'],
    input: ['Campo de entrada', 'Recibe datos. Su atributo type define el tipo y activa validaciones del navegador.']
  },
  css: {
    selector: ['Selector', 'Indica qué elementos HTML recibirán las reglas de estilo.'],
    padding: ['Espacio interior', 'Crea separación entre el contenido de una caja y su borde.'],
    margin: ['Espacio exterior', 'Separa una caja de los elementos que la rodean.'],
    'display: flex': ['Flexbox', 'Distribuye elementos en una dimensión: una fila o una columna.'],
    'display: grid': ['CSS Grid', 'Organiza elementos en filas y columnas al mismo tiempo.'],
    '@media': ['Consulta de medios', 'Aplica estilos cuando se cumple una condición, como un ancho de pantalla pequeño.']
  },
  javascript: {
    const: ['Variable constante', 'Guarda una referencia que no será reasignada durante la ejecución.'],
    function: ['Función', 'Agrupa instrucciones reutilizables y puede recibir datos como parámetros.'],
    addEventListener: ['Escuchador de eventos', 'Ejecuta una función cuando ocurre una acción, como enviar un formulario.'],
    preventDefault: ['Evitar acción predeterminada', 'Impide que el formulario recargue la página al enviarse.'],
    textContent: ['Contenido de texto', 'Lee o cambia texto de forma segura, sin interpretar etiquetas HTML.']
  },
  apis: {
    fetch: ['Petición de red', 'Solicita un recurso a una URL y devuelve una promesa con la respuesta.'],
    await: ['Esperar una promesa', 'Pausa una función async hasta obtener el resultado de una operación asíncrona.'],
    'response.ok': ['Comprobar respuesta', 'Indica si el estado HTTP está entre 200 y 299.'],
    'response.json': ['Convertir JSON', 'Lee el cuerpo de la respuesta y lo convierte en un objeto de JavaScript.'],
    'try/catch': ['Manejo de errores', 'try ejecuta el proceso y catch permite responder si algo falla.']
  }
};
