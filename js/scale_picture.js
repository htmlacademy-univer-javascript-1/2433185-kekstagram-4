const STEP = 25;

const SCALE_MIN = 25;

const SCALE_MAX = 100;


//
const image = document.querySelector('.img-upload__preview img');

const scaleButtonSmaller = document.querySelector('.scale__control--smaller');

const scaleButtonBigger = document.querySelector('.scale__control--bigger');

const scale = document.querySelector('.scale__control--value');


const setDefaultScale = () => {
  scale.value = `${SCALE_MAX}%`;
  image.style.transform=`scale(${1})`;
};

const changeScale = (sign) => {
  let scaleValue = parseFloat(scale.value);
  scaleValue = Math.max(SCALE_MIN, Math.min(SCALE_MAX, scaleValue + sign * STEP));
  scale.value = `${scaleValue}%`;
  image.style.transform = `scale(${scaleValue / 100})`;
};

const onBiggerButtonClick = () => changeScale(1);
const onSmallerButtonClick = () => changeScale(-1);


const addScale = () => {
  scaleButtonBigger.addEventListener('click', onBiggerButtonClick);
  scaleButtonSmaller.addEventListener('click', onSmallerButtonClick);
};

const removeScale = () => {
  scaleButtonBigger.removeEventListener('click', onBiggerButtonClick);
  scaleButtonSmaller.removeEventListener('click', onSmallerButtonClick);
};


export {addScale, removeScale, setDefaultScale};
