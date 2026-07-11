# Portafolio modular con GitHub Pages

## Descripción

Este proyecto corresponde al taller formativo de la asignatura Aplicaciones y Tecnologías de la Web.

El sitio presenta un portafolio profesional desarrollado con HTML, CSS, JavaScript y JSON. Su propósito es aplicar principios de modularidad, organización de archivos, reutilización de componentes y separación de responsabilidades.

## Sitio publicado

[Ver sitio publicado en GitHub Pages](https://moiseshasbunrozas26-coder.github.io/portafolio-modular-github-pages/)

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

El proyecto fue dividido en carpetas y archivos independientes según la función que desempeña cada elemento.

- `index.html` contiene la estructura principal del sitio.
- `css/styles.css` contiene la presentación visual.
- `js/app.js` coordina la aplicación y carga los datos.
- `data/proyectos.json` almacena la información de los proyectos.
- `components/header.js` genera el encabezado.
- `components/footer.js` genera el pie de página.

Esta separación evita mezclar estructura, estilos, comportamiento y datos dentro de un mismo archivo.

### Modularidad por componentes

El encabezado y el pie de página fueron desarrollados como módulos JavaScript independientes.

Cada componente exporta una función que es importada desde `app.js`. Esto permite reutilizar los componentes y modificarlos sin intervenir directamente en el archivo HTML.

### Uso de JSON

Los datos de los proyectos se almacenan en `proyectos.json`. La aplicación utiliza `fetch()` para obtener la información y generar las tarjetas dinámicamente.

Esta decisión permite modificar o agregar proyectos sin cambiar la estructura de `index.html`.

### Bajo acoplamiento

Cada módulo posee una responsabilidad específica. Los componentes visuales no dependen directamente del archivo JSON y los datos no contienen reglas de presentación.

Esto permite realizar cambios en una parte del proyecto con menor riesgo de afectar las demás.

## Ventajas

- Facilita el mantenimiento del código.
- Permite reutilizar componentes.
- Separa estructura, presentación, comportamiento y datos.
- Facilita la incorporación de nuevos proyectos.
- Mejora la organización y lectura del repositorio.
- Permite publicar gratuitamente mediante GitHub Pages.

## Limitaciones

- El sitio utiliza contenido estático.
- No posee una base de datos.
- Los cambios en el archivo JSON requieren actualizar el repositorio.
- Los componentes dependen de JavaScript para mostrarse.
- La carga mediante `fetch()` requiere un servidor local o GitHub Pages.

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