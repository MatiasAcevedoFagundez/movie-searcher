import { call, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';

import * as API from './api';

export function* fetchMovies() {
  try {
    const response = yield call(API.fetchMovies);
    yield put(actions.fetchMovies.success(response));
  } catch (error) {
    yield put(actions.fetchMovies.failure(error));
  }
}

export function* searchMovies(action) {
  try {
    const response = yield call(API.searchMovies, action.payload.movie);
    yield put(actions.searchMovies.success(response));
  } catch (error) {
    yield put(actions.searchMovies.failure(error));
  }
}

export default function*() {
  yield takeEvery(actions.fetchMovies.INIT_TYPE, fetchMovies);
  yield takeEvery(actions.searchMovies.INIT_TYPE, searchMovies);
}
