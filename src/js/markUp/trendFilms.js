'use strict'

export function createMarkUpGallery(cardsMovie) {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

  return cardsMovie
    .map(
      ({
        poster_path,
        title,
        vote_average,
        release_date
      }) => {
        const year = release_date.substring(0, 4);
        const fullImageUrl = `${baseImageUrl}${poster_path}`;

        return `
            <li class="trending-films__item">
                <div class="trending-films__img-card">
                    <img class="trending-films__img" src="${fullImageUrl}" alt="${title}" loading="lazy" width="320"
                        height="214" />
                </div>
                <p class="trending-films__title">Title: ${title}</p>
                <div class="trending-films__info">
                  <span class="trending-films__line"> | </span>
                  <p class="trending-films__year">${year}</p>
                  <p class="trending-films__vote">${vote_average}</p>
                 </div>
            </li>
      `
      }
    )
    .join('')
};
