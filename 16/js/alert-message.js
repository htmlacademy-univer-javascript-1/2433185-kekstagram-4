const ESC_KEY = 27;
const body = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('section');

const errorTemplate = document.querySelector('#error').content.querySelector('section');


const openOrClose = (message) => {
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

export const showErrorMessageModal = () => {
  const message = errorTemplate.cloneNode(true);
  openOrClose(message);
};

export const showSuccessMessageModal = () => {
  const message = successTemplate.cloneNode(true);
  openOrClose(message);
};

