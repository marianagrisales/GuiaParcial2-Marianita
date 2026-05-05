# Referencia de estilos y etiquetas — PetFood (Next.js + Tailwind)

Documento exportable con las tablas usadas en la guía de la interfaz (inicio, navbar, detalle de producto, panel de compra, layout y CSS global).

---

## 1. Etiquetas HTML / componentes React importantes

| Etiqueta / componente | Para qué se usa |
|----------------------|------------------|
| `html` | Raíz del documento; `lang="es"` y fuentes CSS (Geist). |
| `body` | Contenedor de toda la app; `min-h-full flex flex-col` para alto completo y flujo en columna. |
| `header` | Cabecera semántica del sitio (navbar). |
| `nav` | Bloque de solo enlaces de navegación (Inicio, Perros, etc.). |
| `main` | Contenido principal de la home. |
| `section` | Bloques temáticos en detalle (Descripción, Composición…). |
| `article` | Cada tarjeta de producto en el listado. |
| `h1`, `h2`, `h3` | Jerarquía de títulos. |
| `p` | Párrafos de texto. |
| `button` | Acciones: filtros, carrito, cantidad ±, “Añadir al carrito”. Con `type="button"` donde no hay formulario. |
| `Link` (Next.js) | Navegación sin recarga (`/`, `/producto/[id]`). |
| `label` | Agrupa la lupa + el input de búsqueda en la navbar. |
| `input` | Campo `type="search"` en la barra superior. |
| `Image` (Next.js) | Imágenes optimizadas (lupa, carrito en navbar). |
| `svg` / `path` | Iconos vectoriales (carrito en botón, camión, devolución, hoja). |
| `span` | Texto en línea: emoji, estrellas, marca, badges, parte del precio (“/ bolsa”). |
| `ul` / `li` | Listas con viñetas (composición) y filas del análisis nutricional. |

---

## 2. Flexbox (`flex`, `flex-col`, `flex-row`, etc.)

| Clase | Para qué sirve |
|--------|----------------|
| `flex` | Activa flexbox; hijos en fila por defecto. |
| `flex-col` | Hijos apilados en columna (uno debajo del otro). Ej.: `body`, columna de tarjeta, en móvil cantidad + botón compra. |
| `flex-row` | Fila explícita (a veces con prefijos `sm:`). |
| `flex-wrap` | Si no caben, pasan a la siguiente línea (filtros, navbar, estrellas). |
| `flex-1` | El hijo crece y ocupa espacio libre (input búsqueda, botón según ancho). |
| `inline-flex` | Flex con ancho del contenido (“Volver al feed”, grupo selector cantidad). |
| `items-center` | Centrado en el eje perpendicular (vertical en fila). |
| `items-start` | Alineación al inicio del eje cruzado (tags y marca en tarjeta). |
| `items-end` | Alineación al final del eje cruzado (título + contador). |
| `justify-between` | Espacio entre extremos (navbar, precio + “Ver detalles”). |
| `justify-center` | Centrado en el eje principal (emoji en imagen). |
| `justify-end` | Contenido al final del eje principal. |
| `gap-2`, `gap-3`, `gap-4`, `gap-6`, … | Espacio uniforme entre hijos sin márgenes manuales. |
| `shrink-0` | El elemento no se encoge (marca, botón “Ver detalles”, iconos). |

---

## 3. CSS Grid (`grid`, `grid-cols-*`)

| Clase | Para qué sirve |
|--------|----------------|
| `grid` | Activa cuadrícula. |
| `grid-cols-1` | Una columna (móvil). |
| `sm:grid-cols-2`, `lg:grid-cols-3`, `xl:grid-cols-4` | Más columnas al ensanchar (galería de productos). |
| `lg:grid-cols-2` | Detalle: imagen | datos en dos columnas. |
| `sm:grid-cols-3` | Tres cajas (envío, devolución, natural) en fila desde `sm`. |

---

## 4. Tamaño y posición

| Clase / concepto | Para qué sirve |
|------------------|----------------|
| `min-h-screen` | Altura mínima = 100% del viewport. |
| `min-h-[160px]`, `min-h-[280px]`, … | Altura mínima fija para zonas de imagen. |
| `max-w-6xl`, `max-w-3xl`, `max-w-2xl`, … | Ancho máximo del contenido. |
| `mx-auto` | Centrado horizontal del bloque. |
| `w-full` / `max-w-full` | Ancho disponible sin desbordar. |
| `min-w-0` | Permite que hijos flex encojan y el texto haga wrap. |
| `sticky top-0` | Navbar fija al hacer scroll. |
| `z-50` | Capa por encima del contenido. |
| `relative` | Referencia para hijos `absolute`. |
| `absolute left-4 top-4` | Badges sobre la imagen. |
| `overflow-hidden` | Recorta sobresalientes (bordes redondeados). |

