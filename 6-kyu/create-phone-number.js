// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers) {
  const numbersCopy = numbers.slice();
  numbersCopy.unshift('(');
  numbersCopy.splice(4, 0, ') ');
  numbersCopy.splice(8, 0, '-');
  return numbersCopy.join('');
}