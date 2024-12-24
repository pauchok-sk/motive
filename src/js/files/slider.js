import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

export default function slider() {
  const negativeSlider = document.querySelector(".negative__slider");

  if (negativeSlider && window.matchMedia("(max-width:744px)").matches) {
    const swiper = new Swiper(negativeSlider, {
      speed: 700,
      modules: [Autoplay, Pagination],
      spaceBetween: 16,
      slidesPerView: "auto",
      pagination: {
        el: ".negative__pagination",
        clickable: true
      },
      autoplay: {
        delay: 4000,
      },
    });
  }
}
