const nav=document.getElementById('nav'),progress=document.getElementById('progress'),menu=document.getElementById('menu');
addEventListener('scroll',()=>{const y=scrollY;nav.classList.toggle('scrolled',y>20);const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h?y/h*100:0)+'%'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
menu?.addEventListener('click',()=>{const navlinks=document.querySelector('.nav nav');if(!navlinks)return;navlinks.style.display=navlinks.style.display==='flex'?'none':'flex';navlinks.style.position='absolute';navlinks.style.top='76px';navlinks.style.left='0';navlinks.style.right='0';navlinks.style.padding='20px';navlinks.style.background='#0b0d12';navlinks.style.flexDirection='column'});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
const translations={en:{features:'Features',demo:'Demo',changelog:'Changelog',roadmap:'Roadmap'},fr:{features:'Fonctionnalités',demo:'Démo',changelog:'Changelog',roadmap:'Roadmap'}};
const langBtn=document.getElementById('langBtn'),langMenu=document.getElementById('langMenu');
function setLanguage(lang){localStorage.setItem('mflow-lang',lang);document.documentElement.lang=lang;langBtn.textContent=lang.toUpperCase()+' ▾';const t=translations[lang];const links=document.querySelectorAll('.nav nav a');if(links.length>=5){links[0].textContent=t.features;links[1].textContent=t.demo;links[2].textContent=t.changelog;links[3].textContent=t.roadmap}langMenu.classList.remove('open')}
langBtn?.addEventListener('click',()=>langMenu.classList.toggle('open'));
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
setLanguage(localStorage.getItem('mflow-lang')||'en');
