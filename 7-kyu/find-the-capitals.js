// https://www.codewars.com/kata/539ee3b6757843632d00026b

function capitals(word) {
  const indices = [];
  for (let i = 0; i < word.length; i++) {
    if(word[i] === word[i].toUpperCase()) indices.push(i);
  }
  return indices;
}