const html = {
  body: document.querySelector("body"),
};

function changeAleatoryBackgroundColor() {
  html.body.style.background = "#fff";
}

window.addEventListener("load", () => {
  setInterval(() => {
    changeAleatoryBackgroundColor();
  }, 1000);
});
