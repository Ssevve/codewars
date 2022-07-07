// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  const indexOfSmallest = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, i) => i !== indexOfSmallest);
}