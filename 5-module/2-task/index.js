function toggleText() {
let hsButton = document.querySelector(".toggle-text-button");
let text = document.querySelector("#text");
  
hsButton.addEventListener("click", () => {
    text.toggleAttribute("hidden");
});
}
