import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";

function createProjectCard(project) {
    const technologies = project.tecnologias
        .map(
            (technology) => `
                <li class="project-card__technology">
                    ${technology}
                </li>
            `
        )
        .join("");

    const isExternalLink = project.url.startsWith("http");

    const linkAttributes = isExternalLink
        ? 'target="_blank" rel="noopener noreferrer"'
        : "";

    return `
        <article class="project-card">
            <h3>${project.titulo}</h3>

            <p class="project-card__description">
                ${project.descripcion}
            </p>

            <ul
                class="project-card__technologies"
                aria-label="Tecnologías utilizadas"
            >
                ${technologies}
            </ul>

            <a
                class="project-card__link"
                href="${project.url}"
                ${linkAttributes}
            >
                Ver proyecto
            </a>
        </article>
    `;
}

async function loadProjects() {
    const container = document.querySelector("#projects-container");

    if (!container) {
        return;
    }

    try {
        const response = await fetch("./data/proyectos.json");

        if (!response.ok) {
            throw new Error(
                `No fue posible cargar los proyectos: ${response.status}`
            );
        }

        const projects = await response.json();

        container.innerHTML = projects
            .map(createProjectCard)
            .join("");
    } catch (error) {
        console.error(error);

        container.innerHTML = `
            <p class="error-message">
                No fue posible cargar los proyectos. Revisa que el sitio
                esté ejecutándose desde un servidor local.
            </p>
        `;
    }
}

function initializeApplication() {
    renderHeader();
    renderFooter();
    loadProjects();
}

document.addEventListener("DOMContentLoaded", initializeApplication);
