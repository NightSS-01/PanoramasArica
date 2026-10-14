export function renderNavbar(): void {
  const contenedor = document.getElementById('navbar');
  if (!contenedor) return;

  contenedor.innerHTML = `
  <nav class="navbar navbar-expand-lg app-navbar">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="/index.html">
        <img src="/images/logo.svg" width="80" height="80" alt="logo-panoramas-arica">
        <span class="d-flex flex-column lh-1">
          <small class="brand-kicker">DESCUBRE</small>
          <span class="brand-name">Panoramas Arica</span>
        </span>
      </a>

      <button class="navbar-toggler" type="button"
              data-bs-toggle="collapse" data-bs-target="#menuPrincipal"
              aria-controls="menuPrincipal" aria-expanded="false" aria-label="Abrir menú">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menuPrincipal">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              <span class="text-accent fw-bold">$</span> CLP
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">CLP</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              🌐 ES
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">ES</a></li>
            </ul>
          </li>
          <li class="nav-item d-none d-lg-block"><span class="nav-divider"></span></li>
          <li class="nav-item"><a class="nav-link btn btn-pill btn-outline-pill" href="#">Mis reservas</a></li>
          <li class="nav-item"><a class="btn btn-pill btn-outline-pill" href="#">Iniciar sesión</a></li>
          <li class="nav-item"><a class="btn btn-pill btn-accent" href="#">Crear cuenta</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
}