import { getDataFromServer} from './api.js';
import { showPictures } from './render-photo.js';
import { showFilters } from './filter-photo.js';

const ErrorMessage = (errorText) => {
  const errorMessage = document.createElement('div');

  errorMessage.style.zIndex = 1;
  errorMessage.style.fontSize = `${25}px`;
  errorMessage.style.textAlign = 'center';
  errorMessage.style.padding = `${10}px ${50}px`;
  errorMessage.style.color = 'white';
  errorMessage.style.backgroundColor = '#9C281B';
  errorMessage.style.position = 'absolute';
  errorMessage.style.left = 0;
  errorMessage.style.right = 0;
  errorMessage.style.top = 0;

  errorMessage.textContent = errorText;

  document.body.append(errorMessage);
};


getDataFromServer(
  (photos) => {
    showPictures(photos);
    showFilters(photos);
  },
  (message) => ErrorMessage(message),
);


