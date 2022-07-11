// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError("The argument must be between 0 and 12.")
  
  let factorial = 1;
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}