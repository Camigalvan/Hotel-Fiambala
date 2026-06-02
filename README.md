# 🏜️ Adobe Hotel Fiambalá - Sitio Web Profesional

Un sitio web moderno, responsive y elegante para Adobe Hotel Fiambalá. Diseñado con HTML5, CSS3 y JavaScript puro.

## 📋 Características Principales

✅ **Diseño Responsive** - Funciona perfectamente en PC, tablets y móviles
✅ **Menú Lateral Desplegable** - Navegación fija y accesible
✅ **Paleta de Colores Cálida** - Marrones, beiges, terraccota y tonos tierra
✅ **Animaciones Suaves** - Transiciones elegantes y efectos hover
✅ **Galería de Imágenes** - Fotos del hotel y Fiambalá
✅ **Formulario de Contacto** - Con validación básica
✅ **Integración Google Maps** - Ubicación del hotel
✅ **Enlaces a Redes Sociales** - WhatsApp, Instagram, Facebook, Email
✅ **SEO Optimizado** - Meta tags y estructura semántica
✅ **Footer Completo** - Con información de contacto y enlaces

## 📂 Estructura de Archivos

```
Hotel fiambala/
├── index.html              # Página principal
├── nosotros.html          # Información del hotel
├── contacto.html          # Formulario y contacto
├── css/
│   └── style.css          # Estilos principales
├── js/
│   └── script.js          # Scripts de interactividad
├── images/                # Carpeta para imágenes
├── assets/                # Recursos adicionales
└── README.md              # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Abrir en el Navegador
1. Localiza la carpeta `Hotel fiambala`
2. Haz doble clic en `index.html`
3. El sitio se abrirá en tu navegador predeterminado

### Opción 2: Con un Servidor Local
Para mejor experiencia de desarrollo:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx http-server

# Con Live Server (VS Code)
# Instala la extensión "Live Server" y abre con click derecho > Open with Live Server
```

Luego accede a: `http://localhost:8000`

## 🎨 Personalización

### Cambiar Colores
En `css/style.css`, busca la sección `:root` y modifica:

```css
:root {
  --primary-brown: #8B6F47;      /* Color principal */
  --secondary-brown: #A0826D;    /* Color secundario */
  --warm-beige: #F5E6D3;         /* Beige cálido */
  --terracotta: #C05E3C;         /* Terracota */
  --sand: #D4AF8D;               /* Arena */
  /* ... más colores ... */
}
```

### Actualizar Información de Contacto
En todos los archivos HTML, busca y reemplaza:
- `+54 (3835) 23-4567` - Teléfono
- `+54 (3835) 12-3456` - WhatsApp
- `info@adobehotelfiambala.com` - Email
- `Ruta Nacional 9, Fiambalá, Catamarca` - Dirección

### Cambiar Precios de Habitaciones
En `index.html`, busca la sección "Nuestras Habitaciones" y actualiza:

```html
<p class="room-price">$3.500 por noche</p>
```

### Agregar Imágenes Reales
1. Coloca tus imágenes en la carpeta `images/`
2. En los HTML, reemplaza los emojis y gradientes con:

```html
<div class="room-image" style="background-image: url('images/habitacion.jpg'); background-size: cover;"></div>
```

### Modificar Información de las Secciones
Todos los textos pueden ser editados directamente en los archivos HTML. Busca el contenido y modifica según necesites.

## 📞 Configurar Enlaces Reales

### WhatsApp
Reemplaza en todos los archivos:
```html
href="https://wa.me/5493835123456"
```
Con tu número real (sin símbolos, código de país incluido):
```html
href="https://wa.me/5493835123456"
```

### Email
Reemplaza:
```html
href="mailto:info@adobehotelfiambala.com"
```
Con tu email real.

### Google Maps
En `contacto.html`, actualiza el iframe del mapa:
1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu ubicación
3. Haz clic en "Compartir" → "Insertar mapa"
4. Copia el código y reemplaza el iframe existente

## 🔧 Características Técnicas

### JavaScript Incluido
- ✅ Toggle del menú lateral
- ✅ Links activos automáticos
- ✅ Animaciones al scroll
- ✅ Validación de formulario
- ✅ Efecto parallax en hero
- ✅ Cierre automático de menú al redimensionar

### CSS Avanzado
- ✅ Gradientes lineales
- ✅ Grid responsivo
- ✅ Flexbox
- ✅ Media queries
- ✅ Transiciones suaves
- ✅ Animaciones keyframe
- ✅ Variables CSS

### HTML Semántico
- ✅ Tags semánticos (section, nav, footer, main)
- ✅ Meta tags para SEO
- ✅ Atributos aria para accesibilidad
- ✅ Estructura WCAG compliant

## 📱 Responsividad

El sitio se adapta a:
- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🔐 Seguridad

- No hay bases de datos expuestas
- Validación básica de formularios
- Enlaces externos abren en nueva pestaña
- Protección CSRF en formularios (agregar si se conecta a backend)

## 💡 Mejoras Futuras Sugeridas

1. **Backend PHP/Node.js** - Para procesar el formulario de contacto
2. **Base de datos** - Para guardar reservas
3. **Sistema de reservas** - Integración con servicios como Booking
4. **Blog** - Para posts sobre Fiambalá
5. **Galería dinámica** - Con lightbox
6. **Reseñas de clientes** - Sistema de testimonios
7. **Chat en vivo** - Soporte en tiempo real
8. **Multiidioma** - Inglés y portugués

## 🐛 Solución de Problemas

**Q: El menú no aparece en móvil**
A: Asegúrate de que el archivo `js/script.js` esté cargado correctamente.

**Q: Las imágenes no cargan**
A: Verifica la ruta relativa de las imágenes en los HTML.

**Q: El formulario no funciona**
A: El formulario actual valida datos en el cliente. Para guardar datos, necesitas un backend.

**Q: El mapa no se ve**
A: Reemplaza el iframe con tu ubicación real de Google Maps.

## 📝 Licencia

Este código es de uso libre para Adobe Hotel Fiambalá. Siéntete libre de modificarlo según tus necesidades.

## 📧 Contacto para Soporte

Para cambios técnicos o mejoras, contacta:
- 📧 Email: info@adobehotelfiambala.com
- 💬 WhatsApp: +54 (3835) 12-3456

---

**Hecho con ❤️ para Adobe Hotel Fiambalá**
Fiambalá, Catamarca, Argentina
