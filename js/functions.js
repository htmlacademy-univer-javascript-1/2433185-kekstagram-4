//Функция 1
function cheakString(string, maxLenght){
  if (string.replaceAll(' ','').length <= maxLenght){
    return true;
  }
  return false;
}
cheakString('2323', 12);

//Функция 2 2
function palindrom(string){
  let reversedString = '';
  const normalString = string.replaceAll(' ','').toLowerCase();
  for(let i = normalString.length - 1; i >= 0; i--){
    reversedString += normalString[i];
  }
  if(reversedString === normalString){
    return true;
  }
  return false;
}
palindrom('Лёша на полке клопа нашёл ');

//Функция 3
function NumberOnly(string){
  let numbers = '';
  for(let i = 0; i < string.length; i++){
    if(Number(string[i]) || string[i] === '0'){
      numbers += string[i];
    }
  }
  if(numbers === ''){
    return NaN;
  }
  return Number(numbers);
}

NumberOnly('ECMAScript 2022');
