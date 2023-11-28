//
const REGEX = /^#[a-zA-Z0-9а-яА-Я]{1,19}$/;

const MAX_HASHTAGS_LENGTH = 5;

const MAX_DESCRIPTION_LENGTH = 140;
//
const formPhotoUser =document.querySelector('.img-upload__form');


const textHashtags = formPhotoUser.querySelector('.text__hashtags');

const textDescription = formPhotoUser.querySelector('.text__description');


//pristine
const pristine = new Pristine(formPhotoUser, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});


//validate hashtags
const validateHashtagsLength = (value) => value.split(' ').length <= MAX_HASHTAGS_LENGTH;

const validateHashtagsUniqueness = (value) => {
  const hashtagsUniqueness = value.toLowerCase().split(' ');
  return hashtagsUniqueness.length === new Set(hashtagsUniqueness).size;
};

const validateHashtagFormat = (value) => {
  if (value === '') {
    return true;
  }
  else {
    return value.split(' ').every((hashtag) => REGEX.test(hashtag));
  }
};

// Description

const validateDescription = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

//form

const Validator = () => {
  pristine.addValidator(
    textHashtags,
    validateHashtagFormat,
    'Неподходящий хэштег'

  );
  pristine.addValidator(
    textHashtags,
    validateHashtagsLength,
    'Нельзя указывать больше 5 хэштегов'
  );
  pristine.addValidator(
    textHashtags,
    validateHashtagsUniqueness,
    'Повторяющийся хэштег'
  );

  pristine.addValidator(
    textDescription,
    validateDescription,
    'Длина  комментария не должна превышать 140 символов'
  );
};


export{Validator};

