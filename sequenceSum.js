const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;

  let sum = begin + sequenceSum(begin + step, end, step);

  return sum;
};

module.exports = sequenceSum;
