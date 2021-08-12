/* eslint-disable */

import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const firstRow = ['AC', '+/-', '%', '/'];
  const secondRow = ['7', '8', '9', 'X'];
  const thirdRow = ['4', '5', '6', '-'];
  const fourthRow = ['1', '2', '3', '+'];
  const fifthRow = ['0', '.', '='];

  return (
    <>
      <div className="row1">
        {firstRow.map((item, index) => (
          <Button key={index} value={item} name={item} />
        ))}
      </div>
      <div className="row2">
        {secondRow.map((item, index) => (
          <Button key={index} value={item} name={item} />
        ))}
      </div>
      <div className="row3">
        {thirdRow.map((item, index) => (
          <Button key={index} value={item} name={item} />
        ))}
      </div>
      <div className="row4">
        {fourthRow.map((item, index) => (
          <Button key={index} value={item} name={item} />
        ))}
      </div>
      <div className="row5">
        {fifthRow.map((item, index) => (
          <Button key={index} value={item} name={item} />
        ))}
      </div>
    </>
  );
};

export default ButtonPanel;
