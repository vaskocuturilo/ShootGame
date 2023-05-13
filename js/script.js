'use strict';

//buttons
const btnNew = document.querySelector('.btn--new');
const btnEdit = document.querySelector('.btn--edit');
const btnExit = document.querySelector('.btn--exit');

//game items
const shotgun = document.querySelector('.image1');
const bulletContainer = document.querySelector('.bulletContainer');
const scoreContainer = document.querySelector('.scoreContainer');
const timeContainer = document.querySelector('.timeContainer');
const soldier1 = document.querySelector('#soldier-1');
const soldier2 = document.querySelector('#soldier-2');
const soldier3 = document.querySelector('#soldier-3');

const fire =  document.getElementById('fire');
const misFire =  document.getElementById('misFire');
const audio = document.createElement("AUDIO");
const bulletHole = document.querySelector('.bullet-hole');
const toilet = document.querySelector('.toilet');
const animation = document.querySelector('.animation');


const score = document.querySelector("#score-counter").innerHTML;
const scoreHTML = document.querySelector("#score-counter");
let count = Number(score);

const bullets = document.querySelector("#bullet-counter").innerHTML;
const bulletScoreHTML = document.querySelector("#bullet-counter");
let bulletCount = Number(bullets);

//modal window
const modal = document.querySelector('.modal');
const gameOver = document.querySelector('.game-over-modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

toilet.style.display = 'none';
animation.style.display = 'none';

document.body.appendChild(audio);
audio.src = "./sound/battle.ogg";

 document.body.addEventListener("mousemove", function () {
   audio.play()
 })

const openModal = function () {
  gameOver.classList.remove('hidden');
}

const closeModal = () => {
  gameOver.classList.add('hidden');
  window.location.reload(true);
}

close.addEventListener('click', closeModal);

btnNew.addEventListener('click', () => {
  shotgun.classList.remove('hidden');
  animation.classList.remove('hidden');
  bulletContainer.classList.remove('hidden');
  timeContainer.classList.remove('hidden');
  soldier1.classList.remove('hidden');
  soldier2.classList.remove('hidden');
  soldier3.classList.remove('hidden');
  scoreContainer.classList.remove('hidden');
  bulletHole.classList.remove('hidden');
  toilet.classList.remove('hidden')
  btnNew.classList.add('hidden');
  modal.classList.add('hidden');  
})

btnEdit.addEventListener('click', ()=> {
  alert('This functionality will add a little be later.')
})

btnExit.addEventListener('click', ()=> {
  alert('This functionality will add a little be later.')
})

const increaseScore = () => {
  if (bulletCount !== 0) {
    bulletScoreHTML.innerHTML = --bulletCount;
  }
};

window.addEventListener('mousemove',(e)=> {
  bulletHole.style.left = e.pageX + "px";
  bulletHole.style.top = e.pageY + "px"; 
})

window.addEventListener('mousemove',(e)=> {
  toilet.style.left = e.pageX + "px";
  toilet.style.top = e.pageY + "px"; 
})

bulletHole.style.display='none';

window.onclick = function(e)  {
  const element = e.target.id;
  if (bulletCount !== 0) {
    if (element === 'soldier-1') {
      doingFunction(element);
     } else if (element === 'soldier-2') {
      doingFunction(element);
     } else if (element === 'soldier-3') {
      doingFunction(element);
     } else {
         increaseScore();
         animationFire();
     }
  } else {
    misFireFunction();
     openModal();
  }
}

const animationFire = () => {
  if (bulletCount !== 0) {
    animation.style.display = 'block';
    shotgun.style.display = 'none';  
    bulletHole.style.display='block';
    setTimeout(()=>{
    bulletHole.style.display='none';
    shotgun.style.display = 'block';
    animation.style.display = 'none';
   }, 1000);
  } else {
    misFireFunction();
  } 
}

const animationToilet  = ()=>{
  toilet.style.display='block'; 
  setTimeout(() => {
    toilet.style.display='none';
  }, 1000);
}

const killSoldier = (element) => {
  document.getElementById(element).style.display='none';
}

function startTimer(duration, display) {
  let timer = duration, seconds;
  setInterval(function () {
      seconds = parseInt(timer % 60, 10);
     
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  let oneMinute = 30 * 1,
      display = document.querySelector('#time');
  startTimer(oneMinute, display);
};


const fireFunction = () => {
  fire.play();
}

const misFireFunction = () => {
misFire.play();
}

const doingFunction = (element)=> {
    fireFunction();
    increaseScore();
    animationFire();
    killSoldier(element);
    animationToilet();
    scoreHTML.innerHTML = ++count;
}


