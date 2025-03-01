document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 500);
  });
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active');
    });
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.remove('active');
          if(link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.25 });
  document.querySelectorAll('section').forEach(section => observer.observe(section));
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = form.querySelector('.form-button');
    button.disabled = true;
    button.innerHTML = 'Enviando...';
    setTimeout(() => {
      button.disabled = false;
      button.innerHTML = 'Mensaje Enviado ✓';
      form.reset();
      setTimeout(() => button.innerHTML = 'Enviar Mensaje', 3000);
    }, 2000);
  });
  document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Miguel Tejeda. Todos los derechos reservados.`;
});
