# Sitio — Dr. Ulises Torres Aguiñaga

**En línea:** https://www.drulisestorres.com
**Dirección visual:** Cristal · obra a sangre completa detrás de paneles de vidrio con refracción.

Proyecto **Astro** estático. Una sola página, sin SSR ni adaptador: el build produce `dist/`
y ese directorio se sube tal cual a Cloudflare Pages.

```bash
npm install
npm run dev       # desarrollo con recarga
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
npm run deploy    # build + wrangler pages deploy
```

## Estructura

```
src/
  data/
    sitio.ts        ← configuración: fondo, WhatsApp, correo, secciones
    contenido.ts    ← TODO el copy de las cinco secciones
  layouts/Base.astro    ← head, estilos, nav y el script de navegación
  pages/index.astro     ← compone las cinco secciones
  components/
    Fondo.astro         ← capa de obra; decide qué fondo se muestra
    FiltroCristal.astro ← filtro SVG de refracción
    Icono.astro         ← todos los iconos de línea, en un solo sitio
    Nav.astro · Hero.astro · Sobre.astro · Servicios.astro
    Confianza.astro · Contacto.astro
  styles/           ← nueve hojas, en el orden en que deben cargarse
public/
  img/              ← las dos obras de fondo
  robots.txt · _headers
```

**Dónde se cambia qué:** el copy en `src/data/contenido.ts`, los datos de contacto y el fondo en
`src/data/sitio.ts`. Ninguna de las dos cosas obliga a tocar markup.

El sistema de diseño —tokens, reglas del cristal, el contrato de contraste y por qué la
refracción se declara dos veces— está en [`docs/sistema-diseno.md`](docs/sistema-diseno.md).

## El fondo: dos obras, tres modos

Se controla con una sola constante en `src/data/sitio.ts`:

```ts
export const FONDO: 'atardecer' | 'tejido' | 'ambos' = 'ambos';
```

| Modo | Qué es | Efecto sobre el cristal |
|---|---|---|
| `atardecer` | Degradado de cielo (512 px, 3 KB) | Atmosférico y ligero, pero **sin contraste local**: la refracción casi no se percibe |
| `tejido` | Obra de tejido espejeado (1170 px, 165 KB) | Mucho contraste local, la refracción se lee muy bien; motivo más literal |
| `ambos` | El tejido sobre el atardecer, en `soft-light` al 55 % | El cielo pone color y atmósfera; el tejido, los bordes que el vidrio necesita |

`MEZCLA_TEJIDO` gradúa cuánto pesa el tejido en el modo `ambos`.

> **Por qué importa.** El filtro de refracción desvía los píxeles del fondo. Si el fondo es un
> degradado suave no hay bordes que desviar y el vidrio se ve como un desenfoque plano. Esa es la
> razón técnica de que `ambos` funcione mejor que `atardecer` solo.

## Qué es placeholder

| Qué | Dónde |
|---|---|
| Retrato profesional | `HERO.retrato` en `contenido.ts` + bloque `.foto` en `Hero.astro` (4:5, lado mayor ≥ 1600 px) |
| WhatsApp y correo | `CONTACTO` en `sitio.ts` |
| Cédulas, hospital, consultorio, horario, años de práctica | Campos con `pendiente: true` en `contenido.ts` |

Los pendientes se pintan en cursiva con subrayado punteado, **a propósito**: en un sitio que
enseña credenciales médicas, un dato inventado que parezca real es peor que un hueco visible.

## Contenido

El copy de las cinco secciones y las credenciales están **validados por el Dr. Torres**. Todo
vive en `src/data/contenido.ts`; la configuración —fondo, contacto, dirección del consultorio
y datos del Responsable del aviso— en `src/data/sitio.ts`.

## Aviso de privacidad

Va plegado en el pie, dentro de un `<details>`. El texto se adaptó de un aviso de otra consulta
médica: se cambió el Responsable, su domicilio y el correo para derechos ARCO, y se retiraron
las cláusulas de recabado de datos de menores, que no aplican a una práctica de ecocardiografía
de adultos.

> **Pendiente de revisión legal.** Falta el código postal del domicilio (`CONSULTORIO.cp`) y que
> un abogado o el propio Dr. Torres valide el alcance antes de darlo por bueno.

## Verificado en navegador

Build servido por HTTP, con emulación de dispositivo, a 320, 375, 768, 1000 y 1440 px.

| Aspecto | Estado |
|---|---|
| Desbordamiento horizontal | 0 px en todos los anchos |
| Menú | Cinco pestañas fijas, nunca se desliza |
| Áreas de toque | Todas ≥ 44 × 44 px |
| Indicador de sección | Sigue las cinco secciones al desplazarse y al hacer clic |
| Contraste | 22 pares AA, 0 fallas, medido contra imagen **negra** (peor caso) |
| Sin JavaScript | Anclas y CTA funcionan; solo se pierde el resaltado del indicador |
| Peso | 29 KB de HTML con el CSS embebido; 210 KB con las dos obras |

### Pendiente de comprobar en dispositivo

Safari en iOS no se puede probar desde aquí: quedan las zonas seguras del notch y si el
`backdrop-filter` parpadea al desplazarse, un defecto conocido de WebKit con capas fijas.
## Despliegue

Cloudflare Workers, proyecto `dr-ulises-torres-cardiologia` en la cuenta
`adminsolcre@gmail.com`, con dominio propio en **www.drulisestorres.com**. El despliegue se
dispara desde GitHub; `_headers` y `robots.txt` viajan desde `public/`.

| | Estado |
|---|---|
| Indexación | **Bloqueada** por `<meta robots>` (vía `META.indexable`), `robots.txt` y `X-Robots-Tag`. Quitarlo cuando el aviso de privacidad tenga visto bueno legal |
| Repositorio | Público. Lleva las cédulas reales del Dr. Torres, que de todos modos son registro público en la SEP |
