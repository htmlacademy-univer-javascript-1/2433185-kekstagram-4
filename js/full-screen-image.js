
import {createComment} from './comment.js';

const body = document.querySelector('body');
const photoBigPicture = document.querySelector('.big-picture');

//коментарии

const MAX_COMMENTS_COUNT = 5;
let commentsShow = 0;
// eslint-disable-next-line prefer-const
let comments = [];

const commentsList = photoBigPicture.querySelector('.social__comments');
const commentLoad = photoBigPicture.querySelector('.comments-loader');
const commentShowCountElement = photoBigPicture.querySelector('.loaded-comments-count');
const commentsCount = photoBigPicture.querySelector('.comments-count');


const renderPictureDetails = ({url, likes, description}) => {
  photoBigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  photoBigPicture.querySelector('.likes-count').textContent = likes;
  photoBigPicture.querySelector('.comments-count').textContent = comments.length;
  photoBigPicture.querySelector('.social__caption').textContent = description;
};

const renderComments = () => {
  commentsShow += MAX_COMMENTS_COUNT;

  if(commentsShow >= comments.length) {
    commentLoad.classList.add('hidden');
    commentsShow = comments.length;
  }
  else{
    commentLoad.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for(let i = 0; i < commentsShow; i++){
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }
  commentsList.innerHTML = '';
  commentsList.append(fragment);
  commentShowCountElement.textContent = commentsShow;
  commentsCount.textContent = comments.length;
};

const onCommentLoader = () => renderComments();


//открытие фото
const showBigPicture = (picture ,pictureInfo) => {
  picture.addEventListener('click', () => {
    photoBigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    renderPictureDetails(pictureInfo);
    comments = pictureInfo.comments;
    if(comments.length > 0){
      renderComments();
    }
    commentLoad.addEventListener('click', onCommentLoader);
  });
};


// закрытие фото
const closeBigPhoto = document.querySelector('.big-picture__cancel');

function closeEscPhoto () {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      photoBigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
      commentsShow = 0;
      closeBigPhoto.removeEventListener('click', onCommentLoader);
    }
    document.removeEventListener('keydown', closeEscPhoto);
  });
}

function closeUserPhoto (){
  commentsShow = 0;
  photoBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentLoad.classList.remove('hidden');

  closeBigPhoto.removeEventListener('click', onCommentLoader);

  document.removeEventListener('click', closeUserPhoto);
}

closeBigPhoto.addEventListener('click', closeUserPhoto);

document.addEventListener('keydown', closeEscPhoto);

export{showBigPicture};
