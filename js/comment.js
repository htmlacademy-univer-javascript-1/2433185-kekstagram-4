
const createComment = (comment) => {
  const newComment = document.createElement('li');
  newComment.classList.add('.social__comments');
  const photoUser = document.createElement('img');
  photoUser.classList.add('social__picture');
  photoUser.src = comment.avatar;
  photoUser.alt = comment.name;
  photoUser.width = 35;
  photoUser.hight= 35;
  newComment.appendChild(photoUser);

  const textPhoto = document.createElement('p');
  textPhoto.classList.add('social__text');
  textPhoto.textContent = comment.message;
  newComment.appendChild(textPhoto);

  return newComment;
};


export{createComment};


