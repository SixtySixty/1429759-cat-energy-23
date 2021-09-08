const switcher = document.querySelector(".switcher");
const switcherWrapper = switcher.querySelector(".switcher__wrapper");
const switcherRadios = switcherWrapper.querySelectorAll(".switcher__radio");

switcherWrapper.addEventListener("focusin", (evt) => {
  switcherWrapper.addEventListener("keydown", (evt) => {
    if (event.key === "Enter" || event.key === " ") {
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

/* comparison.js */

const compasion = document.querySelector(".comparison");
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
