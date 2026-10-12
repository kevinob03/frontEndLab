import './styles/main.css';
import { explicaciones } from './data/explanations.js';
import { iniciarHtmlDemo } from './modules/htmlDemo.js';
import { iniciarCssDemo } from './modules/cssDemo.js';
import { iniciarJavascriptDemo } from './modules/javascriptDemo.js';
import { iniciarApiDemo } from './modules/apiDemo.js';

const temas = ['html', 'css', 'javascript', 'apis'];
const metadatos = {
  html: 'Kevin · Diapositivas 1–3',
  css: 'Óscar · Diapositivas 4–6',
  javascript: 'Wayner · Diapositivas 7–9',
  apis: 'Hanxel · Diapositivas 10–12'
};
const secciones = [...document.querySelectorAll('.lab-section')];
const enlaces = [...document.querySelectorAll('.nav-link')];
const botonPresentacion = document.querySelector('.presentation-toggle');
const controlesPresentacion = document.querySelector('.presentation-controls');
const progreso = document.querySelector('#presentation-progress');
let temaActivo = 'html';

const restablecer = {
  html: iniciarHtmlDemo(),
  css: iniciarCssDemo(),
  javascript: iniciarJavascriptDemo(),
  apis: iniciarApiDemo()
};

function actualizarProgreso() {
  const indice = temas.indexOf(temaActivo);
  progreso.textContent = `${indice + 1} de ${temas.length} · ${metadatos[temaActivo]}`;
  document.querySelector('#previous-section').disabled = indice === 0;
  document.querySelector('#next-section').disabled = indice === temas.length - 1;
}

function mostrarTema(tema, actualizarUrl = true) {
  if (!temas.includes(tema)) return;
  temaActivo = tema;
  secciones.forEach((seccion) => {
    const activa = seccion.dataset.topic === tema;
    seccion.hidden = !activa;
    seccion.classList.toggle('active', activa);
  });
  enlaces.forEach((enlace) => {
    const activo = enlace.dataset.section === tema;
    enlace.classList.toggle('active', activo);
    if (activo) enlace.setAttribute('aria-current', 'page');
    else enlace.removeAttribute('aria-current');
  });
  if (actualizarUrl) history.replaceState(null, '', `#${tema}`);
  actualizarProgreso();
}

function cambiarTema(desplazamiento) {
  const destino = temas[temas.indexOf(temaActivo) + desplazamiento];
  if (destino) {
    mostrarTema(destino);
    document.querySelector(`#${destino}-title`)?.focus({ preventScroll: true });
  }
}

function prepararExplicaciones() {
  document.querySelectorAll('[data-explanation]').forEach((panel) => {
    const tema = panel.dataset.explanation;
    const conceptos = panel.querySelector('.concepts');
    const texto = panel.querySelector('.concept-copy');

    Object.entries(explicaciones[tema]).forEach(([concepto, [titulo, descripcion]], indice) => {
      const boton = document.createElement('button');
      boton.type = 'button';
      boton.textContent = concepto;
      boton.setAttribute('aria-pressed', String(indice === 0));
      boton.classList.toggle('active', indice === 0);
      boton.addEventListener('click', () => {
        conceptos.querySelectorAll('button').forEach((otro) => {
          otro.classList.toggle('active', otro === boton);
          otro.setAttribute('aria-pressed', String(otro === boton));
        });
        texto.replaceChildren();
        const fuerte = document.createElement('strong');
        fuerte.textContent = `${titulo}: `;
        texto.append(fuerte, descripcion);
      });
      conceptos.append(boton);
      if (indice === 0) {
        const fuerte = document.createElement('strong');
        fuerte.textContent = `${titulo}: `;
        texto.append(fuerte, descripcion);
      }
    });
  });
}

enlaces.forEach((enlace) => enlace.addEventListener('click', (evento) => {
  evento.preventDefault();
  mostrarTema(enlace.dataset.section);
}));

document.querySelectorAll('.reset-demo').forEach((boton) => {
  boton.addEventListener('click', () => restablecer[boton.dataset.reset]());
});

botonPresentacion.addEventListener('click', () => {
  const activo = document.body.classList.toggle('presentation');
  botonPresentacion.setAttribute('aria-pressed', String(activo));
  botonPresentacion.textContent = activo ? 'Salir de exposición' : 'Modo exposición';
  controlesPresentacion.hidden = !activo;
  actualizarProgreso();
});

document.querySelector('#previous-section').addEventListener('click', () => cambiarTema(-1));
document.querySelector('#next-section').addEventListener('click', () => cambiarTema(1));
document.addEventListener('keydown', (evento) => {
  if (!document.body.classList.contains('presentation')) return;
  if (evento.key === 'ArrowLeft') cambiarTema(-1);
  if (evento.key === 'ArrowRight') cambiarTema(1);
  if (evento.key === 'Escape') botonPresentacion.click();
});

window.addEventListener('hashchange', () => mostrarTema(location.hash.slice(1), false));
prepararExplicaciones();
mostrarTema(temas.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'html', false);
