function getMinMax(str) {
  let arr = str.split(" ");
  let arr1 = arr.filter(item => +item);
  let max = Math.max(...arr1);
  let min = Math.min(...arr1);
  let result = { min: min, max: max };
  return result;
}
