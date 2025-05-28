/*window resize*/

function disableTransitionsDuringResize() {
    document.body.classList.add('no-transition');
    setTimeout(function() {
      document.body.classList.remove('no-transition');
    }, 100); 
  }

window.addEventListener('resize', disableTransitionsDuringResize);

/*different behavior when generalcontainer overflows
/*this is similar to what we did in main.js but dimensions changed to accomodate no header*/

const generalContainer = document.querySelector('.generalcontainer');

function centercontainer(){
  const viewportHeight = window.innerHeight;
  const containerHeight = generalContainer.offsetHeight; /*200 for headroom*/
  if (containerHeight < viewportHeight) {
    generalContainer.style.top = '50%';
    generalContainer.style.transform = 'translate(-50%, -50%)';
    generalContainer.style.marginTop = '0';
    }
    else {
      if (window.matchMedia('(max-width: 560px)').matches) {
        generalContainer.style.top = '1rem';
      } else {
        generalContainer.style.top = '0.5rem'; 
      }
      generalContainer.style.transform = 'translate(-50%)';
    }
}

if(generalContainer){
  window.addEventListener('resize', centercontainer); centercontainer();
}

/*signup*/

const emailInput = document.getElementById('email');
const FName = document.getElementById('FName');
const LName = document.getElementById('LName');
const password = document.getElementById('Password');
const confirmPassword = document.getElementById('PasswordConfirm');
const notifications = document.getElementById('notifications');

function PINappear(){
    const PINbox = document.getElementById('PINbox');
    const MailCheck = document.getElementById('MailCheck');
    if (emailInput.checkValidity()) { 
        PINbox.style.visibility = 'visible';
        PINbox.style.pointerEvents = 'auto';
        MailCheck.textContent = "Code sent to e-mail";
        MailCheck.style.color = "green";
    }
    else{
        MailCheck.textContent = "Invalid e-mail";
        MailCheck.style.color = "Red";
    }
}

document.getElementById('sendbutton')?.addEventListener('click', PINappear);

function PINCheck(){
    const PINInput = document.getElementById('PIN');
    const PINResult = document.getElementById('PINResult');
    const Passbox = document.getElementById('Passbox');
    if (PINInput.value === "0000") {
        PINResult.textContent = "Success";
        PINResult.style.color = "green";
        Passbox.style.visibility = 'visible';
        Passbox.style.pointerEvents = 'auto';
    } else {
        PINResult.textContent = "Wrong PIN";
        PINResult.style.color = "red";
    }
}

document.getElementById('confirmbutton')?.addEventListener('click', PINCheck);

function checkPasswordLength() {
    const LengthCheck = document.getElementById('LengthCheck');
    if(password.value.length<8){
        LengthCheck.textContent = "Password too short";
        LengthCheck.style.color = 'red';
    }
    else{
        LengthCheck.textContent = "Valid Password";
        LengthCheck.style.color = 'Green';
    }
  }
  
document.getElementById('Password')?.addEventListener('input', checkPasswordLength);

function checkPasswordMatch() {    
    const MatchCheck = document.getElementById('MatchCheck');
    if (password.value !== confirmPassword.value) {
        MatchCheck.textContent = 'Passwords do not match';
        MatchCheck.style.color = 'red';
    } 
    else {
        MatchCheck.textContent = 'Passwords match!';
        MatchCheck.style.color = 'green';
        notifications.style.visibility = 'visible';
        notifications.style.pointerEvents = 'auto';
    }
}

document.getElementById('PasswordConfirm')?.addEventListener('input', checkPasswordMatch);

function Submit(){
    if (password.value === confirmPassword.value && password.value.length>=8 && FName.checkValidity() && LName.checkValidity()) {
        window.location.href = 'Main Page.html';
    } 
}

document.getElementById('submitbutton')?.addEventListener('click', Submit);

/*sign in*/

function Passboxappear(){
    const Passbox = document.getElementById('Passbox');
    const MailCheck = document.getElementById('MailCheck');
    if (emailInput.checkValidity()) { 
        Passbox.style.visibility = 'visible';
        Passbox.style.pointerEvents = 'auto';
        MailCheck.textContent = "Code sent to e-mail";
        MailCheck.style.color = "green";
    }
    else{
        MailCheck.textContent = "Invalid e-mail";
        MailCheck.style.color = "red";
    }
}

document.getElementById('sendtopassbutton')?.addEventListener('click', Passboxappear);

function Submitv2(){
  const validity = document.getElementById("signinvalidity");
  const password = document.getElementById("signinpassword");
  if (emailInput.checkValidity()) { 
    if(password.value.length>8){
      window.location.href = 'Main Page.html';
    }
    else{
      validity.textContent = "Account not found or wrong password";
      validity.style.color = "red";
    }
  }
  else{
    validity.textContent = "Account not found or wrong password";
    validity.style.color = "red";
  }
}

document.getElementById('signinsubmitbutton')?.addEventListener('click', Submitv2);

/*password*/

function Submitv3(){
  if (password.value === confirmPassword.value && password.value.length>=8) {
      window.location.href = 'Main Page.html';
  } 
}

document.getElementById('submitbuttonv3')?.addEventListener('click', Submitv3);

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


