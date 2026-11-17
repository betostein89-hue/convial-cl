# Despliegue Inmediato en Cloudflare Pages (*.pages.dev)

Esta guía te permite publicar el prototipo de **CONVIAL.CL** en **Cloudflare Pages** de manera gratuita e inmediata, obteniendo una URL pública (ejemplo: `https://convial-cl.pages.dev`) accesible desde cualquier navegador o teléfono celular, **sin necesidad de haber comprado el dominio todavía**.

---

## Método Recomendado: Conexión con GitHub / GitLab (100% Automático)

Este es el método estándar de la industria. Cada vez que actualices el código, Cloudflare lo compilará y actualizará solo.

### Paso 1: Subir el proyecto a GitHub
1. Si no lo has subido aún, crea un repositorio en [github.com](https://github.com/new) llamado `convial-cl`.
2. Sube los archivos de este proyecto al repositorio.

### Paso 2: Crear el proyecto en Cloudflare Pages
1. Entra a tu cuenta en [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. En el menú lateral izquierdo, haz clic en **Workers & Pages**.
3. Haz clic en el botón azul **Create application** (Crear aplicación).
4. Selecciona la pestaña **Pages** y haz clic en **Connect to Git** (Conectar a Git).
5. Selecciona tu cuenta de GitHub y elige el repositorio `convial-cl`.
6. Haz clic en **Begin setup** (Comenzar configuración).

### Paso 3: Configuración de Compilación (Build settings)
Rellena los campos con estos valores:
- **Project name:** `convial-cl` *(este nombre definirá tu URL: `https://convial-cl.pages.dev`)*.
- **Production branch:** `main` (o `master`).
- **Framework preset:** Selecciona **Next.js**.
- **Build command:** `npm run build`
- **Build output directory:** `.next`
- **Environment variables (Variables de entorno):**
  - Agrega una variable:
    - **Variable name:** `NODE_VERSION`
    - **Value:** `20`

### Paso 4: Publicar
1. Haz clic en **Save and Deploy** (Guardar y desplegar).
2. Cloudflare iniciará la compilación en sus servidores. Tardará aproximadamente 1 a 2 minutos.
3. ¡Listo! Al terminar verás el mensaje de felicitaciones y tu enlace activo:
   👉 **`https://convial-cl.pages.dev`**

---

## ¿Qué pasará cuando compres el dominio `convial.cl`?

¡No tendrás que volver a subir ni programar nada!
Simplemente:
1. En el mismo panel de tu proyecto en Cloudflare Pages, vas a la pestaña **Custom domains** (Dominios personalizados).
2. Haces clic en **Set up a custom domain**.
3. Escribes `convial.cl` y `www.convial.cl`.
4. Cloudflare se encargará de enlazarlo automáticamente con certificado SSL gratuito.
