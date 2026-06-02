/* ===========================
   ADOBE HOTEL FIAMBALÁ - SCRIPTS
   =========================== */

// Elementos del DOM
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
const mainContent = document.querySelector('main');

// Alternar menú lateral
menuToggle?.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    
    // Marcar enlace activo
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!sidebar?.contains(e.target) && !menuToggle?.contains(e.target)) {
    sidebar?.classList.remove('active');
  }
});

// Actualizar enlace activo según la página actual
function setActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', setActiveLink);

// Animación al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar todas las secciones y tarjetas
document.querySelectorAll('section, .room-card, .promo-card, .service-category, .about-card, .contact-item, .contact-card').forEach(el => {
  observer.observe(el);
});

// Suavidad en scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form removed: no client-side validation needed

// Efecto parallax en hero
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (hero.offsetHeight > scrolled) {
      hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
  });
}

// Animación de números (si es necesario)
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Interactividad de tarjetas
document.querySelectorAll('.room-card, .promo-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'all 0.4s ease';
  });
});

// Cerrar sidebar al redimensionar a pantalla grande
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    sidebar?.classList.remove('active');
  }
});

// Función para enviar WhatsApp
function sendWhatsApp(message) {
  const phoneNumber = '+5493835234567'; // Reemplazar con el número real
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// Función para enviar email
function sendEmail(email, subject) {
  const encodedSubject = encodeURIComponent(subject);
  window.location.href = `mailto:${email}?subject=${encodedSubject}`;
}

// Log de carga
console.log('🏨 Adobe Hotel Fiambalá - Sitio cargado correctamente');
