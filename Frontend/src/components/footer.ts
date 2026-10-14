const columnas = [ // datos del footer para cambiar un enlace tocamos esta lista y no el html
  {
    titulo: 'Panoramas Arica',
    enlaces: [
      { texto: 'Inicio', href: '/index.html' },
      { texto: 'Actividades', href: '/index.html' },
      { texto: 'Quiénes somos', href: '#' },
      { texto: 'Publica tu panorama', href: '#' },
    ],
  },
  {
    titulo: 'Información',
    enlaces: [
      { texto: 'Centro de ayuda', href: '#' },
      { texto: 'Términos y condiciones', href: '#' },
      { texto: 'Privacidad', href: '#' },
      { texto: 'Política de cancelación', href: '#' },
    ],
  },
  {
    titulo: 'Enlaces de interés',
    enlaces: [
      { texto: 'Turismo Arica', href: '#' },
      { texto: 'Agenda cultural', href: '#' },
      { texto: 'Rutas patrimoniales', href: '#' },
      { texto: 'Clima y mareas', href: '#' },
    ],
  },
];

// datos del footer para cambiar un enlace tocamos esta lista y no el html
const colaboradores = ['NORTEVIVO', 'ARICA CULTURA', 'Costa & Desierto', 'RUTA LOCAL'];

export function renderFooter(): void {
  const contenedor = document.getElementById('footer');
  if (!contenedor) return;

  const columnasHtml = columnas
    .map(
      (c) => `
      <div class="col-6 col-md-4 col-lg-3">
        <h6 class="footer-titulo">${c.titulo}</h6>
        <ul class="list-unstyled footer-lista">
          ${c.enlaces.map((e) => `<li><a href="${e.href}">${e.texto}</a></li>`).join('')}
        </ul>
      </div>`
    )
    .join('');

  contenedor.innerHTML = `
    <div class="app-footer">
      <div class="container">
        <div class="row g-4 py-5">
          <div class="col-12 col-lg-3">
            <a class="d-flex align-items-center gap-2 footer-marca" href="/index.html">
              <img src="/images/logo.svg" width="40" height="40" alt="">
              <span>Panoramas Arica</span>
            </a>
            <p class="footer-texto mt-3">
              La plataforma local para descubrir experiencias, cultura y naturaleza en la puerta norte de Chile.
            </p>
            <div class="d-flex gap-2">
              <a href="#" class="footer-social" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8h2.5V4.5H14C11.5 4.5 10 6 10 8.5V10H7.5v3.5H10V20h3.5v-6.5H16l.5-3.5h-3V8.8c0-.5.2-.8.5-.8z"/>
                </svg>
              </a>
              <a href="#" class="footer-social" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>
          ${columnasHtml}
        </div>

        <hr class="footer-linea my-0">

        <div class="row align-items-end py-4 g-3">
          <div class="col-12 col-lg-7">
            <small class="footer-kicker d-block mb-2">EN COLABORACIÓN CON</small>
            <div class="d-flex flex-wrap gap-4 footer-colaboradores">
              ${colaboradores.map((c) => `<span>${c}</span>`).join('')}
            </div>
          </div>
          <div class="col-12 col-lg-5 text-lg-end">
            <small class="footer-kicker">
              © ${new Date().getFullYear()} Panoramas Arica. Hecho con cariño en el norte de Chile.
            </small>
          </div>
        </div>
      </div>
    </div>`;
}