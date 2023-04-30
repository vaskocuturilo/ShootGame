'use strict';

const btnNew = document.querySelector('.btn--new');

const duck = document.querySelector('#orc');

btnNew.addEventListener('click', () => {
   document.getElementById("shotgun").style.visibility = "visible";
   document.getElementById("bullet").style.visibility = "visible";
   document.getElementById("orc").style.visibility = "visible";
   document.getElementById("bullet").style.visibility = "visible";
   document.getElementById("bullet-counter").style.visibility = "visible";
   document.getElementById("bulletContainer").style.visibility = "visible";
   document.getElementById("scoreContainer").style.visibility = "visible";

   alert('We\'ll start killing orcs very soon. But not now.');
   document.getElementById("button-new").style.visibility = "hidden";
})

//Add click event
duck.addEventListener('click', ()=> {
  increaseScore();
  moveDuck();
});


const increaseScore = () => {
  const score = document.querySelector("#score-counter").innerHTML;
  const bullets = document.querySelector("#bullet-counter").innerHTML;

  const scoreHTML = document.querySelector("#score-counter");
  const bulletScoreHTML = document.querySelector("#bullet-counter");

  let count = Number(score);
  let bulletCount = Number(bullets);
  scoreHTML.innerHTML = count + 1;
  bulletScoreHTML.innerHTML = --bulletCount;
};

const getRandomNum = (num) => {
  return Math.floor(Math.random() * Math.floor(num));
}

const moveDuck = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;  
  duck.style.top = getRandomNum(w) + 'px';
  duck.style.left = getRandomNum(h) + 'px';   
}


