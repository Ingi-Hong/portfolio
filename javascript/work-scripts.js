function handleClick(e, url) {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    let transition = document.getElementById("transition");
    transition.style.zIndex = "300";
    transition.style.width = "100dvw";
    transition.style.height = "130dvh";
    transition.style.opacity = "1";
    delay(url);
  }
  
  function delay(URL) {
    setTimeout(function () {
      window.location = URL;
    }, 999);
  }
  document.getElementById("return").addEventListener("click", function (e) {
    handleClick(e, "/");
  });