import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
    <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${resto.name}"
           src="${resto.pictureId ? CONFIG.IMG_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description.slice(0, 150)}</p>
    </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
    <h2 class="movie__title">${resto.name}</h2>
    <img class="movie__poster" src="${resto.pictureId ? CONFIG.IMG_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${resto.name}" />
    <div class="movie__info">
        <h3>Information</h3>
        <h4>Kota</h4>
        <p>${resto.city}</p>
        <h4>Rating</h4>
        <p>${resto.rating} minutes</p>
    </div>
    <div class="movie__overview">
        <h3>Overview</h3>
        <p>${resto.description}</p>
    </div>
`;

export { createRestoItemTemplate, createRestoDetailTemplate };