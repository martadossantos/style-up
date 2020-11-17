var draggableElems = document.querySelectorAll('.drag');

// array of Draggabillies
var draggies = []

// init Draggabillies
for ( var i=0; i < draggableElems.length; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
    // options...
  });
  draggies.push( draggie );
}