// https://www.codewars.com/kata/56e2f59fb2ed128081001328

// Function declaration
function printArray(array) {
  return array.join(',');
}

// Function expression
const printArray = array => array.join(',');

// Using for loop
function printArray(array) {
  let outStr = '';
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) { outStr += array[i]; }
    else { outStr += array[i] + ','; }
  }
  return outStr;
}