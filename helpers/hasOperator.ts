const hasOperator = (str: string) => {
  for (let char of str) {
    if (
      char === '+' ||
      char === '-' ||
      char === '%' ||
      char === '√' ||
      char === '÷' ||
      char === '×'
    ) {
      return char;
    }
  }
  return null;
};

export default hasOperator;
