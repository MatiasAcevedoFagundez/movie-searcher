import axios from 'axios';

const apiKey = '6421abbdf99d1f06856dcc53ed56f602';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const search = `${url}/search/movie`;

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data.results.map(m => ({
      id: m.id,
      backPoster: posterUrl + m.backdrop_path,
      popularity: m.popularith,
      title: m.title,
      poster: posterUrl + m.poster_path,
      overview: m.overview,
      rating: m.vote_average,
    }));

    return modifiedData;
  } catch (error) {
    return error;
  }
};

export const searchMovies = async movie => {
  try {
    const { data } = await axios.get(search, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
        query: movie,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data.results.map(m => ({
      id: m.id,
      backPoster: posterUrl + m.backdrop_path,
      popularity: m.popularith,
      title: m.title,
      poster: posterUrl + m.poster_path,
      overview: m.overview,
      rating: m.vote_average,
    }));

    return modifiedData;
  } catch (error) {
    return error;
  }
};
