document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.has-dropdown');

  dropdowns.forEach((dropdown) => {
    let closeTimer;

    const openMenu = () => {
      clearTimeout(closeTimer);
      dropdown.classList.add('is-open');
    };

    const closeMenu = () => {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => {
        dropdown.classList.remove('is-open');
      }, 220);
    };

    dropdown.addEventListener('mouseenter', openMenu);
    dropdown.addEventListener('mouseleave', closeMenu);
    dropdown.addEventListener('focusin', openMenu);
    dropdown.addEventListener('focusout', closeMenu);
  });
});
