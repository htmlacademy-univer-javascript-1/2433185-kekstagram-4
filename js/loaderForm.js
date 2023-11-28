import { addScale, removeScale ,setDefaultScale } from './scale_picture.js';
import { Validator } from './user-form-validate.js';

const formPhotoUser = document.querySelector('.img-upload__form');

const uploadFile = formPhotoUser.querySelector('.img-upload__input');

const imgPreview = formPhotoUser.querySelector('.img-upload__preview img');

const ESC_KEY = 27;

const textDescription = formPhotoUser.querySelector('.text__description');

const textHashTag = formPhotoUser.querySelector('.text__hashtags');

const imgUploadOverlay = formPhotoUser.querySelector('.img-upload__overlay');

const body = document.querySelector('body');

const uploadCancel = imgUploadOverlay.querySelector('.img-upload__cancel');


//const submite = formPhotoUser.querySelector('.img-upload__submit');

//закрытие

const closeOverlay = (evt) => {
  if (evt.type === 'click' || (evt.keyCode === ESC_KEY && document.activeElement !== textDescription && document.activeElement !== textHashTag)) {
    removeScale();
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadCancel.removeEventListener('click', closeOverlay);
    body.removeEventListener('keydown', closeOverlay);
    formPhotoUser.reset();
  }
};


//открытие
uploadFile.addEventListener('change', (evt) => {
  evt.preventDefault();
  setDefaultScale();
  Validator();
  addScale();
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  imgPreview.src = URL.createObjectURL(uploadFile.files[0]);
  uploadCancel.addEventListener('click', closeOverlay);
  body.addEventListener('keydown', closeOverlay);
});


