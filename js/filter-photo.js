import { debounce, generateRandomInteger } from './util.js';
import { showPictures } from './render-photo.js';

const TIMEOUT_DELAY = 500;
const RANDOM_PHOTOS_COUNT = 10;
let defaultPhotos;

const filtersImg = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');


const filterPhotos = (render) => {
  filtersForm.addEventListener('click', handleFilterClick);

  function handleFilterClick(evt) {
    const filterButton = evt.target.closest('.img-filters__button');

    if (filterButton) {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      filterButton.classList.add('img-filters__button--active');

      if (filterButton.id === 'filter-random') {
        handleRandomFilter();
      }
      else if (filterButton.id === 'filter-discussed') {
        handleDiscussedFilter();
      }
      else {
        handleDefaultFilter();
      }
    }
  }

  function handleRandomFilter() {
    const copyPhotos = defaultPhotos.slice();
    const photosList = [];

    while (photosList.length !== RANDOM_PHOTOS_COUNT) {
      const randomIndex = generateRandomInteger(0, copyPhotos.length - 1);
      photosList.push(copyPhotos[randomIndex]);
      copyPhotos.splice(randomIndex, 1);
    }
    render(photosList);
  }

  function handleDiscussedFilter() {
    render(defaultPhotos.slice().sort((photoA, photoB) => photoB.comments.length - photoA.comments.length));
  }

  function handleDefaultFilter() {
    render(defaultPhotos);
  }
};

const showFilters = (photos) => {
  filtersImg.classList.remove('img-filters--inactive');
  defaultPhotos = photos;
  filterPhotos(debounce((filterData) => showPictures(filterData), TIMEOUT_DELAY));
};


export {showFilters};

