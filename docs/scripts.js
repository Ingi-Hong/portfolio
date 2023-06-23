import { watchViewport } from "/tornis.js";

// define a watched function, to be run on each update
const updateValues = ({ mouse, size }) => {
  if (mouse.changed) {
    // do something related to mouse position or velocity

    const elem = document.getElementById('blue');

    let xRat = mouse.x/size.x;
    let yRat = mouse.y/size.y

    elem.style.transform = "translate(" + -xRat* 10 + "px, " + -yRat*10 + "px)";
  }
};

watchViewport(updateValues);

function handleClick(){
    
}
