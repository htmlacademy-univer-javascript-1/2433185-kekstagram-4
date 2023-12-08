import { EFFECT } from './effects-data.js';


const ImgForm = document.querySelector('.img-upload__form');

const image = ImgForm.querySelector('.img-upload__preview img');

const sliderValue = ImgForm.querySelector('.effect-level__value');

const sliderWrapper = ImgForm.querySelector('.img-upload__effect-level');

const slider = ImgForm.querySelector('.effect-level__slider');

const effectsList = ImgForm.querySelector('.effects__list');

const createSlider = () => {
  sliderWrapper.classList.add('hidden');
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 0.1,
    format: {
      to: (value) => (Number.isInteger(value)) ? value.toFixed(0) : value.toFixed(1),
      from: (value) => parseFloat(value),
    },
  });
};

const onFilterChange = (evt) => {
  const effect = evt.target.value;
  if (effect === 'none') {
    sliderWrapper.classList.add('hidden');
    image.style.filter = 'none';
    return;
  }
  sliderWrapper.classList.remove('hidden');
  image.removeAttribute('class');
  image.classList.add(`effects__preview--${effect}`);
  slider.noUiSlider.updateOptions(EFFECT[effect].options);
  slider.noUiSlider.on('update', () => {
    sliderValue.value = slider.noUiSlider.get();
    image.style.filter = `${EFFECT[effect].filter}(${sliderValue.value}${EFFECT[effect].unit})`;
    slider.style.background = 'rgb(255, 238, 0)';
  });
};

const destroySlider = () => {
  if (slider.noUiSlider) {
    slider.noUiSlider.destroy();
  }
};

const disableSlider = () => {
  sliderWrapper.classList.add('hidden');
  effectsList.removeEventListener('change', onFilterChange);
  image.className = '';
  image.style.filter = '';
  destroySlider();
};


export {onFilterChange, createSlider, disableSlider};


