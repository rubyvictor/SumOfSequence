const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;

  let sum = begin + sequenceSum(begin + step, end, step);

  return sum;
};

module.exports = sequenceSum;

// let sum = 0;
// for (let i=begin;i<=end;i+=step){
// sum+=i;
// }

// let i=begin;
// while (i<=end){
// sum+=i;
// i+=step
// }
// return sum
