// https://www.codewars.com/kata/52f3149496de55aded000410

function sumDigits(number) {
  const numbers = Math.abs(number).toString().split('');
  
  let sum = 0;
  for (const num of numbers) {
    sum += +num;
  }
  return sum;
}
