export function renderFooter() {
    const container = document.querySelector("#footer-container");

    if (!container) {
        console.warn("No se encontró el contenedor del pie de página.");
        return;
    }

    const currentYear = new Date().getFullYear();

    container.innerHTML = `
        <footer class="site-footer">
            <p>
                &copy; ${currentYear} Alex Hasbún.
            </p>

            <p>
                Proyecto desarrollado para Aplicaciones y Tecnologías de la Web.
            </p>
        </footer>
    `;
}
