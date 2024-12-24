export default function negativeScroll() {
  const slides = document.querySelectorAll(".negative__slider .swiper-slide");

  if (slides.length) {
    const mainContent = document.querySelector(".negative__contnet");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = function (entries, observer) {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const content = e.target.querySelector(".negative__slider-content").textContent;
          mainContent.textContent = content;
        }
      })
    };

    const observer = new IntersectionObserver(callback, options);
    slides.forEach((s) => {
      observer.observe(s);
    });
  }
}
