let indicator = document.querySelector(".scroll-indicator .progress");
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", scroll);

function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  //   indicator.style.width = `${scrolled}%`;
  indicator.style.width = `${scrolled}%`;
}
const TypedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

let words = [
  "Mechatronics Engineer",
  "Front-End Engineer",
  "Back-End Engineer",
  "Web-designer",
  "ROS Engineer",
  "Mechanical and Electrical Engineer",
];
const typingDelay = 150;
const erasingDelay = 150;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;
document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});
function type() {
  if (charIndex < words[index].length) {
    TypedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    TypedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}
const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
};
