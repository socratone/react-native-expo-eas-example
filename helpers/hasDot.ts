const hasDot = (str: string) => {
  for (let char of str) {
    if (char === '.') {
      return true;
    }
  }
  return false;
};

export default hasDot;