---

## 5. Espaciado (margin / padding)

| Clase | Para qué sirve |
|--------|----------------|
| `px-4`, `py-4`, `pt-10`, `pb-16`, … | Padding del bloque. |
| `mt-4`, `mt-8`, `mb-8`, `space-y-3`, `space-y-6` | Márgenes o espacio vertical entre hijos. |

---

## 6. Tipografía

| Clase | Para qué sirve |
|--------|----------------|
| `text-3xl`, `text-2xl`, `text-lg`, `text-sm`, `text-xs` | Tamaños de texto. |
| `font-bold`, `font-semibold`, `font-medium` | Peso de fuente. |
| `leading-tight`, `leading-relaxed`, `leading-snug`, `leading-none` | Altura de línea. |
| `tracking-tight`, `tracking-wide` | Espacio entre letras. |
| `line-clamp-2` | Máximo 2 líneas con ellipsis. |
| `uppercase` | Texto en mayúsculas. |
| `text-center` / `text-left` | Alineación del texto. |
| `select-none` | Evita seleccionar (emoji grande). |
| `text-zinc-*`, `text-violet-*`, `text-amber-*` | Color del texto. |

---

## 7. Colores de fondo y bordes

| Clase | Para qué sirve |
|--------|----------------|
| `bg-white`, `bg-zinc-50/80`, `bg-violet-600`, … | Fondos. |
| `bg-gradient-to-b` + `from-rose-50/90 via-white to-white` | Degradado vertical en el hero. |
| `border`, `border-zinc-200`, `border-zinc-900` | Bordes. |
| `rounded-2xl`, `rounded-xl`, `rounded-full` | Radio de esquinas; `rounded-full` = píldoras/círculos. |
| `ring-1 ring-zinc-100` | Anillo fino alrededor de tarjetas. |
| `divide-y` | Separadores entre filas de lista. |

---

## 8. Sombras y efectos

| Clase | Para qué sirve |
|--------|----------------|
| `shadow-sm`, `shadow-md`, `shadow-lg` | Elevación. |
| `shadow-zinc-200/60` | Sombra con opacidad. |
| `backdrop-blur-md` + `bg-white/90` | Navbar semitransparente y desenfoque. |
| `transition` + `hover:bg-*`, `hover:shadow-*`, `hover:-translate-y-0.5` | Interacción al hover. |
| `drop-shadow-sm` | Sombra ligera en emoji. |
| `opacity-50` | Icono más suave (lupa). |

---

## 9. Otros utilitarios

| Clase | Para qué sirve |
|--------|----------------|
| `aria-label`, `aria-hidden` | Accesibilidad. |
| `placeholder:text-zinc-400` | Color del placeholder. |
| `focus:outline-none focus:ring-0` | Quita anillo de foco por defecto en input. |
| `hover:text-violet-600` | Hover en enlaces. |
| `text-[clamp(5rem,18vw,9rem)]` | Tamaño fluido del emoji. |
| `sm:`, `md:`, `lg:`, `xl:` | Breakpoints responsive. |

---

## 10. `globals.css` y `layout.tsx`

| Fragmento | Para qué sirve |
|-----------|----------------|
| `@import 'tailwindcss'` | Carga Tailwind. |
| `@plugin "daisyui"` | Plugin DaisyUI. |
| `@theme { --color-pet-primary… }` | Variables CSS de marca. |
| `body { @apply bg-white text-zinc-900 }` | Base de fondo y texto. |
| `h-full` / `min-h-full` / `antialiased` | Alto y suavizado de fuentes en `html`/`body`. |
| Geist / Geist Mono | Fuentes Next (`next/font/google`). |

---

## 11. Resumen: `flex-col`

| Concepto | Explicación breve |
|----------|-------------------|
| `flex` | Contenedor flexbox. |
| `flex-col` | Dirección principal **vertical**: hijos uno debajo del otro. |
| Uso típico | Apilar secciones, columna de tarjeta, en móvil cantidad + botón de compra. |
| Alternativa | `flex-row` (por defecto en `flex`) = hijos en fila horizontal. |

---

## Cómo exportar este archivo

- **PDF**: abre este `.md` en VS Code / Cursor y usa una extensión “Markdown PDF”, o pégalo en Notion / Word y exporta a PDF.
- **HTML**: muchos visores Markdown permiten “Exportar HTML”.
- **CSV**: las tablas se pueden copiar a Excel / Google Sheets columna por columna, o convertir con herramientas online “Markdown table to CSV”.

**Ruta del archivo en el proyecto:** `docs/referencia-estilos-petfood.md`
