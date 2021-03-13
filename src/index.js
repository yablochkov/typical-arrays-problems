
exports.min = function min (array) {
  if (!array || array.length === 0) return 0;
  return Math.min(...array);
}

exports.max = function max (array) {
  if (!array || array.length === 0) return 0;
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) return 0;
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
return sum/array.length;
  
}
