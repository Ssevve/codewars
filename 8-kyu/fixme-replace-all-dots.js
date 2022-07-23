// https://www.codewars.com/kata/596c6eb85b0f515834000049

// Regex
const replaceDots = str => str.replace(/[.]/g, '-');

// For of loop
function replaceDots(str) {
  let newStr = '';
  for (const char of str) {
    if (char === '.') newStr += '-';
    else newStr += char;
  }
  return newStr;
}

// For loop
function replaceDots(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '.') newStr += '-';
    else newStr += char;
  }
  return newStr;
}