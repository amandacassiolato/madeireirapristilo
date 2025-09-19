// Efeito de menu fixo com fundo ao rolar
window.addEventListener('scroll', function() {
  const topbar = document.querySelector('.topbar');
  if(window.scrollY > 30) {
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
    dotsWrap.children[i]?.classList.remove('active');
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('is-active');
    dotsWrap.children[i]?.classList.add('active');
  }

  function next(){ go(i+1); }
  function prev(){ go(i-1); }

  // Build dots
  slides.forEach((_, idx) => {
    const b = document.createElement('button');
    if (idx === 0) b.classList.add('active');
    b.addEventListener('click', () => { go(idx); resetAuto(); });
    dotsWrap.appendChild(b);
  });

  function resetAuto(){ clearInterval(timer); timer = setInterval(next, 5000); }
  resetAuto();

  document.querySelector('.hero-carousel .next').addEventListener('click', () => { next(); resetAuto(); });
  document.querySelector('.hero-carousel .prev').addEventListener('click', () => { prev(); resetAuto(); });

  const carousel = document.querySelector('.hero-carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', resetAuto);
});