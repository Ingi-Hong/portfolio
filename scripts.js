import { watchViewport } from "/tornis.js";

let isTouch = false;

window.addEventListener('pointerdown', (event) => {
  if (event.pointerType === "mouse") {
    isTouch = false;
  }
  if (event.pointerType === "touch") {
    isTouch = true;
  }
  if (event.pointerType === "pen") {}
});

// define a watched function, to be run on each update
const updateValues = ({ mouse, size }) => {
  if (mouse.changed) {
    // do something related to mouse position or velocity
    if (isTouch == true){
      return;
    }

    const elem = document.getElementById('blue');

    let xRat = mouse.x/size.x;
    let yRat = mouse.y/size.y

    elem.style.transform = "translate(" + -xRat* 15 + "px, " + -yRat*15 + "px)";
  }
};

watchViewport(updateValues);

function handleClick(){
    
}
