function getMinMax(str) {
  // ваш код...
  let numsArr = str.split(' ').filter(e => isFinite(e));
  const maxMin = {};
  maxMin.min = Math.min.apply(null, numsArr);
  maxMin.max = Math.max.apply(null, numsArr);
  return maxMin;
}
