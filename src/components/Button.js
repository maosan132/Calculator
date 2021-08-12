import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <>
    <button
    type="button"
    onClick={}
    >{name}</button>
  </>
);

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
