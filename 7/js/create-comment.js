import { getRandomInteger, getRandomArrayElement } from './random';
import { USERS_MESSAGE, USERS_NAME } from './data';

//описание объекта с  комментарием
const createUsersComment = () => ({
  id: getRandomInteger(1, 1000),
  avatar: `img/avatar-${  getRandomInteger(1, 6)  }.svg`,
  message: getRandomArrayElement(USERS_MESSAGE),
  nameUser: getRandomArrayElement(USERS_NAME),
});

//рандомные коменатрии под фото
const arrayRandomComments = () => Array.from({length: getRandomInteger(0, 30)}, createUsersComment);

export{arrayRandomComments};
