import { burgerClose } from "./burger.js";

export default function anchors() {
  document.querySelectorAll(".anchor").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      if (document.querySelector("#burger").classList.contains("_open")) {
        burgerClose();
      }

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      if (scrollTarget) {
        const offsetPosition =
          scrollTarget.getBoundingClientRect().top -
          document.querySelector(".header").clientHeight;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}