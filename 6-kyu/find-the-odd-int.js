// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  const occurrences = new Map();
  for (digit of A) {
    if(occurrences.has(digit)) {
       occurrences.set(digit, occurrences.get(digit) + 1);
    } else {
      occurrences.set(digit, 1);
    }
  }
  
  for ([val, key] of occurrences) {
    if (key % 2 !== 0) {
      return val;
    }
  }
}