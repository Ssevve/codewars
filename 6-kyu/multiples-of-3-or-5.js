// https://www.codewars.com/kata/514b92a657cdc65150000006/

function solution(number) {
  let sum = 0;
  
  for (let i = 3; i < number; i++) {
    if (i % 5 === 0 || i % 3 === 0) sum += i;
  }
  
  return sum;
}