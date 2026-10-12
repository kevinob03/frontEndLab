export function iniciarCssDemo() {
  const formulario = document.querySelector('#css-sample-form');
  const botonCss = document.querySelector('#toggle-css');
  const escenario = document.querySelector('#css-stage');
  const botonesVista = [...document.querySelectorAll('[data-viewport]')];

  function establecerCss(activo) {
    formulario.classList.toggle('styled', activo);
    botonCss.setAttribute('aria-pressed', String(activo));
    botonCss.textContent = activo ? 'Con CSS' : 'Sin CSS';
  }

  function establecerVista(vista) {
    escenario.classList.toggle('mobile', vista === 'mobile');
    botonesVista.forEach((boton) => {
      const activo = boton.dataset.viewport === vista;
      boton.classList.toggle('active', activo);
      boton.setAttribute('aria-pressed', String(activo));
    });
  }

  botonCss.addEventListener('click', () => establecerCss(!formulario.classList.contains('styled')));
  botonesVista.forEach((boton) => boton.addEventListener('click', () => establecerVista(boton.dataset.viewport)));

  return () => { establecerCss(true); establecerVista('desktop'); };
}
