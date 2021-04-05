import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import SearchInput from '../../components/SearchInput';
import MovieCard from '../../components/MovieCard';

import logo from '../../images/resources/logo.svg';
import actions from './actions';
import Header from './Header';
import messages from './messages';
import HeaderHelper from './HeaderHelper';

const HomePage = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText !== '') dispatch(actions.searchMovies.init(searchText));
    else dispatch(actions.fetchMovies.init());
  }, [searchText]);

  const movies = useSelector(state => state.movieReducer.movies);

  return (
    <>
      <Header>
        <HeaderHelper>
          <img src={logo} alt="Movie - Logo" />
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
        </HeaderHelper>
        <SearchInput
          placeholder="Search"
          onValueChange={(field, value) => setSearchText(value)}
          valueName="SegmentPopover"
          value={searchText}
        />
        {/* <button onClick={() => dispatch(actions.searchMovies.init(searchText))}>Search</button> */}
      </Header>
      {movies.data &&
        movies.data.map(s => (
          <MovieCard
            image={s.poster}
            title={s.title}
            description={s.overview}
            url="https://www.youtube.com/watch?v=RIKOJP9PHP0"
          />
        ))}
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
