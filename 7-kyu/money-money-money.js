// https://www.codewars.com/kata/563f037412e5ada593000114


function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    years++;
  }
  return years;
}