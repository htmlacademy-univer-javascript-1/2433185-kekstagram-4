import { GeneratedArrayUsers } from './create-users.js';
import { showBigPicture } from './full-screen-image.js';

const  pictureListElement = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createArrayPicture = GeneratedArrayUsers();

const picturesItems = [];

const createPictureUser = (picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__img').alt = picture.description;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

  showBigPicture(pictureElement, picture);

  return pictureElement;
};

//отрисовка фотографии на сайте
const showPictures = (pictures) => {
  const pictureFragment = new DocumentFragment;
  pictures.forEach((picture) => pictureFragment.appendChild(picture));
  pictureListElement.appendChild(pictureFragment);
};

createArrayPicture.forEach((picture) => picturesItems.push(createPictureUser(picture)));

showPictures(picturesItems);


