import operate from './operate';

// obj = {
//   total: '',
//   next: '',
//   operator
// }

const calculate = (obj, buttonName) => {
  const { next, operation, total } = obj;
  let cloneObj = { ...obj };

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
          resultObj.next = next + buttonName;
        } else {
          resultObj.next = buttonName;
        }
      } else if (next) {
        resultObj.next = next + buttonName;
        resultObj.total = null;
      } else {
        resultObj.next = buttonName;
        resultObj.total = null;
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
  return resultObj;
};

export default calculate;
