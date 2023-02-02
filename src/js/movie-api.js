'use strict';

import axios from 'axios';

class TheMovieAPI {
  static BASE_URL = 'https://api.themoviedb.org/3/';
  static API_KEY = 'cf0ab519f45eea0dacef149b4aa4a796';
  static TRENDING_URL = 'trending/movie/week';
  static SEARCH = `search/movie`;
  static GENRES_LIST = `genre/movie/list`;

  constructor() {
    this.page = 1;
    this.perPage = 100;
    this.searchQuery = '';
    this.movieId = null;
    this.genresId = null;
  }

  // Get trending movies per last Week:
  async fetchTrendingFilms() {
    const searchParams = {
      params: {
        api_key: TheMovieAPI.API_KEY,
        page: this.page,
      },
    };

    try {
      const response = await axios.get(
        `${TheMovieAPI.BASE_URL}${TheMovieAPI.TRENDING_URL}`,
        searchParams
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  // Search for movies:
  async fetchSearchFilms() {
    try {
      const searchParams = {
        params: {
          api_key: TheMovieAPI.API_KEY,
          page: this.page,
          include_adult: false,
          query: this.searchQuery,
          language: 'en - US'
        },
      };
      const response = await axios.get(
        `${TheMovieAPI.BASE_URL}${TheMovieAPI.SEARCH}`,
        searchParams
      );
      this.incrementPage();
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  // Search for genres:
  async getGenres() {
    try {
      const searchParams = {
        params: {
          api_key: TheMovieAPI.API_KEY,
        },
      };
      const response = await axios.get(
        `${TheMovieAPI.BASE_URL}${TheMovieAPI.GENRES_LIST}`,
        searchParams
      );
      return response.data.genres; // Повертає проміс із жанрами
    } catch (error) {
      console.error(error);
    }
  }

  // Get the primary information about a movie:

  async getInfoMovie() {
    try {
      const searchParams = {
        params: {
          api_key: TheMovieAPI.API_KEY,
          language: 'en - US',
        },
      };
      const response = await axios.get(
        `${TheMovieAPI.BASE_URL}movie/${this.movieId}`,
        searchParams
      );

      this.incrementPage();
      response.data
    } catch (error) {
      console.error(error);
    }
  }

  // Get the videos that have been added to a movie:

  async getTrailerFilm(id) {
    console.log(id);
    let trailerKey = '';
    try {
      const searchParams = {
        params: {
          api_key: TheMovieAPI.API_KEY,
          language: 'en - US',
        },
      };
      const response = await axios.get(
        `${TheMovieAPI.BASE_URL}movie/${id}/videos`,
        searchParams
      );

      const data = response.data.results;

      data.forEach(data => {
        if (data.type === 'Trailer') {
          trailerKey = {
            key: data.key,
          };
        }
      });

      localStorage.setItem(TRAILER_KEY, JSON.stringify(trailerKey));
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}


export const themoviedb = new TheMovieAPI();
