// ===== Matrix rain + tipo "WELCOME DOM" + reveal =====
(function(){
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  let W, H, fontSize, columns, drops, anim;

  function resize(){
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    fontSize = Math.max(14, Math.floor(W/60));
    columns = Math.floor(W / fontSize);
    drops = Array(columns).fill(1);
    ctx.font = fontSize + "px monospace";
  }
  window.addEventListener('resize', resize);
  resize();

  const chars = '01▮▯░▒▓$#@*+-<>abcdefghijklmno';
  function draw(){
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.fillRect(0,0,W,H);

    for(let i=0;i<columns;i++){
      const text = chars[Math.floor(Math.random()*chars.length)];
      const x = i*fontSize;
      const y = drops[i]*fontSize;

      ctx.fillStyle = '#00ff6a';
      ctx.fillText(text, x, y);

      if(y > H && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    anim = requestAnimationFrame(draw);
  }
  anim = requestAnimationFrame(draw);

  // Tipeo “WELCOME DOM” y luego reveal
  const title = document.getElementById('typeTitle');
  const msg = 'WELCOME DOM';
  let idx = 0;

  setTimeout(()=>{
    title.style.opacity = '1';
    const typer = setInterval(()=>{
      title.textContent = msg.slice(0, idx) + (idx%2 ? '_' : '');
      idx++;
      if(idx > msg.length){
        clearInterval(typer);
        title.textContent = msg;
        // transición a la imagen + botón
        setTimeout(()=>{
          cancelAnimationFrame(anim);
          canvas.style.opacity = '0';
          title.style.opacity = '0';
          setTimeout(()=>{
            canvas.remove();
            title.remove();
            document.getElementById('reveal').classList.remove('hidden');
          }, 400);
        }, 900);
      }
    }, 90);
  }, 1400);
})();

// ===== Botón XXX → level2 =====
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('xxx');
  if (btn) {
    btn.addEventListener('click', () => {
      window.location.href = 'level2.html';
    });
  }
});
