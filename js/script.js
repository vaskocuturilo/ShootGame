'use strict';

//buttons
const btnNew = document.querySelector('.btn--new');

//game items
const shotgun = document.querySelector('.image1');
const bulletContainer = document.querySelector('.bulletContainer');
const scoreContainer = document.querySelector('.scoreContainer');
const firstOrc = document.querySelector('#firstOrc');
const secondOrc = document.querySelector('#secondOrc');
const thirdOrc = document.querySelector('#thirdOrc');
const fire =  document.getElementById('fire');
const audio = document.createElement("AUDIO");

//modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

document.body.appendChild(audio);
audio.src = "./sound/battle.ogg";

document.body.addEventListener("mousemove", function () {
  audio.play()
})

const openModal = function () {
  modal.classList.remove('hidden');
}

const closeModal = () => {
  modal.classList.add('hidden');
  window.location.reload(true);
}

close.addEventListener('click', closeModal);

btnNew.addEventListener('click', () => {
  shotgun.classList.remove('hidden');
  bulletContainer.classList.remove('hidden');
  firstOrc.classList.remove('hidden');
  secondOrc.classList.remove('hidden');
  thirdOrc.classList.remove('hidden');
  scoreContainer.classList.remove('hidden');
  alert('Let\'s go kill orcs!!!!!!!!');
  btnNew.classList.add('hidden');
})

//Add click event
firstOrc.addEventListener('click', ()=> {
  increaseScore();
  moveFirstOrc();
  fire.play()
});

//Add click event
secondOrc.addEventListener('click', ()=> {
  increaseScore();
  moveSecondOrc();
  fire.play()
});

//Add click event
thirdOrc.addEventListener('click', ()=> {
  increaseScore();
  moveThirdOrc();
  fire.play()
});


const increaseScore = () => {
  const score = document.querySelector("#score-counter").innerHTML;
  const bullets = document.querySelector("#bullet-counter").innerHTML;

  const scoreHTML = document.querySelector("#score-counter");
  const bulletScoreHTML = document.querySelector("#bullet-counter");

  let count = Number(score);
  let bulletCount = Number(bullets);
  scoreHTML.innerHTML = count + 1;

  if (bulletCount !== 0) {
    bulletScoreHTML.innerHTML = --bulletCount;  
  } else {
    openModal();
  }
};

const getRandomNum = (num) => {
  return Math.floor(Math.random() * Math.floor(num));
}

const moveFirstOrc = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;

  firstOrc.style.top = getRandomNum(w) + 'px';
  firstOrc.style.left = getRandomNum(h) + 'px';   
}

const moveSecondOrc = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;

  secondOrc.style.top = getRandomNum(w) + 'px';
  secondOrc.style.left = getRandomNum(h) + 'px';   
}

const moveThirdOrc = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;

  thirdOrc.style.top = getRandomNum(w) + 'px';
  thirdOrc.style.left = getRandomNum(h) + 'px';   
}

