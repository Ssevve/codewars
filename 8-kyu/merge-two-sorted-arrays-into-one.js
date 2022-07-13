// https://www.codewars.com/kata/5899642f6e1b25935d000161

function mergeArrays(arr1, arr2) {
  const newArr = arr1;
  for (let num of arr2) {
    if (!newArr.includes(num)) newArr.push(num);
  }
  return newArr.sort((a, b) => a - b);
}