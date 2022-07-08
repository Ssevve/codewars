// https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers) {
  const sorted = numbers.sort();
  if (sorted[0] === sorted[1]) return sorted[sorted.length - 1];
  return sorted[0];
}