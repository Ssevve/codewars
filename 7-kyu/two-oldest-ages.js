// https://www.codewars.com/kata/511f11d355fe575d2c000001

function twoOldestAges(ages) {
  const sorted = ages.sort((a, b) => b - a);
  return [sorted[1], sorted[0]];
}