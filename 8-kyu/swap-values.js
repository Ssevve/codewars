// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6

function swapValues() {
  const args = arguments[0];
  const temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}