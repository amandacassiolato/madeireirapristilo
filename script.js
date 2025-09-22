// Menu mobile: abrir/fechar submenu ao clicar no ícone
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  // Exibe o botão hamburger apenas no mobile
  function updateMenuToggleDisplay() {
    if (window.innerWidth <= 780) {
      if (toggle) toggle.style.display = 'flex';
    } else {
      if (toggle) toggle.style.display = 'none';
      if (mobileMenu) mobileMenu.classList.remove('open');
    }
  }
  window.addEventListener('resize', updateMenuToggleDisplay);
  updateMenuToggleDisplay();
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Fecha o menu ao clicar em um link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
// Efeito de menu fixo com fundo ao rolar e animação de altura
window.addEventListener('scroll', function() {
  const topbar = document.querySelector('.topbar');
  if(window.scrollY > 40) {
    topbar.classList.add('scrolled');
  } else {
    topbar.classList.remove('scrolled');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id && id.startsWith('#')) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, '', id);
        }
      }
    });
  });

  // Carousel
  const slides = Array.from(document.querySelectorAll('.hero-carousel .slide'));
  const dotsWrap = document.querySelector('.hero-carousel .dots');
  let i = 0; let timer;

  function go(n){
    slides[i].classList.remove('is-active');
    if (dotsWrap.children[i]) {
      dotsWrap.children[i].classList.remove('active');
      dotsWrap.children[i].setAttribute('aria-selected', 'false');
      dotsWrap.children[i].setAttribute('tabindex', '-1');
    }
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('is-active');
    if (dotsWrap.children[i]) {
      dotsWrap.children[i].classList.add('active');
      dotsWrap.children[i].setAttribute('aria-selected', 'true');
      dotsWrap.children[i].setAttribute('tabindex', '0');
      dotsWrap.children[i].focus({ preventScroll: true });
    }
  }

  function next(){ go(i+1); }
  function prev(){ go(i-1); }

  // Build dots with ARIA
  if (dotsWrap) {
    dotsWrap.setAttribute('role', 'tablist');
    dotsWrap.setAttribute('aria-label', 'Indicadores de slides');
    slides.forEach((slideEl, idx) => {
      const b = document.createElement('button');
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', `Slide ${idx+1}`);
      const slideId = slideEl.id || `slide-${idx+1}`;
      slideEl.id = slideId;
      b.setAttribute('aria-controls', slideId);
      if (idx === 0) {
        b.classList.add('active');
        b.setAttribute('aria-selected', 'true');
        b.setAttribute('tabindex', '0');
      } else {
        b.setAttribute('aria-selected', 'false');
        b.setAttribute('tabindex', '-1');
      }
      b.addEventListener('click', () => { go(idx); resetAuto(); });
      b.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(idx); resetAuto(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); next(); resetAuto(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); resetAuto(); }
      });
      dotsWrap.appendChild(b);
    });
  }

  function resetAuto(){ clearInterval(timer); timer = setInterval(next, 5000); }
  resetAuto();

  document.querySelector('.hero-carousel .next').addEventListener('click', () => { next(); resetAuto(); });
  document.querySelector('.hero-carousel .prev').addEventListener('click', () => { prev(); resetAuto(); });

  const carousel = document.querySelector('.hero-carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', resetAuto);
});