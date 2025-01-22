// Toggle Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
          const mobileMenu = document.getElementById('mobile-menu');
      
          menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
          });

// Toggle Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark');
});