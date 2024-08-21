import { apprasials } from "./comments.js";

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
      delay: 5000,
      disableOnInteraction: true,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

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
/* 
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  scrollAnimation();
}); */

/* function scrollAnimation() {
  nav.classList.toggle("scrolled", window.scrollY > 80);
} */

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
                  <button class="toggle-button">Read More</button>
                </div>
              </div>
      `;
});

document.querySelector(".js-comment-slide").innerHTML = html;
