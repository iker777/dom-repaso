# 🧩 Ejercicios prácticos de repaso del DOM, CSS y JavaScript (mobile first)

## Instrucciones generales

- Usa un solo documento HTML (`index.html`).
- Aplica **mobile first**: primero estilos para móvil, luego adapta con media queries.
- Utiliza **Flexbox** y **Grid** donde sea necesario.
- Usa **JavaScript** para manejar la interactividad del DOM (eventos, clases, atributos…).
- Aplica transiciones y animaciones suaves.

---

## 1. 📱 Menú hamburguesa

**Objetivo:** Crear un menú de navegación adaptable para móviles.

**Enunciado:**

- Se vea como un icono en pantallas pequeñas.
- Al hacer clic, muestre un menú vertical con enlaces.
- En pantallas grandes, el menú debe mostrarse horizontalmente, sin necesidad del botón hamburguesa.
- Añade una animación de apertura/cierre (ej. deslizar desde arriba o desvanecer).
- Usa flex o grid para distribuir el contenido del menú.

---

## 2. 📂 Sección desplegable (acordeón)

**Objetivo:** Crear una sección con contenido expandible.

**Enunciado:**

- Crea un acordeón con tres secciones.
- Al hacer clic en una sección, su contenido debe desplegarse.
- Si se abre una, las otras deben cerrarse automáticamente.
- Añade animación de apertura (altura o fade).
- Utiliza clases para abrir/cerrar dinámicamente desde JS.

---

## 3. 🧭 Navegación fija con scroll

**Objetivo:** Crear una barra de navegación fija que reaccione al scroll.

**Enunciado:**

- Crea una barra superior con 3 enlaces de navegación.
- La barra debe ser fija y cambiar de estilo (fondo, sombra…) al hacer scroll.
- Al hacer clic en los enlaces, el scroll debe ser suave hasta la sección correspondiente (`scroll-behavior: smooth`).
- Usa JS para detectar el scroll y modificar la clase del `nav`.

---

## 4. 📦 Galería responsive con grid

**Objetivo:** Crear una galería de imágenes que se adapte al ancho de la pantalla.

**Enunciado:**

- Crea una galería con al menos 6 imágenes.
- Usa **CSS Grid** para organizar la galería.
- En móvil, debe verse en 1 columna; en tablet, 2 columnas; en escritorio, 3 o más.
- Al hacer clic en una imagen, que se agrande sobre un fondo oscuro (tipo lightbox).
- Usa JS para abrir/cerrar el lightbox.

---

## 5. ✨ Botón de “modo oscuro”

**Objetivo:** Agregar un interruptor para cambiar el tema de la web.

**Enunciado:**

- Crea un botón para alternar entre modo claro y oscuro.
- Al hacer clic, cambia los colores principales del sitio (fondo, texto, enlaces).
- Guarda la elección en `localStorage` para mantenerla al recargar.
- Usa transiciones suaves al cambiar los colores.

---

## 📋 Índice de ejercicios

1. 📱 Menú hamburguesa  
2. 📂 Sección desplegable (acordeón)  
3. 🧭 Navegación fija con scroll  
4. 📦 Galería responsive con grid  
5. ✨ Botón de “modo oscuro”  
