document.getElementById('year').textContent = new Date().getFullYear();

// Acessibilidade: fechar/abrir FAQ com teclado já é suportado por <details>
// Smooth scroll para âncoras
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