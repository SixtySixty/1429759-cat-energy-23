const switcher = document.querySelector(".switcher");
if (switcher) {
  const switcherWrapper = switcher.querySelector(".switcher__wrapper");
  const switcherRadios = switcherWrapper.querySelectorAll(".switcher__radio");

  switcherWrapper.addEventListener("focusin", (evt) => {
    switcherWrapper.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" || evt.key === " ") {
        evt.preventDefault();
        toogleSwitch();
      }
    });
  });

  function toogleSwitch() {
    if (switcherRadios[0].checked) {
      switcherRadios[1].checked = true;
    } else {
      switcherRadios[0].checked = true;
    }
  }
}

  /* comparison.js */

const compasion = document.querySelector(".comparison");

if (compasion) {

  const compasionWrapper = compasion.querySelector(".comparison__slides");
  const WIDTH = compasionWrapper.offsetWidth;
  const compasionSlides = compasionWrapper.querySelectorAll(".comparison__slide");
  const compasionRange = compasion.querySelector(".comparison__range");

  const compasionSwitcher = compasion.querySelector(".comparison__switcher");
  const compasionRadios = compasionSwitcher.querySelectorAll(".switcher__radio");
  const compasionControls = compasion.querySelectorAll("a.comparison__control");

  compasionSwitcher.hidden = false;
  compasionRange.hidden = false;
  compasionRange.parentElement.classList.add(
    `${compasionRange.parentElement.classList[0]}--activated`
    );

    compasionSwitcher.addEventListener("change", (evt) => {
      const scrollPosition = evt.target.id.includes("after") ? WIDTH : 0;

      compasionWrapper.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    });

    compasionRange.addEventListener("input", updateSlider);

    compasionControls.forEach((control, index) => {
      control.addEventListener("click", (evt) => {
        evt.preventDefault();
        compasionRange.value =
        index === 0 ? compasionRange.min : compasionRange.max;
        updateSlider();
      });
    });

    function updateSlider() {
      const inverseValue = compasionRange.max - compasionRange.value;

      compasionWrapper.style.setProperty("--slider-divide", inverseValue + "%");

      const parentWidth = compasion.parentNode.offsetWidth;
      let backgroundDividePoint =
      compasionWrapper.offsetLeft + (WIDTH * inverseValue) / compasionRange.max;

      updateBackround(backgroundDividePoint + "px");

      if (compasionRange.value === compasionRange.max) {
        updateBackround(0);
      }

      if (compasionRange.value === compasionRange.min) {
        updateBackround("100%");
      }
    }

    function updateBackround(value) {
      compasion.parentNode.style.setProperty("--back-divide", value);
    }
  }


// hamburger
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.main-nav__toggle');
  const nav = document.querySelector('.main-nav');
  const navList = nav.querySelector('.main-nav-list');
  navList.classList.add('main-nav-list-js');
  nav.classList.add('main-nav--closed');
  nav.classList.remove('main-nav--opened');

  btn.addEventListener('click', () => {
    nav.classList.toggle('main-nav--closed');
    nav.classList.toggle('main-nav--opened');
  });
});
