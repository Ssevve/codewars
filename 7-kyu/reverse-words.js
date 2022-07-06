// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  const wordArr = str.split(' ');
  const reversedWordArr = wordArr.map(word => word.split('').reverse().join(''));
  return reversedWordArr.join(' ');
}