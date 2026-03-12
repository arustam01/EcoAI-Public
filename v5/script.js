document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  const dropdowns = document.querySelectorAll('.has-dropdown');
  const isMobile = () => window.innerWidth <= 980;

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  dropdowns.forEach((dropdown) => {
    let closeTimer;
    const trigger = dropdown.querySelector(':scope > a');

    const openDesktop = () => {
      if (isMobile()) return;
      clearTimeout(closeTimer);
      dropdown.classList.add('is-open');
    };

    const closeDesktop = () => {
      if (isMobile()) return;
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        dropdown.classList.remove('is-open');
      }, 220);
    };

    dropdown.addEventListener('mouseenter', openDesktop);
    dropdown.addEventListener('mouseleave', closeDesktop);

    if (trigger) {
      trigger.addEventListener('click', (event) => {
        if (!isMobile()) return;
        event.preventDefault();
        dropdown.classList.toggle('is-open');
      });
    }
  });
});
