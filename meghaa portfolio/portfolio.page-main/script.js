// ===== ScrollReveal Animations =====
ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    reset: false
  });
  
  // Home Section Animations
  ScrollReveal().reveal('.home-content', { origin: 'left' });
  ScrollReveal().reveal('.home-image', { origin: 'right' });
  
  // Portfolio Section Animations
  ScrollReveal().reveal('.portfolio-title', { origin: 'top' });
  ScrollReveal().reveal('.portfolio-card', { origin: 'bottom', interval: 200 });
  
  // About Section Animations
  ScrollReveal().reveal('.about-image', { origin: 'left' });
  ScrollReveal().reveal('.about-content', { origin: 'right' });
  
  // Projects Section Animations
  ScrollReveal().reveal('.projects-title', { origin: 'top' });
  ScrollReveal().reveal('.project-card', { origin: 'bottom', interval: 150 });
  
  // Contact Section Animations
  ScrollReveal().reveal('.contact-title', { origin: 'top' });
  ScrollReveal().reveal('.contact-content', { origin: 'bottom', interval: 200 });
  
  // ===== Optional: Smooth Scroll for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  