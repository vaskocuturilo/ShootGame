'use strict';

//buttons
const btnNew = document.querySelector('.btn--new');
const btnEdit = document.querySelector('.btn--edit');
const btnExit = document.querySelector('.btn--exit');

//game items
const shotgun = document.querySelector('.image1');
const bulletContainer = document.querySelector('.bulletContainer');
const scoreContainer = document.querySelector('.scoreContainer');

const soldier1 = document.querySelector('#soldier-1');
const soldier2 = document.querySelector('#soldier-2');
const soldier3 = document.querySelector('#soldier-3');

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
  soldier1.classList.remove('hidden');
  soldier2.classList.remove('hidden');
  soldier3.classList.remove('hidden');
  scoreContainer.classList.remove('hidden');
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
  const score = document.querySelector("#score-counter").innerHTML;
  const bullets = document.querySelector("#bullet-counter").innerHTML;

  const scoreHTML = document.querySelector("#score-counter");
  const bulletScoreHTML = document.querySelector("#bullet-counter");

  let count = Number(score);
  let bulletCount = Number(bullets);
  scoreHTML.innerHTML = count + 1;

  if (bulletCount !== 0) {
    bulletScoreHTML.innerHTML = --bulletCount;
  } 

  if (bulletCount === 0 && score === 3) {
    openModal();
  }
};

function shoot(zombie){
  zombie.style.display = 'none';
  increaseScore();
}
