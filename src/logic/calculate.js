import operate from './operate';

// obj = {
//   total: '',
//   next: '',
//   operator
// }

const calculate = (obj, buttonName) => {
  const { next, operation, total } = obj;
  const cloneObj = { ...obj };

  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operation) {
        if (next) {
          cloneObj.next = next + buttonName;
        } else {
          cloneObj.next = buttonName;
        }
      } else if (next) {
        cloneObj.next = next + buttonName;
        cloneObj.total = null;
      } else {
        cloneObj.next = buttonName;
        cloneObj.total = null;
      }
      break;
    case 'AC':
      break;
    case '.':
      break;
    case '=':
    case '+/-':
      break;
    case '%':
      break;
    default:
  }

  cloneObj.total = operate(total, next, operation);

  return cloneObj;
};

export default calculate;
