// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  let times = 0;
  let numStr = num.toString();
  while(numStr.length > 1) {
    let product = 1;
    for (const n of numStr) {
      product *= +n;
    }
    numStr = product.toString();
    times++;
  }
  return times;
}