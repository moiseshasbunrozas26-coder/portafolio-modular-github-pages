# Portafolio modular con GitHub Pages

## Descripción

Este proyecto corresponde al taller formativo de la asignatura Aplicaciones y Tecnologías de la Web.

El sitio presenta un portafolio profesional desarrollado mediante HTML, CSS, JavaScript y JSON. Su propósito es aplicar buenas prácticas de modularidad, organización de archivos y separación de responsabilidades.

## Sitio publicado

[Ver portafolio publicado en GitHub Pages](https://moiseshasbunrozas26-coder.github.io/portafolio-modular-github-pages/)

## Arquitectura del proyecto

```text
portafolio-modular-github-pages/
│
├── index.html
├── README.md
│
├── components/
│   ├── header.js
│   └── footer.js
│
├── css/
│   └── styles.css
│
├── data/
│   └── proyectos.json
│
└── js/
    └── app.js
```

## Decisiones arquitectónicas

### Separación de responsabilidades

El archivo `index.html` contiene la estructura principal y los contenedores donde se incorporan los componentes dinámicos.

Los estilos se encuentran separados en `css/styles.css`, evitando mezclar reglas CSS dentro del documento HTML.

La lógica principal se almacena en `js/app.js`, archivo encargado de importar los componentes y cargar los datos de los proyectos.

La información de los proyectos se almacena en `data/proyectos.json`, permitiendo modificar el contenido sin intervenir directamente en el HTML.

### Componentes reutilizables

El encabezado y el pie de página se desarrollaron como módulos independientes:

- `components/header.js`
- `components/footer.js`

Cada módulo exporta una función que luego es importada desde `app.js`. Esta organización reduce la repetición de código y facilita el mantenimiento.

### Modularidad y bajo acoplamiento

Cada archivo posee una responsabilidad específica. Los componentes visuales no dependen directamente de los datos de los proyectos y el archivo JSON no contiene reglas de presentación.

Esta separación permite realizar modificaciones en una parte del proyecto sin afectar innecesariamente las demás.

## Ventajas

- Facilita el mantenimiento del código.
- Permite reutilizar componentes.
- Separa estructura, presentación, comportamiento y datos.
- Facilita la incorporación de nuevos proyectos.
- Mejora la lectura y organización del repositorio.
- Permite publicar el proyecto gratuitamente mediante GitHub Pages.

## Limitaciones

- El sitio utiliza contenido estático y no posee una base de datos.
- Los cambios realizados en el archivo JSON requieren actualizar el repositorio.
- Los componentes dependen de JavaScript para mostrarse.
- La carga de datos mediante `fetch()` necesita ejecutarse desde un servidor local o desde GitHub Pages.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- Git
- GitHub
- GitHub Pages

## Autor

Alex Hasbún