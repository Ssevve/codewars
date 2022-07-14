// https://www.codewars.com/kata/59cfc000aeb2844d16000075

function capitalize(s) {
  const returnArr = [];
  const splitS = s.split('');
  
  returnArr.push(splitS.map((letter, i) => i % 2 ? letter : letter.toUpperCase()).join(''));
  returnArr.push(splitS.map((letter, i) => i % 2 ? letter.toUpperCase() : letter).join(''));
  
  return returnArr;
};