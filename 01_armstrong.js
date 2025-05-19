const Armstrong = (num) => {
  let sum = 0;
  const strNum = num.toString();
  const len = strNum.length;

  for (let i = 0; i < len; i++) {
    sum += Math.pow(parseInt(strNum[i]), len);
  }

  return sum === num;
};

console.log(Armstrong(153))
