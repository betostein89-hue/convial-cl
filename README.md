# CONVIAL.CL — Sistema de Convivencia Vial de Chile
> *"Conducir también es convivir"*

Iniciativa privada chilena de innovación cívica y tecnología orientada a la generación de información estadística y fomento de la cultura de convivencia vial, con aspiración de colaboración gubernamental.

---

## 1. Identidad y Principios Fundamentales

- **Naturaleza del Proyecto:** Plataforma ciudadana privada independiente.
- **Límites Institucionales:**
  - **No** constituye un organismo del Estado ni un servicio de emergencias policiales.
  - Las observaciones **no** constituyen infracciones de tránsito acreditadas ni denuncias penales/judiciales.
  - **No** publica acusaciones individuales ni historiales públicos de matrículas.
  - **No** permite el hostigamiento, la persecución ni la individualización de conductores.
  - **Seguridad vial ante todo:** Prohibición estricta de manipular teléfonos móviles durante la conducción (Ley No Chat / Ley 21.377) o realizar maniobras temerarias para registrar antecedentes.

---

## 2. Cumplimiento Normativo y Privacidad de Datos

- **Tratamiento de la Placa Patente:** Considerada como un **dato personal indirecto**.
- **Ley N° 19.628** sobre Protección de la Vida Privada.
- **Preparación técnica para la Ley N° 21.719** (vigencia desde el 1 de diciembre de 2026):
  1. **Minimización de datos:** Recopilación acotada al hecho vial.
  2. **Enmascaramiento preventivo:** Vistas ciudadanas con enmascaramiento parcial (`ABCD12` &rarr; `AB••12`).
  3. **Disociación irreversible:** Separación criptográfica entre la matrícula y las matrices estadísticas analíticas.
  4. **Protección Anti-Scraping / Anti-Búsquedas Masivas:** No existe consulta inversa por patente; solo consulta individual por código de seguimiento.
  5. **Mecanismo de Rectificación y Reclamación:** Derecho de oposición y supresión ante errores manifiestos.

---

## 3. Flujo Operativo del Sistema (v1.0)

La plataforma cuenta con un flujo completo de 4 pasos de registro y un módulo de consulta de estados:

1. **Paso 1: Identificación de matrícula y conducta**
   - Matrícula precargada de demostración: `ABCD12`.
   - Conducta principal: `Conducción agresiva` (editable).
   - Placa patente gráfica chilena estandarizada.
2. **Paso 2: Detalle del comportamiento**
   - Subcategorías dinámicas según conducta seleccionada.
   - Fecha y hora aproximadas.
   - Región y comuna.
   - Descripción objetiva (opcional; en la demo inicia vacía conforme a los requisitos).
   - Existencia y adjunto de evidencia demostrativa (cifrado local simulado).
   - Declaraciones obligatorias de veracidad y seguridad vial.
3. **Paso 3 (Principal): "Revisa tu observación antes de enviarla"**
   - **Tarjeta de Resumen Institucional:** Matrícula, Conducta, Subcategoría, Fecha/Hora, Región/Comuna, Descripción (indicando *"No informado"* si está vacía, sin inventar datos), Evidencia adjunta (*"No informado / Sin evidencia"* si no aplica).
   - **Aviso de Privacidad (Ley 19.628 / 21.719)**.
   - **Declaración Institucional:** El reporte es una observación ciudadana y NO una infracción acreditada.
   - **Advertencia Legal:** Prohibición de uso de información falsa, amenazas o acusaciones personales.
   - **Confirmación Expresa (Checkbox obligatorio)**.
   - Botón **"Editar información"** (conserva intactos todos los datos).
   - Botón principal **"Confirmar y enviar observación"** con prevención de dobles envíos y spinner de carga.
4. **Paso 4: Confirmación y Recepción**
   - Título: *"Tu observación ha sido recibida"*.
   - Texto institucional oficial de agradecimiento e ingreso al sistema.
   - Código de seguimiento de demostración generado (ej. `CNV-2026-894172`) con opción de copiado en 1 clic.
   - Fecha de recepción registrada.
   - Estado: `RECIBIDO`.
   - Conducta reportada y matrícula enmascarada (`AB••12`).
   - Aclaración expresa de que no se ha cursado ninguna denuncia oficial ni sanción legal.
   - Botón **"Volver al inicio"**.
   - Botón **"Consultar estado"**.
5. **Paso 5: Catálogo y Visualizador de Estados del Reporte**
   - Estados representados visualmente:
     1. `RECIBIDO`
     2. `EN_REVISION`
     3. `REQUIERE_ANTECEDENTES`
     4. `VALIDADO_ESTADISTICA`
     5. `CERRADO`
     6. `RECHAZADO` (por incumplimiento de las reglas de uso).
   - Advertencia de que la revisión de CONVIAL no equivale a una constatación oficial de infracción.
   - Explicación de la arquitectura de ciberseguridad, tokenización y gobernanza.

---

## 4. Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript 5 (Strict Mode)
- **Estilos:** Tailwind CSS con la paleta de identidad CONVIAL:
  - Azul marino: `#10243A`
  - Turquesa: `#13A6A0`
  - Gris claro: `#F3F6F8`
  - Ámbar: `#F0A43A`
  - Blanco: `#FFFFFF`
- **Iconos:** Lucide React
- **Arquitectura:** Mobile-first, componentes desacoplados, accesible y semántica GovTech.

---

## 5. Comandos de Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar suite de pruebas unitarias
npm test

# Compilar para producción
npm run build

# Iniciar servidor de desarrollo
npm run dev
```
