function handleClick(e, url) {
  e.preventDefault();
  document.body.style.overflow = "hidden";
  let dot = document.getElementById("dot");
  dot.style.width = "400dvw";
  dot.style.height = "400dvw";
  dot.style.opacity = "1";

  dot.style.zIndex = "200";

  delay(url);
}

function delay(URL) {
  setTimeout(function () {
    window.location = URL;
  }, 1200);
}
document.getElementById("workBtn").addEventListener("click", function (e) {
  handleClick(e, "work");
});
document.getElementById("github").addEventListener("click", function (e) {
  window.location = "https://github.com/ingi-hong";
});

document.getElementById("linkedin").addEventListener("click", function (e) {
  window.location = "https://www.linkedin.com/in/ingihong/";
});
