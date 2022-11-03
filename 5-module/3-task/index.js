
let counter = 0;
function initCarousel() {
const buttonRight = document.querySelector(".carousel__arrow_right");
const buttonLeft = document.querySelector(".carousel__arrow_left");

buttonRight.addEventListener("click", switchImage);
buttonLeft.addEventListener("click", switchImage);
}

showHideBtns();

function switchImage(event) {
  let caruselInner = document.querySelector(".carousel__inner");
  const offsetWidth = caruselInner.offsetWidth;
  let direction = event.currentTarget.className.endsWith("right") ? 1 : -1;
  counter = counter + direction;
  let offsetWidthPx = String(-counter * offsetWidth) + "px";
  caruselInner.style.transform = `translateX(${offsetWidthPx})`;
  showHideBtns();
}

function showHideBtns() {
const buttonRight = document.querySelector(".carousel__arrow_right");
const buttonLeft = document.querySelector(".carousel__arrow_left");

if (counter == 0) {
  buttonLeft.style.display = "none";
} else {
  buttonLeft.style.display = "";
};

if (counter >= 3) {
  buttonRight.style.display = "none";
} else {
  buttonRight.style.display = "";
}
}

