import { getRandomArrayElement, getRandomInteger } from './js/random';
import { DESCRIPT_IMAGE } from './js/data';
import { arrayRandomComments } from './js/create-comment';

//описание фотографии, опубликованной пользователем
const createUsers = () =>({
  idUser: getRandomInteger(1, 25),
  url: `photos/${  getRandomInteger(1, 25)  }.jpg`,
  description: getRandomArrayElement(DESCRIPT_IMAGE),
  likes: getRandomInteger(15, 200),
  comments: arrayRandomComments
});
//массив с 25 объектами
const GeneratedArrayUsers = () =>  Array.from({length: 25}, createUsers);

export{GeneratedArrayUsers};
