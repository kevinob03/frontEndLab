# Frontend Lab

Aplicación web pequeña e interactiva para apoyar una exposición de 9 minutos sobre fundamentos del desarrollo Front-End. Está construida con HTML5 semántico, CSS3, JavaScript ES6+ y Vite, sin frameworks ni librerías de componentes.

## Ejecutar el proyecto

Requiere Node.js 20.19+ o 22.12+.

```bash
npm install
npm run dev
```

Vite mostrará la dirección local, normalmente `http://localhost:5173`.

Para generar y revisar la versión de producción:

```bash
npm run build
npm run preview
```

## Guía de la exposición

- **Kevin — HTML, diapositivas 1–3:** presenta `header`, `main` y `footer`; explica títulos, enlaces y la asociación accesible entre `label` e `input`. El botón **Destacar etiquetas** señala las regiones semánticas.
- **Óscar — CSS, diapositivas 4–6:** alterna **Con CSS / Sin CSS** sin afectar el resto de la aplicación. Explica Box Model, Flexbox y Grid, y cambia entre **Escritorio / Celular** para demostrar responsive dentro del panel.
- **Wayner — JavaScript, diapositivas 7–9:** introduce un correo válido y pulsa **Validar**. El formulario usa `addEventListener`, `preventDefault` y `textContent`; el mensaje cambia sin recargar ni enviar datos.
- **Hanxel — APIs, diapositivas 10–12:** pulsa **Consultar API** para hacer un GET real a JSONPlaceholder. Se muestran el estado HTTP real, el nombre y el JSON. El apartado de Postman explica cómo repetir la consulta.

Cada sección incluye un explorador **¿Qué hace este código?** con definiciones breves. **Modo exposición** amplía las demos y permite cambiar de tema con los botones, las flechas izquierda/derecha o salir con `Escape`.

## Estructura

```text
index.html
package.json
src/
  main.js
  styles/main.css
  modules/htmlDemo.js
  modules/cssDemo.js
  modules/javascriptDemo.js
  modules/apiDemo.js
  data/explanations.js
```

## Nota sobre la API

La demostración necesita acceso a Internet para consultar `https://jsonplaceholder.typicode.com/users/1`. Si no hay conexión, presenta un error comprensible y no inventa una respuesta.
