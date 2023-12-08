import { addScale, removeScale ,setDefaultScale } from './scale_picture.js';
import { formValidator, resetPrinstine, pristine} from './user-form-validate.js';
import { disableSlider, onFilterChange, createSlider } from './effects.js';
import { sendDataToServer } from './api.js';
import { showErrorMessageModal, showSuccessMessageModal } from './alert-message.js';


const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const formPhotoUser = document.querySelector('.img-upload__form');

const uploadFile = formPhotoUser.querySelector('.img-upload__input');

const imgPreview = formPhotoUser.querySelector('.img-upload__preview img');

const ESC_KEY = 27;

const textDescription = formPhotoUser.querySelector('.text__description');

const textHashTag = formPhotoUser.querySelector('.text__hashtags');

const imgUploadOverlay = formPhotoUser.querySelector('.img-upload__overlay');

const body = document.querySelector('body');

const uploadCancel = imgUploadOverlay.querySelector('.img-upload__cancel');

const effectsField = document.querySelector('.img-upload__effects');

const submitButton = document.querySelector('.img-upload__submit');


//закрытие
const closeModal = () => {
  resetPrinstine();
  removeScale();
  disableSlider();
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadCancel.removeEventListener('click', closeModal);
  body.removeEventListener('keydown', closeModal);
  textHashTag.removeEventListener('input', formValidator);
  textDescription.removeEventListener('input', formValidator);
  effectsField.removeEventListener('change', onFilterChange);
  formPhotoUser.reset();
};


const closeOverlay = (evt) => {
  if (evt.type === 'click' || (evt.keyCode === ESC_KEY && document.activeElement !== textDescription && document.activeElement !== textHashTag)) {
    closeModal();
  }
};

//открытие
const openWindow = () => {
  const img = uploadFile.files[0];
  const imgName = img.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => imgName.endsWith(it));

  if (matches) {
    imgPreview.src = URL.createObjectURL(img);
  }
  createSlider();
  setDefaultScale();
  addScale();
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  textHashTag.addEventListener('input', formValidator);
  textDescription.addEventListener('input', formValidator);
  effectsField.addEventListener('change', onFilterChange);
  uploadCancel.addEventListener('click', closeOverlay);
  body.addEventListener('keydown', closeOverlay);
};

uploadFile.addEventListener('input', openWindow);


formPhotoUser.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    submitButton.disabled = true;
    sendDataToServer (
      () => {
        submitButton.disabled = false;
        closeModal();
        showSuccessMessageModal();
        disableSlider();
      },
      () => {
        showErrorMessageModal();
        closeModal();
        submitButton.disabled = false;
        uploadFile.value = '';
      },
      new FormData(formPhotoUser)
    );
  }
});
