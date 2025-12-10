
// script.js - interactions: nav active, form validation, faq accordion, contact fake submit
document.addEventListener('DOMContentLoaded', function(){
  // highlight active nav link based on body data-page
  const page = document.body.dataset.page;
  if(page){
    const a = document.querySelector('nav.primary a[data-page="'+page+'"]');
    if(a) a.classList.add('active');
    const f = document.querySelector('footer nav a[data-page="'+page+'"]');
    if(f) f.classList.add('active');
  }

  // FAQ accordion
  document.querySelectorAll('.accordion .q').forEach(q=>{
    q.addEventListener('click', ()=>{
      const acc = q.closest('.accordion');
      acc.classList.toggle('open');
    });
  });

  // Contact form simple validation and fake submit toast
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.querySelector('[name=name]').value.trim();
      const email = form.querySelector('[name=email]').value.trim();
      const message = form.querySelector('[name=message]').value.trim();
      if(!name || !email || !message){
        alert('Please fill out all fields before submitting.');
        return;
      }
      // lightweight email format check
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert('Enter a valid email address.');
        return;
      }
      // fake submit - show confirmation and clear form
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      setTimeout(()=>{
        btn.disabled = false;
        btn.textContent = 'Send Message';
        alert('Thanks! Your message was sent. We will reply with personalized trip suggestions within 48 hours.');
        form.reset();
      }, 900);
    });
  }

  // Gallery hover previews: show small tooltip from data-preview
  document.querySelectorAll('.dest-card').forEach(card=>{
    card.addEventListener('mouseenter', ()=>{
      const p = card.querySelector('.preview');
      if(p) p.style.opacity = '1';
    });
    card.addEventListener('mouseleave', ()=>{
      const p = card.querySelector('.preview');
      if(p) p.style.opacity = '0';
    });
  });
});
