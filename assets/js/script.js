/* Menu e efeitos compartilhados. Funciona também abrindo os arquivos diretamente. */
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');}
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
menu.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape' && menu.classList.contains('open')){closeMenu();menuButton.focus();}});
window.addEventListener('resize',()=>{if(window.innerWidth>760)closeMenu();});
if(window.lucide)lucide.createIcons();
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver' in window && !reducedMotion){
  document.documentElement.classList.add('motion-ready');
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08});
  document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));
}
function animateNumber(element){
  const value=Number(element.dataset.count),suffix=element.dataset.suffix||'',decimals=Number(element.dataset.decimals||0);
  const format=number=>number.toLocaleString('pt-BR',{minimumFractionDigits:decimals,maximumFractionDigits:decimals})+suffix;
  if(reducedMotion){element.textContent=format(value);return;}
  const start=performance.now();
  function frame(now){const progress=Math.min((now-start)/1100,1);element.textContent=format(value*(1-Math.pow(1-progress,3)));if(progress<1)requestAnimationFrame(frame);}
  requestAnimationFrame(frame);
}
if('IntersectionObserver' in window){const counters=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){animateNumber(entry.target);counters.unobserve(entry.target);}}),{threshold:.5});document.querySelectorAll('[data-count]').forEach(element=>counters.observe(element));}

// O vídeo é local. Falhas de mídia preservam a capa e a navegação.
const danceVideo=document.querySelector('#dance-video');
if(danceVideo){
 const status=document.querySelector('#dance-video-status');
 const unavailable=()=>{status.hidden=false;status.textContent='O vídeo da apresentação ainda não está disponível. A capa permanece disponível.';};
 const ready=()=>{status.hidden=true;};
 danceVideo.addEventListener('loadedmetadata',ready);
 danceVideo.addEventListener('error',unavailable);
 danceVideo.querySelector('source').addEventListener('error',unavailable);
 if(danceVideo.readyState>=1)ready();
 else if(danceVideo.error||danceVideo.networkState===HTMLMediaElement.NETWORK_NO_SOURCE)unavailable();
}

