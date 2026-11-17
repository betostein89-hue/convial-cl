# Guía de Enlace de convial.cl a Cloudflare

Esta guía describe los pasos necesarios para conectar el dominio chileno **convial.cl** a Cloudflare y desplegar el prototipo del **Sistema de Convivencia Vial de Chile**.

---

## 1. Estado de Depuración del Proyecto

- **Pruebas unitarias:** 22 de 22 superadas (`scripts/test-suite.ts`).
- **Compilación de producción:** Next.js 14 compilado exitosamente sin errores (`✓ Compiled successfully`).
- **Seguridad HTTP:** Cabeceras agregadas (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
- **Recursos públicos:** Icono institucional SVG generado en `public/icon.svg` y reglas de borde en `public/_headers`.
- **SEO & Sitemaps:** `sitemap.xml` y `robots.txt` habilitados con canonical hacia `https://convial.cl`.

---

## 2. Paso 1: Agregar convial.cl en Cloudflare

1. Inicia sesión en tu cuenta de [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Haz clic en **"Add a site"** (Agregar un sitio).
3. Ingresa `convial.cl` y selecciona el plan **Free** (Gratuito).
4. Cloudflare escaneará los registros DNS existentes. Haz clic en **Continuar**.
5. Cloudflare te asignará dos servidores de nombres (**Nameservers**), por ejemplo:
   - `aria.ns.cloudflare.com`
   - `noah.ns.cloudflare.com`
   *(Copia estos dos nombres exactos que te proporcione tu cuenta).*

---

## 3. Paso 2: Delegar los Nameservers en NIC Chile (nic.cl)

Para que Cloudflare tome el control del dominio `.cl`:

1. Ingresa a [nic.cl](https://www.nic.cl/) con tu ClaveÚnica o cuenta de usuario.
2. En la lista de dominios, haz clic sobre **convial.cl**.
3. Baja hasta la sección **"Servidores de Nombre (DNS)"**.
4. Elimina los servidores DNS actuales y agrega los dos asignados por Cloudflare:
   - **Nombre de servidor 1:** `ejemplo1.ns.cloudflare.com`
   - **Nombre de servidor 2:** `ejemplo2.ns.cloudflare.com`
   *(Deja el campo de dirección IP en blanco; NIC Chile lo resuelve automáticamente).*
5. Haz clic en **"Actualizar dominio"**.

> **Nota de propagación:** La delegación en NIC Chile suele tardar entre 15 minutos y un par de horas en propagarse a nivel mundial.

---

## 4. Paso 3: Desplegar el Prototipo

### Opción Recomendada A: Cloudflare Pages (Directo en Cloudflare)
1. En el panel de Cloudflare, ve a **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Conecta tu repositorio de GitHub / GitLab donde esté subido este proyecto.
3. En la configuración de compilación (**Build settings**):
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Node.js version:** `20.x` o superior (en variables de entorno: `NODE_VERSION` = `20`).
4. Haz clic en **Save and Deploy**.
5. Una vez compilado, ve a la pestaña **Custom domains** del proyecto en Cloudflare Pages, haz clic en **Set up a custom domain** e ingresa:
   - `convial.cl`
   - `www.convial.cl`
6. Cloudflare configurará automáticamente los registros DNS y emitirá el certificado SSL universal.

---

### Opción B: Alojamiento en Vercel con DNS y Protección de Cloudflare
Si prefieres usar Vercel (el proyecto ya cuenta con `vercel.json` con soporte para cron jobs):
1. Importa el proyecto en [Vercel](https://vercel.com/).
2. En los ajustes de dominio en Vercel, agrega `convial.cl`.
3. Vercel te indicará el registro CNAME o A (ejemplo: `cname.vercel-dns.com`).
4. En el panel de **Cloudflare DNS**, agrega:
   - **Tipo:** `CNAME`
   - **Nombre:** `@` (o `convial.cl`)
   - **Destino:** `cname.vercel-dns.com`
   - **Proxy status:** **Proxied** (Nube naranja activada para protección DDoS y CDN)
   - Agrega otro `CNAME` para `www` hacia `cname.vercel-dns.com`.

---

## 5. Paso 4: Ajustes Críticos de SSL/TLS en Cloudflare

En el panel de Cloudflare bajo **SSL/TLS**:
1. Configura el modo de cifrado en **Full** (o **Full (strict)** si el backend tiene SSL).
2. En **Edge Certificates**:
   - Activa **Always Use HTTPS** (Siempre usar HTTPS).
   - Activa **Automatic HTTPS Rewrites**.
   - Activa **Minimum TLS Version:** 1.2 o 1.3.

¡Listo! Con estos pasos, cualquier visitante que acceda a **https://convial.cl** verá inmediatamente el prototipo de CONVIAL.CL con máxima velocidad y seguridad.
