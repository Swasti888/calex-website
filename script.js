// Responsive nav toggle
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
if (hamburger){
  hamburger.addEventListener('click', ()=>{
    mainNav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if (href.length>1){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});
      // close mobile nav
      if (mainNav.classList.contains('open')) mainNav.classList.remove('open');
    }
  });
});

// simple on-scroll animation
const animated = document.querySelectorAll('[data-animate]');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if (e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
},{threshold:0.12});
animated.forEach(el=>obs.observe(el));

// contact form handling (fake)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (form){
  form.addEventListener('submit', async (ev)=>{
    ev.preventDefault();
    const data = new FormData(form);
    form.querySelector('button[type=submit]').disabled = true;
    formMsg.textContent = 'Sending...';
    // fake delay
    await new Promise(r=>setTimeout(r,900));
    formMsg.textContent = 'Thanks! We received your request — we will contact you soon.';
    form.reset();
    form.querySelector('button[type=submit]').disabled = false;
  });
}

// set year
document.getElementById('year').textContent = new Date().getFullYear();
