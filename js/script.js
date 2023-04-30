'use strict';

const btnNew = document.querySelector('.btn--new');

const firstOrc = document.querySelector('#firstOrc');
const secondOrc = document.querySelector('#secondOrc');
const thirdOrc = document.querySelector('#thirdOrc');

btnNew.addEventListener('click', () => {
   document.getElementById("shotgun").style.visibility = "visible";
   document.getElementById("bullet").style.visibility = "visible";

   document.getElementById("firstOrc").style.visibility = "visible";
   document.getElementById("secondOrc").style.visibility = "visible";
   document.getElementById("thirdOrc").style.visibility = "visible";
   
   document.getElementById("bullet").style.visibility = "visible";
   document.getElementById("bullet-counter").style.visibility = "visible";
   document.getElementById("bulletContainer").style.visibility = "visible";
   document.getElementById("scoreContainer").style.visibility = "visible";

   alert('Let\'s go kill orcs!!!!!!!!');
   document.getElementById("button-new").style.visibility = "hidden";
})

//Add click event
firstOrc.addEventListener('click', ()=> {
  increaseScore();
  moveFirstOrc();
});

//Add click event
secondOrc.addEventListener('click', ()=> {
  increaseScore();
  moveSecondOrc();
});

//Add click event
thirdOrc.addEventListener('click', ()=> {
  increaseScore();
  moveThirdOrc();
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
    alert('Game over.');
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

