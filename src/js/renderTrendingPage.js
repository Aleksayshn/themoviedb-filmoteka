'use strict'
import { refs } from "./refs";
import { theMovieAPI } from "./movie-api";
import { createMarkUpGallery, getGenres } from "./markUp/trendFilms";

renderTrendingPage()

async function renderTrendingPage() {
    const { results } = await theMovieAPI.fetchTrendingFilms();
    const genres = await theMovieAPI.getGenres();

    refs.moviesBoxEl.insertAdjacentHTML('beforeend', createMarkUpGallery(results, genres));
}

