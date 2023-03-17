import axios from 'axios';

const API_KEY = 'a59dfea75e9e40e203f0819879862061';
const BASE_URL = 'https://api.themoviedb.org/3/';

function getResponse(endpoint) {
  return axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`)
}

export default getResponse;

// endpoints

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.

// https://developers.themoviedb.org/3/trending/get-trending

// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.

// https://developers.themoviedb.org/3/search/search-movies

// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.

// https://developers.themoviedb.org/3/movies/get-movie-details

// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.

// https://developers.themoviedb.org/3/movies/get-movie-credits

// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

// https://developers.themoviedb.org/3/movies/get-movie-reviews
