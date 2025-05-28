/*animations on first login only*/
const header = document.querySelector('header');
const quote = document.getElementById('Quoteoftheday');
let firstlogin = sessionStorage.getItem('firstlogin') ?? 'true';


if (firstlogin === "true") {
  header.classList.add('visible');
  quote.style.opacity = '1';
  sessionStorage.setItem('firstlogin', 'false');
} 
else {
  document.body.classList.add('no-transition');
  header.classList.add('visible');
  quote.style.opacity = '1';
  setTimeout(function() {
    document.body.classList.remove('no-transition');
  }, 100);
}

/*window resize*/

function disableTransitionsDuringResize() {
  document.body.classList.add('no-transition');
  setTimeout(function() {
    document.body.classList.remove('no-transition');
  }, 100); 
}

window.addEventListener('resize', disableTransitionsDuringResize);

/*changing quotes everyday*/

const NewDay = new Date().getDate();
const LastDay = localStorage.getItem('LastDay') ?? '0';
const quotes = [
  "One day, all your hard work will pay off.", "You don't have to be great to start. But you have to start to be great.", "Work hard in silence. Let success make the noise.", "The distance between dreams and reality is called action.",
  "A system is only as effective as your level of commitment to it.", "Hard work beats talent when talent doesn't work hard.", "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X", 
  "Don't let what you cannot do interfere with what you can do. - John Wooden", "You don't have to be great to start, but you have to start to be great. - Zig Ziglar", "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Motivation is what gets you started. Habit is what keeps you going. - Jim Ryun", "The best way to predict your future is to create it. - Abraham Lincoln", "You have to be odd to be No.1. - Dr. Seuss", "Every accomplishment starts with the decision to try. - Gail Devers", 
  "The only place where success comes before work is in the dictionary. - Vidal Sassoon", "If you don't build your dreams, someone will hire you to help build theirs. - Tony Gaskin", "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no help at all. - Dale Carnegie",
  "You can't use up creativity. The more you use, the more you have. - Maya Angelou", "Success is the sum of small efforts, repeated. - R Collier", "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. - Brian Herbert",
  "Procrastination is the art of keeping up with yesterday. - Don Marquis", "Procrastination is like a credit card: it's a lot of fun until you get the bill. - Christopher Parker", "Procrastination is opportunity's assassin. - Victor Kiam", 
  "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort. - Paul J. Meyer", "Kindness is the language which the deaf can hear and the blind can see. - Mark Twain", 
  "Your talents and abilities will improve over time, but for that, you have to start - Martin Luther King", "Quality is never an accident, it is always the result of an effort of intelligence. - John Ruskin", "A little progress each day adds up to big results. - Satya Nani", 
  "Self-discipline is self-caring. - M. Scott Peck", "Procrastination is the thief of time. - Edward Young", "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas Edison"
];

const CurrentNum = localStorage.getItem('CurrentNum') ?? '0';

if(NewDay != LastDay){
  const randomNum = Math.floor(Math.random() * 30);
  localStorage.setItem('CurrentNum', randomNum);
  quote.textContent = quotes[randomNum];
  localStorage.setItem('LastDay', NewDay);
}
else{
  quote.textContent = quotes[CurrentNum];
}

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



