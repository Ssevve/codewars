// https://www.codewars.com/kata/55d1d6d5955ec6365400006d

function roundToNext5(n) {
  if (n % 5 === 0) {
    return n;
  } else {
    return roundToNext5(n + 1);
  }
}