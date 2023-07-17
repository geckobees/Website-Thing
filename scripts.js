
window.onload = function () {
    for (let i = 0; i < 200; i++) {
      createStar();
    }
  };
  


  function createStar() {
    const star = document.createElement('div');
    const starColors = [`red`, `yellow`, `white`, `aqua`, `orange`, `orange`, `orange`, `orange`, `orange`, `orange`, `orange`, `orange`, `orange`]
    star.classList.add('star');
    const randomSize = Math.random() * 2 + 1;
    star.style.setProperty('--scale', randomSize);
    star.style.backgroundColor = starColors[Math.floor(Math.random() * starColors.length)];
    star.style.width = `${randomSize}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random() * innerHeight}px`;
    star.style.left = `${Math.random() * innerWidth}px`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    star.style.zIndex = Math.floor(Math.random() * 10 - 5);
    
    document.body.appendChild(star);
  
    setTimeout(() => {
      star.remove();
      createStar();
    }, (Math.random() * 3 + 2) * 1000);
  }