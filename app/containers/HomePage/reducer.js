/* eslint-disable no-case-declarations */
import actions from './actions';

const initialState = {
  status: '',
  error: '',
  movies: {},
};

const MovieSearcher = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.fetchMovies.INIT_TYPE: {
      return {
        ...state,
        status: 'fetchMovies',
      };
    }
    case actions.fetchMovies.SUCCESS_TYPE: {
      return {
        ...state,
        movies: payload,
        status: 'fetchMoviesSucces',
      };
    }
    case actions.fetchMovies.FAILURE_TYPE: {
      return {
        ...state,
        status: 'fetchMoviesError',
        error: payload,
      };
    }
    case actions.searchMovies.INIT_TYPE: {
      return {
        ...state,
        status: 'searchMovies',
      };
    }
    case actions.searchMovies.SUCCESS_TYPE: {
      return {
        ...state,
        movies: payload,
        status: 'searchMoviesSucces',
      };
    }
    case actions.searchMovies.FAILURE_TYPE: {
      return {
        ...state,
        status: 'searchMoviesError',
        error: payload,
      };
    }
    case 'RESET': {
      return initialState;
    }
    default:
      return state;
  }
};

export default MovieSearcher;
