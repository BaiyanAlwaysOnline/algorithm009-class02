var plusOne = function (digits) {
  return (BigInt(digits.join("")) + 1n).toString().split("");
};



var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] !== 0) {
      return digits;
    }
  }
  digits = [...Array(len)].map((_) => 0);
  return [1, ...digits];
};
