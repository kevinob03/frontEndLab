export function iniciarJavascriptDemo() {
  const formulario = document.querySelector('#registro');
  const mensaje = document.querySelector('#mensaje');

  function mostrarConfirmacion(correo) {
    mensaje.textContent = `Correo válido: ${correo}. El DOM se actualizó sin recargar la página.`;
    mensaje.classList.add('success');
  }

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }
    mostrarConfirmacion(formulario.elements.correo.value);
  });

  return () => {
    formulario.reset();
    mensaje.textContent = 'Esperando un correo válido…';
    mensaje.classList.remove('success');
  };
}
