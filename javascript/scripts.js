import { watchViewport } from "./tornis.js";

let isTouch = false;

window.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse") {
    isTouch = false;
  }
  if (event.pointerType === "touch") {
    let x = event.pageX - 8;
    let y = event.pageY - 8;
    document.getElementById("follow").style.left = x + "px";
    document.getElementById("follow").style.top = y + "px";

    isTouch = true;
  }
  
  if (event.pointerType === "pen") {
  }
});

// define a watched function, to be run on each update
const updateValues = ({ mouse, size }) => {
  if (mouse.changed) {
    // do something related to mouse position or velocity
    if (isTouch == true) {
      return;
    }

    const elem = document.getElementById("blue");

    let xRat = mouse.x / size.x;
    let yRat = mouse.y / size.y;

    elem.style.transform =
      "translate(" + -xRat * 15 + "px, " + -yRat * 15 + "px)";

    //follow div
    let x = mouse.x - 8;
    let y = mouse.y - 8;
    document.getElementById("follow").style.left = x + "px";
    document.getElementById("follow").style.top = y + "px";
  }
};

watchViewport(updateValues);
