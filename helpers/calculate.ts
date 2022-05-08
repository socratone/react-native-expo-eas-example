const Numbers: { [key: string]: boolean } = {
  '0': true,
  '1': true,
  '2': true,
  '3': true,
  '4': true,
  '5': true,
  '6': true,
  '7': true,
  '8': true,
  '9': true,
};

const isNumber = (char: string) => {
  if (Numbers[char]) return true;
  return false;
};

const calculate = (str: string) => {
  let operator = '';
  let index = -1;

  for (let i = 0; i < str.length; i++) {
    if (!isNumber(str[i]) && str[i] !== '.') {
      operator = str[i];
      index = i;
      break;
    }
  }

  // 연산자가 제일 끝에 오는 경우
  if (index === str.length - 1) return str.substring(0, str.length - 1);

  const frontNumber = str.substring(0, index);
  const backNumber = str.substring(index + 1);

  if (operator === '+') {
    return (Number(frontNumber) + Number(backNumber)).toString();
  } else if (operator === '-') {
    return (Number(frontNumber) - Number(backNumber)).toString();
  } else if (operator === '×') {
    return (Number(frontNumber) * Number(backNumber)).toString();
  } else if (operator === '÷') {
    return (Number(frontNumber) / Number(backNumber)).toFixed(2).toString(); // 소수점 2번째 자리까지 표기
  }

  return str; // 연산자가 없는 경우
};

export default calculate;
