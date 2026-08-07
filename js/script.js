// Only job: toggle the mobile nav open/closed. Same script on every page.
document.getElementById('nav-burger')?.addEventListener('click', function () {
  const nav = document.getElementById('main-nav');
  const isOpen = nav.classList.toggle('is-open');
  this.setAttribute('aria-expanded', String(isOpen));
});
