import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const left = Big(numberOne);
  const right = Big(numberTwo);
  let result = '';

  switch (operation) {
    case '+':
      result = `${left.plus(right)}`;
      break;
    case '-':
      result = `${left.minus(right)}`;
      break;
    case 'x':
    case 'X':
      result = `${left.times(right)}`;
      break;
    case '÷':
    case '/':
      result = right === 0 ? 'Divided by zero Error' : `${left.div(right)}`;
      break;
    case '%':
      result = `${left.mod(right)}`;
      break;
    default:
      result = null;
  }
  return result;
};

export default operate;
