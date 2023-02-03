'use strict'

export function createMarkUpGallery(cardsMovie, genres) {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

  return cardsMovie
    .map(
      ({
        poster_path,
        title,
        vote_average,
        release_date,
        genre_ids
      }) => {

        const year = !release_date ? 'Date not found' : release_date.slice(0, 4);
        const fullImageUrl = `${baseImageUrl}${poster_path}`;

        const namesGenres = [];
        genre_ids.forEach((genreId, index) => {
          if (index < 2) {
            const b = genres.find(({ id }) => id == genreId);
            namesGenres.push(b.name);
          } else if (index == 3) {
            namesGenres.push("Others");
          }
        });

        return `
            <li class="trending-films__item">
                <div class="trending-films__img-card">
                    <img class="trending-films__img" src="${fullImageUrl}" alt="${title}" loading="lazy" width="320"
                        height="214" />
                </div>
                <p class="trending-films__title">Title: ${title}</p>
                <div class="trending-films__info">
                  <p class="trending-films__genres"> ${namesGenres.join(', ')} </p>
                  <p class="trending-films__year">| ${year}</p>
                  <p class="trending-films__vote">${vote_average.toFixed(1)}</p>
                 </div>
            </li>
      `
      }
    )
    .join('')
};
