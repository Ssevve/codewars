// https://www.codewars.com/kata/525e5a1cb735154b320002c8

function triangular(n) {
  if (n <= 0) return 0;
  return n * (n + 1) / 2;
}

console.log( triangular(2), 3 );
console.log( triangular(4), 10 );
console.log( triangular(-454), 0 );