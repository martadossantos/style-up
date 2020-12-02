let draggableElems = document.querySelectorAll('.drag');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

draggableElems.forEach(el => {

  let wW = window.innerWidth;
  let wH = window.innerHeight;
  let half_W = wW / 2;

  let randomX = getRandomInt(60, (wW - (wW / 8.5)));
  let randomY = getRandomInt(40, (wH - (wH / 2.75)));

  if (randomX < (half_W - 150) || randomX > (half_W + 150)) {
    el.style.left = randomX + 'px';
  } else {

    if (randomX > half_W) {
      let newX = randomX + 200;
      el.style.left = newX + 'px';
    } else {
      let newX = randomX - 400;
      el.style.left = newX + 'px';
    }
    
  }

  el.style.top = randomY + 'px';

})

// array of Draggabillies
let draggies = []

// init Draggabillies
for ( let i=0; i < draggableElems.length; i++ ) {
  let draggableElem = draggableElems[i];
  let draggie = new Draggabilly( draggableElem, {
    // options...
  });
  
  draggies.push( draggie );
}