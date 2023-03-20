import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a59dfea75e9e40e203f0819879862061';

export async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieById(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCredits(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMoviesByQuery(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
