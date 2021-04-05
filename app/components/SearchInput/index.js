import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Input from './Input';

const SearchInput = ({ placeholder, onValueChange, valueName, value }) => (
  <Container>
    <Input
      value={value}
      placeholder={placeholder}
      onChange={event => onValueChange(valueName, event.target.value)}
    />
  </Container>
);

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  valueName: PropTypes.string,
  onValueChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default SearchInput;
