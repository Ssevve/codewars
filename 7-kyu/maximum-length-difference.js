// https://www.codewars.com/kata/5663f5305102699bad000056

function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) return -1;
  let maxDiff = -Infinity;
    for (let i = 0; i < a1.length; i++) {
      for (let j = 0; j < a2.length; j++) {
        const diff = Math.abs(a1[i].length - a2[j].length);
        console.log(maxDiff);
        if (diff > maxDiff ) {
          maxDiff = diff;
        }
      }
    }
  return maxDiff;
}