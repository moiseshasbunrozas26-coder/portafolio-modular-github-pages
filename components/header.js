export function renderHeader() {
    const container = document.querySelector("#header-container");

    if (!container) {
        console.warn("No se encontró el contenedor del encabezado.");
        return;
    }

    container.innerHTML = `
        <header class="site-header">
            <nav class="navigation" aria-label="Navegación principal">
                <a class="navigation__brand" href="#inicio">
                    Alex Hasbún
                </a>

                <ul class="navigation__list">
                    <li>
                        <a class="navigation__link" href="#inicio">
                            Inicio
                        </a>
                    </li>

                    <li>
                        <a class="navigation__link" href="#sobre-mi">
                            Sobre mí
                        </a>
                    </li>

                    <li>
                        <a class="navigation__link" href="#proyectos">
                            Proyectos
                        </a>
                    </li>

                    <li>
                        <a class="navigation__link" href="#contacto">
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    `;
}
