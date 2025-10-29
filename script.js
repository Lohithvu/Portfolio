// Typing animation
const text = "Front-End Developer";
let index = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;
