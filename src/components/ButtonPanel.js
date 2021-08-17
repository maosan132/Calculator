import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const firstRow = ['AC', '+/-', '%', '/'];
  const secondRow = ['7', '8', '9', 'X'];
  const thirdRow = ['4', '5', '6', '-'];
  const fourthRow = ['1', '2', '3', '+'];
  const fifthRow = ['0', '.', '='];

  return (
    <>
      <div className="row1">
        {firstRow.map((item, index) => (
          <Button
            key={firstRow[index]}
            handleClick={(item) => props.clickHandler(item)}
            name={item}
          />
        ))}
      </div>
      <div className="row2">
        {secondRow.map((item, index) => (
          <Button
            key={secondRow[index]}
            handleClick={(item) => props.clickHandler(item)}
            name={item}
          />
        ))}
      </div>
      <div className="row3">
        {thirdRow.map((item, index) => (
          <Button
            key={thirdRow[index]}
            handleClick={(item) => props.clickHandler(item)}
            name={item}
          />
        ))}
      </div>
      <div className="row4">
        {fourthRow.map((item, index) => (
          <Button
            key={fourthRow[index]}
            handleClick={(item) => props.clickHandler(item)}
            name={item}
          />
        ))}
      </div>
      <div className="row5">
        {fifthRow.map((item, index) => (
          <Button
            key={fifthRow[index]}
            handleClick={(item) => props.clickHandler(item)}
            name={item}
          />
        ))}
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;
