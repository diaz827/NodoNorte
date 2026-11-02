# Nodo Norte

Práctica de Diseño de Interfaces Web (DIW): diseño y maquetación con Bootstrap.

Web de **Nodo Norte**, una comunidad tecnológica sin ánimo de lucro de estudiantes y profesionales de la zona que organiza charlas, talleres y obradoiros el primer martes de cada mes (y algún evento extra) en la Universidad, Singular y Wekco (Mesoiro).

## Autores

- **Francisco Puñal** · GitHub: [@superfurry-tech](https://github.com/superfurry-tech)
- **Daniel Díaz** · GitHub: [@diaz827](https://github.com/diaz827)

## Objetivo de la web

Que un estudiante de FP o universidad (de 16 a 35 años) entre en la web desde el móvil y, en pocos minutos, encuentre el próximo evento y **se apunte**, **se haga socio** o **proponga una charla**.

La web tiene tres páginas:

| Página | Contenido |
|---|---|
| `index.html` (Inicio) | Hero con el próximo evento, qué es Nodo Norte, botón de inscripción y preguntas frecuentes |
| `eventos.html` (Eventos) | Próximos eventos con su nivel y plazas, calendario, ponentes y ediciones anteriores con fotos y diapositivas |
| `unete.html` (Únete) | Formularios de inscripción a un evento, hacerse socio (cuota voluntaria de 10 €/año) y proponer una charla |

## Scrum

- **Product Owner y cliente:** Mónica Pérez Sueiro
- **Developers:** Francisco Puñal y Daniel Díaz

| Sprint | Scrum Master | Sprint Goal |
|---|---|---|
| Sprint 1 | Francisco Puñal y Daniel Díaz | Diseño aprobado por el cliente (wireframes, moodboard y guía de estilos) y plantilla base en Bootstrap con navbar y footer en las tres páginas, subida a main. |
| Sprint 2 | Francisco Puñal y Daniel Díaz | Web completa de Nodo Norte, con las tres páginas, los formularios y los componentes, validada, responsive y accesible, lista para entregar. |

**Tablero del proyecto (GitHub Projects):** [\[https://github.com/diaz827/NodoNorte\]](https://github.com/diaz827/NodoNorte)

## Estructura de carpetas

```
NodoNorte/
├── index.html
├── eventos.html
├── unete.html
├── css/
│   └── estilos.css
├── js/
│   └── validacion.js
├── img/
├── docs/
│   ├── fichas-practica.pdf
│   ├── guia-estilos.pdf
│   └── wireframes/
└── README.md
```

- `css/estilos.css`: CSS propio, solo para lo que Bootstrap no cubre, comentado regla a regla.
- `js/validacion.js`: validación de Bootstrap de los formularios.
- `img/`: imágenes con licencia libre (Unsplash, Pexels), con nombres sin espacios ni tildes.
- `docs/`: fichas de la práctica, guía de estilos y wireframes.

## Tecnologías usadas

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `footer`).
- **CSS3** en un archivo propio (`css/estilos.css`).
- **Bootstrap 5.3**, cargado desde el CDN oficial, para la rejilla y los componentes (navbar, cards, acordeón, modal, formularios y tablas).
- **Bootstrap Icons** para los iconos.
- **Git y GitHub** para el control de versiones.

## Cómo verla

Clona el repositorio y abre `index.html` en el navegador:

```bash
git clone https://github.com/diaz827/NodoNorte
```
