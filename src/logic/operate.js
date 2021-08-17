import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  // const operators = ['+', '-', 'X', '/', '%'];
  let result = 0;

  switch (operation) {
    case '+':
      result = `${num1.plus(num2)}`;
      break;
    case '-':
      result = `${num1.minus(num2)}`;
      break;
    case 'x':
    case 'X':
      result = `${num1.times(num2)}`;
      break;
    case '÷':
    case '/':
      // result = num2 === 0 ? 'Divided by zero Error' : `${num1.div(num2)}`;
      try {
        result = `${num1.div(num2)}`;
      } catch (e) {
        result = 'Divided by zero Error';
      }
      break;
    case '%':
      result = `${num1.mod(num2)}`;
      break;
    default:
      throw new Error(`Invalid operator ${operation}`);
  }
  return result.toString();
};

export default operate;
