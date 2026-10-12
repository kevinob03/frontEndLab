export function iniciarHtmlDemo() {
  const pagina = document.querySelector('#html-page');
  const boton = document.querySelector('#highlight-semantics');
  const formulario = document.querySelector('#html-form');

  boton.addEventListener('click', () => {
    const activo = pagina.classList.toggle('highlight');
    boton.setAttribute('aria-pressed', String(activo));
    boton.textContent = activo ? 'Ocultar etiquetas' : 'Destacar etiquetas';
  });

  formulario.addEventListener('submit', (evento) => evento.preventDefault());

  return () => {
    pagina.classList.remove('highlight');
    boton.setAttribute('aria-pressed', 'false');
    boton.textContent = 'Destacar etiquetas';
    formulario.reset();
  };
}
