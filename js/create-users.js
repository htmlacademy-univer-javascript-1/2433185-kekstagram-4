import { getRandomArrayElement, getRandomInteger } from './random.js';
import { DESCRIPT_IMAGE } from './data.js';
import { arrayRandomComments } from './create-comment.js';

//описание фотографии, опубликованной пользователем
const createUsers = () => ({
  idUser: getRandomInteger(1, 25),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPT_IMAGE),
  likes: getRandomInteger(15, 200),
  comments: arrayRandomComments()
});

//массив с 25 объектами
const GeneratedArrayUsers = () => Array.from({length: 25}, createUsers);

export {GeneratedArrayUsers};

