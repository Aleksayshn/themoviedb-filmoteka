'use strict'

export function createMarkUpGallery(cardsImage) {
  return cardsImage
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <div class="gallery__item">
          <a class="gallery__image" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" width="320" height="214" />
          </a>
          <div class="gallery__info">
            <p class="info-item">
              <b>Likes:</b> ${likes}
            </p>
            <p class="info-item">
              <b>Views:</b> ${views}
            </p>
            <p class="info-item">
              <b>Comments:</b> ${comments}
            </p>
            <p class="info-item">
              <b>Downloads:</b> ${downloads}
            </p>
          </div>
        </div>
        `
      }
    )
    .join('')

};



