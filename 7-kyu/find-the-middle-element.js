// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme (triplet) {
  const sorted = triplet.slice().sort((a, b) => a - b);
  return triplet.indexOf(sorted[1]);
}