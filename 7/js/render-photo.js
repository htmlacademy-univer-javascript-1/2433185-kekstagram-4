import { GeneratedArrayUsers } from './create-users.js';

const  pictureListElement = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createArrayPicture = GeneratedArrayUsers();

const pictureFragment = document.createDocumentFragment();

createArrayPicture.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__img').alt = picture.description;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  pictureFragment.appendChild(pictureElement);
});
pictureListElement.appendChild(pictureFragment);