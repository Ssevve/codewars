// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

const number = array => {
  return array.map((line, i) => `${i + 1}: ${line}`);
}