function hideSelf() {
  let hSButton = document.querySelector(".hide-self-button");

hSButton.addEventListener("click", (e) => {
    e.target.hidden = true;
});
}
