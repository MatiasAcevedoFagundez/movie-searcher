import AbstractAction from 'utils/AbstractAction';

class Action extends AbstractAction {
  _namespace = 'MovieSearcher';
}

const fetchMovies = new Action('fetchMovies', {
  init: () => ({}),
  success: data => ({ data }),
  failure: data => ({ data }),
});

const searchMovies = new Action('searchMovies', {
  init: movie => ({ movie }),
  success: data => ({ data }),
  failure: data => ({ data }),
});

const resetState = new Action('resetState', {
  init: () => ({}),
});

export default {
  resetState,
  searchMovies,
  fetchMovies,
};
