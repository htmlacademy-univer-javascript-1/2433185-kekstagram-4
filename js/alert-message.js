import { ESC_KEY, body } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('section');

const errorTemplate = document.querySelector('#error').content.querySelector('section');

const imgUploadOverlay = document.querySelector('.img-upload__overlay');

const openWindow = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeWindow = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
};


const closeSuccessMessage = (message) => {
  body.appendChild(message);

  document.addEventListener('keydown', closeEsc);

  const closeMessage = () => {
    message.remove();
    document.removeEventListener('keydown', closeEsc);
  };

  message.addEventListener('click', (evt) => {
    if (evt.target.tagName !== 'DIV' && evt.target.tagName !== 'H2'){
      closeMessage();
    }
  });

  function closeEsc(evt) {
    if (evt.keyCode === ESC_KEY) {
      closeMessage();
    }
  }
};

const closeErrorMessage = (message) => {
  body.appendChild(message);
  document.addEventListener('keydown', closeEsc);

  const closeMessage = () => {
    message.remove();
    openWindow();
    document.removeEventListener('keydown', closeEsc);
  };

  message.addEventListener('click', (evt) => {
    if (evt.target.tagName !== 'DIV' && evt.target.tagName !== 'H2'){
      closeMessage();
    }
  });

  function closeEsc(evt) {
    if (evt.keyCode === ESC_KEY) {
      closeMessage();
    }
  }
};


export const showErrorMessageModal = () => {
  closeWindow();
  const message = errorTemplate.cloneNode(true);
  closeErrorMessage(message);
};

export const showSuccessMessageModal = () => {
  const message = successTemplate.cloneNode(true);
  closeSuccessMessage(message);
};
