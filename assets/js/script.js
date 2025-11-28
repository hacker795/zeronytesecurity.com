document.addEventListener('DOMContentLoaded', () => {

  // --------------------------
  // --------------------------
  const y = new Date().getFullYear();
  ['year', 'year2', 'year3', 'year4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });

  // --------------------------
  // --------------------------
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you — this form is for display only. Integrate Formspree or Netlify Forms to receive messages.');
      form.reset();
    });
  }

  // --------------------------
  // HAMBURGER MENU
  // --------------------------
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("open");   // animate hamburger
      mobileMenu.classList.toggle("active");   // <-- IMPORTANT FIX
    });
  }

  // Close menu when clicking any link
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      hamburgerBtn.classList.remove("open");
    });
  });

});
