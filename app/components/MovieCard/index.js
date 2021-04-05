import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Button from './Button';
import Img from './Img';

const MovieCard = ({ image, title, description, url }) => {
  const handleOpenUrl = () => {
    window.open(url, '_blank');
  };
  return (
    <Container>
      <div>
        <Img src={image} alt="Movie - Poster" />
      </div>
      <div>
        <div>
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
        <Button onClick={handleOpenUrl}>View</Button>
      </div>
    </Container>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default MovieCard;
