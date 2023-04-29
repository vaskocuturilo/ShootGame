'use strict';

const btnNew = document.querySelector('.btn--new');


btnNew.addEventListener('click', () => {
   document.getElementById("shotgun").style.visibility = "visible";
   document.getElementById("bullet").style.visibility = "visible";
   alert('We\'ll start killing orcs very soon. But not now.');
})