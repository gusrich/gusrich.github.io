// simple countdown (set date by reading #event-date if needed)
(function(){
  // set target date here (YYYY, M-1, D, H, M, S)
  // Example: 2026-01-01 10:00:00
  const target = new Date("2026-01-01T10:00:00").getTime();

  function update(){
    const now = Date.now();
    const diff = target - now;
    if(diff <= 0){
      document.getElementById('d').textContent = '00';
      document.getElementById('h').textContent = '00';
      document.getElementById('m').textContent = '00';
      document.getElementById('s').textContent = '00';
      clearInterval(timer);
      return;
    }
    const s = Math.floor(diff/1000%60);
    const m = Math.floor(diff/1000/60%60);
    const h = Math.floor(diff/1000/3600%24);
    const d = Math.floor(diff/1000/3600/24);
    document.getElementById('d').textContent = String(d).padStart(2,'0');
    document.getElementById('h').textContent = String(h).padStart(2,'0');
    document.getElementById('m').textContent = String(m).padStart(2,'0');
    document.getElementById('s').textContent = String(s).padStart(2,'0');
  }

  update();
  const timer = setInterval(update,1000);

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    })
  });
})();
