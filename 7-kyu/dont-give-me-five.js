// https://www.codewars.com/kata/5813d19765d81c592200001a

function dontGiveMeFive(start, end) {
  const nums = [];
  for (let i = start; i <= end; i++) {
    if(!i.toString().includes(5)) nums.push(i);
  }
  return nums.length;
}