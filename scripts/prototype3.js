import { description } from "./about.js";
import { apprasials } from "./comments.js";

document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons and text elements
  const buttons = document.querySelectorAll(".toggle-button");
  const texts = document.querySelectorAll(".recommendation-text");

  // Attach event listeners to each button
  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const textContent = texts[index]; // Get the corresponding text element

      if (textContent.classList.contains("expanded")) {
        textContent.classList.remove("expanded");
        button.textContent = "Read More";
      } else {
        textContent.classList.add("expanded");
        button.textContent = "Read Less";
      }
    });
  });
});

// SCROLL ANIMATIONS

window.addEventListener("scroll", () => {
  if (!play) {
    increamentAnimation();
  }
});

// responsible for updating the count from 0 t0 targer number
function updateCount(startNum, targetNum) {
  let currentNum = +startNum.innerText;
  if (currentNum < targetNum) {
    startNum.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(startNum, targetNum);
    }, 12);
  }
}

const menteeNum = document.querySelectorAll(".number-count");
const menteeTrigger = document.querySelector(".mentee-trigger");

let play = false;
function increamentAnimation() {
  if (!hasReached()) {
    return;
  }
  play = true;
  menteeNum.forEach((mentee) => {
    const target = +mentee.dataset.targetNumber;

    setTimeout(() => {
      updateCount(mentee, target);
    }, 1000);
  });
}

// checking if the element has reached the viewport and is visible
function hasReached() {
  let topPosition = menteeTrigger.getBoundingClientRect().top;
  if (window.innerHeight >= topPosition) {
    return true;
  } else return false;
}

ScrollReveal().reveal(".reveal-hero-text", {
  origin: "left",
  distance: "50px",
  duration: 2000,
  easing: "ease-in-out",
  opacity: 0,
  delay: 400,
});
ScrollReveal().reveal(".reveal-hero-img", {
  origin: "left",
  distance: "50px",
  duration: 2500,
  easing: "ease-in-out",
  opacity: 0,
  delay: 500,
});
ScrollReveal().reveal(".reveal-footer", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  opacity: 0,
  delay: 200,
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    speed: 500,
    autoplay: {
      delay: 10000,
      disableOnInteraction: true,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

// CODE FOR CLEARING THE FORM AFTER SUBMISSION

function resetInputValue() {
  document.querySelectorAll(".js-form-message").forEach((inputSection) => {
    inputSection.value = "";
  });
}

// ABOUT US TEXT

let aboutMe = document.querySelector(".js-about");
const toggleAbt = document.querySelector(".toggle-abt");

const aboutMeShort = description.substring(0, 520) + "...";

aboutMe.innerText = aboutMeShort;

toggleAbt.addEventListener("click", () => {
  if (toggleAbt.innerText === "Less") {
    aboutMe.innerText = aboutMeShort;
    toggleAbt.innerText = "More";
  } else {
    aboutMe.innerText = description;
    toggleAbt.innerText = "Less";
  }
});

// COPY RIGHT DATE
const date = new Date();
date.getFullYear() !== 2024
  ? (document.getElementById("js-date").innerText = "-" + date.getFullYear())
  : "";

// CODE for generating the apprasial
let html = "";
apprasials.forEach((apprasial) => {
  html += `
      <div class="swiper-slide">
         <div class="comment-head">
                  <div class="profil-pic">
                    <img src="./assets/${apprasial.img}" alt="" />
                  </div>
                  <div class="profil">
                    <p class="lead fw-bold m-0">
                      <a
                        target="_blank"
                        class="link-offset-2 link-underline link-underline-opacity-0"
                        href="${apprasial.link}"
                        >${apprasial.name}</a
                      >
                    </p>
                    <small>${apprasial.title}</small>
                  </div>
                </div>
                <div class="comment-body fst-italic">
                  <p class="recommendation-text" class="text-content">
                  ${apprasial.comment}
                  </p>
                  <button class="toggle-button">Read More...</button>
                </div>
              </div>
      `;
});

document.querySelector(".js-comment-slide").innerHTML = html;
