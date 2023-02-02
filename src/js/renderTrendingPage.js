'use strict'
import { refs } from "./refs";
import { themoviedb } from "./movie-api";
import { createMarkUpGallery } from "./markUp/trendFilms";

console.log(refs.moviesBoxEl);

renderTrendingPage()

async function renderTrendingPage() {

    const { results } = await themoviedb.fetchTrendingFilms();

    console.log(results);
    refs.moviesBoxEl.insertAdjacentHTML('beforeend', createMarkUpGallery(results));

}

