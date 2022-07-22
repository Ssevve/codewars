// https://www.codewars.com/kata/570597e258b58f6edc00230d

function array(str) { 
  const arr = str.split(',');
  return arr.slice(1, -1).join(' ') || null;
}
