/*stars*/

const starsContainer = document.createElement('div');
starsContainer.classList.add('stars');
document.body.appendChild(starsContainer);

for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.style.position = 'absolute';
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.width = `${Math.random() * 3}px`;
  star.style.height = star.style.width;
  star.style.backgroundColor = 'white';
  star.style.borderRadius = '50%';
  star.style.animation = 'twinkle 2s infinite';
  star.style.animationDelay = `${Math.random() * 2}s`;
  starsContainer.appendChild(star);
}

/*window resize*/

function disableTransitionsDuringResize() {
  document.body.classList.add('no-transition');
  setTimeout(function() {
    document.body.classList.remove('no-transition');
  }, 100); 
}

window.addEventListener('resize', disableTransitionsDuringResize);

/*fixing bug where header disappers when nav is open (used in next section)*/

let hoveredupon = false;
document.querySelectorAll('nav').forEach(function(nav) {
  nav.addEventListener('mouseenter', function() {
      hoveredupon=true;
  });
  nav.addEventListener('mouseleave', function() {
      hoveredupon=false;
  });
});


/*added header disappearing and reappering during scroll*/

let prevScroll = window.scrollY;
const header = document.querySelector('header');
const threshold = 50;

window.addEventListener('scroll', function() {
  const currentScroll = window.scrollY;
  if (currentScroll > prevScroll && hoveredupon===false) {
    header.classList.remove('visible'); // Scrolling down
  } else if ((prevScroll - currentScroll > threshold || currentScroll === 0) && hoveredupon===false) {
    header.classList.add('visible'); // Scrolling up
  }
  prevScroll = currentScroll;
});

/*if general container doesnt overflow beyond viewport, this centers it better*/
const generalContainer = document.querySelector('.generalcontainer');

function centercontainer(){
  const viewportHeight = window.outerHeight;
  const containerHeight = generalContainer.offsetHeight+200; /*200 px for headroom*/
  if (containerHeight < viewportHeight) {
    generalContainer.style.top = '50%';
    generalContainer.style.transform = 'translate(-50%, -50%)';
    generalContainer.style.marginTop = '0';
    }
    else {
      if (window.matchMedia('(max-width: 768px)').matches) {
        generalContainer.style.top = '4rem';
      } else {
        generalContainer.style.top = '3rem'; 
      }
      generalContainer.style.transform = 'translate(-50%)';
      generalContainer.style.marginTop = 'clamp(1.2rem, 3vw + 2vh, 12rem)';
    }
}

if(generalContainer){
  window.addEventListener('resize', centercontainer); centercontainer();
}


