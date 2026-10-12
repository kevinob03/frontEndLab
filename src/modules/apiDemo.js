const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

export function iniciarApiDemo() {
  const boton = document.querySelector('#fetch-user');
  const carga = document.querySelector('#api-loading');
  const estado = document.querySelector('#http-status');
  const nombre = document.querySelector('#user-name');
  const salida = document.querySelector('#json-output');
  const error = document.querySelector('#api-error');
  let controlador = null;

  function restablecer() {
    controlador?.abort();
    controlador = null;
    boton.disabled = false;
    carga.hidden = true;
    estado.textContent = '—';
    nombre.textContent = '—';
    salida.textContent = 'Sin respuesta todavía.';
    error.hidden = true;
    error.textContent = '';
  }

  async function consultarUsuario() {
    controlador?.abort();
    controlador = new AbortController();
    boton.disabled = true;
    carga.hidden = false;
    error.hidden = true;
    estado.textContent = '—';
    nombre.textContent = '—';
    salida.textContent = 'Esperando respuesta…';

    try {
      const response = await fetch(API_URL, { signal: controlador.signal });
      estado.textContent = String(response.status);
      if (!response.ok) throw new Error(`La API respondió con el estado ${response.status}.`);

      const usuario = await response.json();
      nombre.textContent = usuario.name;
      salida.textContent = JSON.stringify(usuario, null, 2);
    } catch (fallo) {
      if (fallo.name === 'AbortError') return;
      error.textContent = 'No fue posible consultar la API. Comprueba tu conexión e inténtalo de nuevo.';
      error.hidden = false;
      salida.textContent = 'No se recibió información.';
    } finally {
      boton.disabled = false;
      carga.hidden = true;
      controlador = null;
    }
  }

  boton.addEventListener('click', consultarUsuario);
  return restablecer;
}
