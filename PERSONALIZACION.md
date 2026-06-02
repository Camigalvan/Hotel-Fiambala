# 🎨 Guía de Personalización - Adobe Hotel Fiambalá

Esta guía te ayudará a personalizar el sitio web con tus datos específicos de forma rápida y sencilla.

## 📝 Datos a Personalizar

### 1. Información de Contacto (CRÍTICO)

Los datos de contacto aparecen en múltiples lugares. Para actualizar todo de una vez:

**En los archivos HTML (index.html, nosotros.html, contacto.html):**

Reemplaza:
- `+54 (3835) 23-4567` → Tu teléfono
- `+54 (3835) 12-3456` → Tu WhatsApp
- `info@adobehotelfiambala.com` → Tu email
- `Ruta Nacional 9, Fiambalá, Catamarca` → Tu dirección

**En js/script.js:**
```javascript
const phoneNumber = '+5493835234567'; // Cambia aquí
```

### 2. Enlaces de WhatsApp

**Formato correcto:**
```
https://wa.me/5493835123456?text=Mensaje%20inicial
```

**Notas:**
- Usa el número SIN símbolos: +5493835123456 → 5493835123456
- El `%20` representa espacios en la URL
- El parámetro `text` es opcional

**Ejemplos:**
```html
<!-- Consulta general -->
<a href="https://wa.me/5493835123456?text=Hola%20quiero%20consultar%20sobre%20disponibilidad">

<!-- Reserva -->
<a href="https://wa.me/5493835123456?text=Quisiera%20hacer%20una%20reserva">
```

### 3. Precios de Habitaciones

**Ubicación:** `index.html`

Busca:
```html
<p class="room-price">$3.500 por noche</p>
```

Reemplaza con tus precios.

### 4. Servicios Incluidos

**Ubicación:** `index.html`

Busca la sección "Servicios Incluidos" y modifica la lista:

```html
<li>Tu servicio aquí</li>
```

### 5. Galería de Imágenes

**Opción A: Usar Emojis (Actual)**
Los emojis funcionan bien para mockups. Cada habitación tiene:
```html
<div class="room-image">🏔️</div>
```

**Opción B: Usar Imágenes Reales**

1. Coloca tus imágenes en `images/` (ej: `images/habitacion-1.jpg`)

2. En HTML, reemplaza:
```html
<div class="room-image">🏔️</div>
```

Con:
```html
<div class="room-image" style="background-image: url('images/habitacion-1.jpg'); background-size: cover; background-position: center;"></div>
```

### 6. Google Maps

**En contacto.html, busca el iframe:**

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu ubicación exacta
3. Haz clic en "Compartir" (ícono compartir)
4. Selecciona "Insertar mapa"
5. Copia el código del iframe
6. Reemplaza el iframe existente

**Ejemplo esperado:**
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12..." 
        allowfullscreen="" loading="lazy"></iframe>
