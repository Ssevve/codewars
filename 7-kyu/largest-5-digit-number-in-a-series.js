// https://www.codewars.com/kata/51675d17e0c1bed195000001/

function solution(digits) {
  let largestSequence = Number(digits.slice(0, 5));

  for (let i = 1; i < digits.length - 4; i++) {
    const sequence = Number(digits.slice(i, i + 5));
    if (sequence > largestSequence) largestSequence = sequence;
  }
  
  return largestSequence;
}

console.log(solution('1234567898765'), 98765);
console.log(solution("731674765"), 74765);