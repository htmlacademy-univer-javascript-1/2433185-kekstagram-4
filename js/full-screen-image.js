
import { createComment } from './comment.js';
import { isEscapeKey } from './random.js';

const photoBigPicture = document.querySelector('.big-picture');
const comments = photoBigPicture.querySelector('.social__comments');

const body = document.querySelector('body');

const commentLoad = photoBigPicture.querySelector('.comments-loader');
const commentCount = photoBigPicture.querySelector('.social__comment-count');

//открытие фото
const createBigPicture = (picture ,pictureInfo) => {
  picture.addEventListener('click', () => {
    photoBigPicture.classList.remove('hidden');

    commentLoad.classList.add('hidden');
    commentCount.classList.add('hidden');

    photoBigPicture.querySelector('.big-picture__img').querySelector('img').src = pictureInfo.url;
    photoBigPicture.querySelector('.likes-count').textContent = pictureInfo.likes;
    photoBigPicture.querySelector('.comments-count').textContent = pictureInfo.comments.length;
    photoBigPicture.querySelector('.social__caption').textContent = pictureInfo.description;

    pictureInfo.comments.forEach((comment) => {
      comments.appendChild(createComment(comment));
    });

    body.classList.add('modal-open');
  });
};


// закрытие фото
const closeBigPhoto = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserPhoto();
  }
};

function closeUserPhoto (){
  photoBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

closeBigPhoto.addEventListener('click', () => {
  closeUserPhoto();
});


export{createBigPicture};