```

### 7. Meta Tags para SEO

**En todos los HTML (en la sección `<head>`):**

```html
<meta name="description" content="Actualiza esta descripción">
<meta name="keywords" content="hotel, Fiambalá, Catamarca">
<meta name="author" content="Tu nombre">
<title>Tu título aquí</title>
```

### 8. Colores (Tema Visual)

**En css/style.css, línea 1-18:**

```css
:root {
  --primary-brown: #8B6F47;      /* Color principal */
  --secondary-brown: #A0826D;    /* Color secundario */
  --warm-beige: #F5E6D3;         /* Fondo cálido */
  --terracotta: #C05E3C;         /* Botones */
  --sand: #D4AF8D;               /* Acentos */
  /* ... */
}
```

**Herramientas para elegir colores:**
- [Coolors.co](https://coolors.co)
- [Color-hex.com](https://www.color-hex.com)
- [Adobe Color](https://color.adobe.com)

## 🔄 Cambios Rápidos (Find & Replace)

**En tu editor (VS Code):**

1. Presiona `Ctrl + H` (o `Cmd + H` en Mac)
2. Campo "Find": texto a buscar
3. Campo "Replace": texto nuevo
4. Haz clic "Replace All"

**Reemplazos recomendados:**

| Buscar | Reemplazar |
|--------|-----------|
| `+54 (3835) 23-4567` | Tu teléfono |
| `+54 (3835) 12-3456` | Tu WhatsApp |
| `5493835123456` | Tu WhatsApp (sin símbolos) |
| `info@adobehotelfiambala.com` | Tu email |
| `adobehotelfiambala` | Tu nombre (redes) |
| `2024` | Año actual |

## 📸 Cómo Agregar Imágenes

### Estructura correcta:
```
Hotel fiambala/
├── images/
│   ├── hero.jpg              (imagen principal)
│   ├── habitacion-1.jpg
│   ├── habitacion-2.jpg
│   ├── habitacion-3.jpg
│   ├── fiambala-1.jpg
│   ├── fiambala-2.jpg
│   └── ...
```

### En el código HTML:
```html
<img src="images/habitacion-1.jpg" alt="Habitación Standard">
```

### Atributos importantes:
- `src`: ruta de la imagen
- `alt`: texto alternativo (para SEO y accesibilidad)
- `title`: tooltip al pasar el mouse

## 🎯 Cambios Comunes

### Cambiar el logo
**Ubicación:** Línea del `<h1>` en el sidebar

Actual:
```html
<h1>🏜️ Adobe Hotel</h1>
```

Opciones:
```html
<h1>🏨 Adobe Hotel</h1>
<h1>🏩 Adobe Hotel</h1>
<h1>Adobe Hotel 🏜️</h1>
```

### Cambiar eslogans
Busca y reemplaza:
- En hero: "Descansá entre montañas..."
- En footer: "Hecho con ❤️ en Catamarca"

### Agregar nueva sección
1. Copia una sección existente
2. Cambia el `id` (ej: `id="nuevaseccion"`)
3. Modifica el contenido
4. Agrega el enlace en el menú

```html
<li><a href="#nuevaseccion">Nueva Sección</a></li>
```

## ✅ Checklist de Personalización

- [ ] Teléfono actualizado en todos lados
- [ ] Email correcto
- [ ] WhatsApp con número correcto
- [ ] Dirección actualizada
- [ ] Precios de habitaciones
- [ ] Google Maps con ubicación correcta
- [ ] Redes sociales vinculadas
- [ ] Meta tags para SEO
- [ ] Imágenes reales (opcional pero recomendado)
- [ ] Colores personalizados (opcional)
- [ ] Servicios actualizados
- [ ] Horarios correctos

## 🔗 Cómo Vincular Redes Sociales

### Instagram
```html
<a href="https://instagram.com/tunombre" target="_blank">
```

### Facebook
```html
<a href="https://facebook.com/tunombre" target="_blank">
```

### WhatsApp
```html
<a href="https://wa.me/5493835123456" target="_blank">
```

### Email
```html
<a href="mailto:tu@email.com" target="_blank">
```

## 🐛 Verificación Post-Cambios

Después de personalizar:

1. **Abre en navegador** - ¿Se ve bien?
2. **Prueba en móvil** - ¿Es responsive?
3. **Prueba los enlaces** - ¿Funcionan WhatsApp, email, etc.?
4. **Verifica el formulario** - ¿Valida correctamente?
5. **Comprueba el menú** - ¿El toggle funciona en móvil?
6. **Revisa las transiciones** - ¿Las animaciones se ven suave?

## 📱 Testing Responsivo

**Con Chrome DevTools:**
1. Presiona `F12` o `Ctrl + Shift + I`
2. Haz clic en el ícono de dispositivo
3. Prueba en: 320px (móvil), 768px (tablet), 1024px+ (desktop)

## 🚀 Publicación en Internet

Cuando estés listo para publicar:

1. **Comprimir archivos**
   ```bash
   # En Windows (PowerShell)
   Compress-Archive -Path "Hotel fiambala" -DestinationPath "Hotel_fiambala.zip"
   ```

2. **Subir a un hosting:**
   - [Netlify](https://netlify.com) - Gratis
   - [Vercel](https://vercel.com) - Gratis
   - [GitHub Pages](https://pages.github.com) - Gratis
   - [000webhost](https://www.000webhost.com) - Gratis
   - Cualquier hosting con FTP

3. **Dominio personalizado:**
   - GoDaddy, Namecheap, Google Domains

## 📧 Soporte

Si necesitas ayuda:
- Revisa el `README.md`
- Consulta comentarios en el código
- Busca tutoriales de HTML/CSS en línea

---

**¡Éxito con tu sitio web! 🎉**
