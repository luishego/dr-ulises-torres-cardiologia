# Sistema de diseño — Dr. Ulises Torres Aguiñaga

Dirección única: **Cristal**. El Dr. Torres la eligió el 2026-09-05 entre las tres que se
construyeron para la sesión de validación; las otras dos se retiraron del código.

> Historial: el MVP tuvo un switcher de tres fusiones (Consistencia total, Apertura con autoridad
> y Cristal) y dos modos de recorrido (lateral y vertical). Ambos eran andamiaje para decidir.
> Tomada la decisión, se retiraron: hoy hay un solo set de tokens sin atributo de tema, y el
> recorrido es vertical en todos los tamaños.

## Colores de marca

| Token | Valor | Origen |
|---|---|---|
| navy | `#494769` | Recetario del Dr. Torres |
| vino | `#9B1643` | Recetario del Dr. Torres |

La obra de fondo va a sangre completa, así que **el color dominante de la pantalla lo pone la
imagen**. El navy sostiene titulares y texto; el vino encabeza los eyebrows y marca el CTA.
Fue una consecuencia asumida al elegir esta dirección, no un descuido.

## Tokens principales

| Token | Valor | Rol |
|---|---|---|
| `--bg` | `#F1EDEE` | Fondo, afinado con el de la obra |
| `--surface` | `rgba(255,255,255,.55)` | Superficie de componente |
| `--inner-bg` | `rgba(255,255,255,.78)` | Panel de cristal contenedor |
| `--ink` / `--ink-2` | `#232238` / `#4B4964` | Texto principal / secundario |
| `--title-color` | navy | H1 y H2 |
| `--eyebrow-color` | vino | Eyebrows |
| `--font-display` / `--font-body` | Inter 300 / Inter | Display ligero a tamaño grande |
| `--r-card` / `--r-btn` | 24px / pill | Radios |
| `--glass` | `blur(14px) saturate(180%)` | Cristal de componente |
| `--inner-blur` | `blur(30px) saturate(175%)` | Cristal contenedor |

## Reglas del cristal

1. **El texto nunca toca la imagen.** Siempre media una capa de vidrio. Es lo que vuelve
   determinista el contraste sobre una imagen de color variable.
2. **Opacidad mínima garantizada: 78 %** en el panel contenedor, **82 %** en la nav, que flota
   sobre la obra sin panel intermedio. Estos dos números son el contrato de accesibilidad, no una
   preferencia estética: bajarlos rompe AA.
3. **El blur hace el trabajo visual**, no la transparencia.
4. **Un velo de 6 % blanco** sobre la obra evita que los rojos saturados peleen con el vidrio.
5. **El reflejo interior superior** (`inset 0 1px 0 #ffffff5c`) vive en el token de sombra, para
   que sobreviva a `hover` y `active`.

## El fondo

Hay dos obras y tres modos, conmutables desde `src/data/sitio.ts`:

| Modo | Qué es | Efecto sobre el cristal |
|---|---|---|
| `atardecer` | Degradado de cielo | Atmosférico, pero sin contraste local: la refracción casi no se percibe |
| `tejido` | Tejido espejeado | Mucho contraste local; motivo más literal |
| `ambos` | Tejido sobre el cielo, `soft-light` al 55 % | El cielo pone color; el tejido, los bordes que el vidrio necesita |

No es una preferencia estética: el filtro desvía píxeles del fondo, así que un degradado sin
bordes deja al vidrio sin nada que refractar. Por eso `ambos` es también la respuesta técnica.

## Refracción

Un filtro SVG (`feTurbulence` → `feGaussianBlur` → `feDisplacementMap`) desvía los píxeles del
fondo, de modo que el vidrio refracte en vez de solo desenfocar. Se declara **dos veces, con
valores literales y sin `var()`**:

```css
backdrop-filter: blur(14px) saturate(180%);          /* base universal */
backdrop-filter: url(#lg) blur(6px) saturate(180%);  /* mejora */
```

Chrome admite `url()` en `backdrop-filter`; Safari con el prefijo `-webkit-` no. Al ser literales,
el navegador que no lo entienda descarta la segunda y conserva la primera. Con `var()` fallaría:
una `var()` inválida anula la propiedad entera en lugar de caer a la declaración anterior.

Va en el **panel contenedor** además de en las tarjetas: las tarjetas están sobre el panel, que ya
es 78 % blanco, y desviar una superficie casi plana no produce efecto visible.

> **Límite físico.** Más refracción exige más transparencia, y la transparencia es justo lo que
> sostiene el contraste. El 78 % es el techo del efecto.

## Arquitectura CSS: mobile primero

La base es el teléfono y cada media query **añade**. No queda ninguna `max-width` en el archivo.

| Corte | Qué añade |
|---|---|
| base | Una columna, barra de pestañas con iconos, toques de 44 px, zonas seguras |
| `min-width: 768px` | Más aire vertical, rejillas a dos columnas, nav de solo texto |
| `min-width: 1000px` | Hero, Sobre y Contacto a dos columnas; servicios a tres |
| `min-width: 1200px` | Las cuatro credenciales en una fila |
| `min-width: 768px` + `max-height: 820px` | Compacta el ritmo vertical en portátiles bajos |

## Navegación

Recorrido **vertical en todos los tamaños**, con el scroll nativo del navegador. El JavaScript
solo sincroniza el indicador y atiende los saltos por clic; sin él, los enlaces siguen funcionando
como anclas y los CTA como enlaces normales.

El menú es una barra de **cinco columnas fijas que nunca se desliza**. En móvil cada sección lleva
icono y etiqueta corta (Inicio · Perfil · Servicios · Confianza · Agendar), porque las etiquetas
completas no caben a 320 px; el nombre completo va en `aria-label` y reaparece como texto a partir
de 768 px.

> **Nota.** El indicador de sección se calcula a mano en un listener de `scroll`, no con
> `IntersectionObserver`: una sección más alta que la pantalla nunca llega a ser visible al 50 %
> de sí misma, así que un `threshold` lo deja atrás.

## Contraste verificado (WCAG AA)

21 pares de texto/fondo medidos en el navegador, componiendo por alfa todas las capas
translúcidas **sobre una imagen negra** —el peor caso absoluto—. 0 fallas; el par más bajo es el
eyebrow con 4.96.

Contra la obra real el margen es mayor: su píxel más oscuro es `rgb(93,3,6)` y a través del vidrio
da 5.65 en titulares, 5.54 en texto y 5.21 en eyebrows.

El CTA primario mide 8.11:1 (blanco sobre vino), independiente del fondo.
