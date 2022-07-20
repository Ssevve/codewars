// https://www.codewars.com/kata/559ac78160f0be07c200005a

function nameShuffler(str){
  const nameArr = str.split(' ');
  return `${nameArr[1]} ${nameArr[0]}`;
}