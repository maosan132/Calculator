import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    name,
    handleClick,
    color,
    wide,
  } = props;
  const orangeButton = ['+', '-', 'X', '/', '='].includes(name);
  const wideButton = wide ? 'zero-button' : '';

  return (
    <button
      type="button"
      onClick={() => handleClick(name)}
      value={name}
      style={{ backgroundColor: orangeButton ? color : 'initial' }}
      className={wideButton}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: '',
  color: '#F5913E',
  wide: false,
};

export default Button;
