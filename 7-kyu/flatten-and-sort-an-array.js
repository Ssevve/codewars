// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

// function flattenAndSort(array) {
//   return array
//     .reduce((newArray, currentArray) => newArray.concat(currentArray), [])
//     .sort((a, b) => a - b);
// }


function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}