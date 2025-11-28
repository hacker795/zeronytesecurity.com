// small helper: set year and handle contact form locally
document.addEventListener('DOMContentLoaded', ()=> {
  const y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Thank you — this form is front-end only. You can integrate Formspree or Netlify Forms later to receive messages.');
      form.reset();
    });
  }
});
