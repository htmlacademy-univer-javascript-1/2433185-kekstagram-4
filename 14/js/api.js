const SERVER_URL = {
  GET: 'https://29.javascript.pages.academy/kekstagram/data',
  POST: 'https://29.javascript.pages.academy/kekstagram',
};

const getDataFromServer = (onSuccess, err) => {
  fetch(SERVER_URL.GET)
    .then((response) => response.json())
    .then((photos) => onSuccess(photos))
    .catch(() => err('! При загрузке данных произошла ошибка !'));
};

const sendDataToServer = (onSuccess, err, body) => {
  fetch(SERVER_URL.POST,
    {
      method: 'POST',
      body,
    }
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    }
    else {
      err('Не удалось опубликовать пост');
    }
  })
    .catch(() => err('Не удалось опубликовать пост'));
};


export { getDataFromServer, sendDataToServer };
