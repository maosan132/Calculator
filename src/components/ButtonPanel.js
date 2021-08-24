import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const firstRow = ['AC', '+/-', '%', '/'];
  const secondRow = ['7', '8', '9', 'X'];
  const thirdRow = ['4', '5', '6', '-'];
  const fourthRow = ['1', '2', '3', '+'];
  const fifthRow = ['0', '.', '='];

  const buttonFactory = (row) => {
    const x = row.map((item, index) => (
      <Button
        key={row[index]}
        handleClick={props.clickHandler(item)}
        name={item}
        wide={item === '0'}
      />
    ));
    return x;
  };

  return (
    <div className="ButtonPanel">
      <div className="row1">
        {buttonFactory(firstRow)}
      </div>
      <div className="row2">
        {buttonFactory(secondRow)}
      </div>
      <div className="row3">
        {buttonFactory(thirdRow)}
      </div>
      <div className="row4">
        {buttonFactory(fourthRow)}
      </div>
      <div className="row5">
        {buttonFactory(fifthRow)}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;
