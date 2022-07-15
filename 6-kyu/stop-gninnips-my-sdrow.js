// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
  const originalWordArr = string.split(' ');
  const returnWordArr = [];
  for (word of originalWordArr) {
    if (word.length >= 5) {
      word = word.split('').reverse().join('');
    }
    returnWordArr.push(word);
  }
  return returnWordArr.join(' ');
}