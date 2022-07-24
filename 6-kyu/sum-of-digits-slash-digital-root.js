// https://www.codewars.com/kata/541c8630095125aba6000c00/

// function digital_root(n) {
//   let sum = n.toString();
//   while (sum.length > 1) {
//     let newSum = 0;
//     for (let i = 0; i < sum.length; i++) {
//       newSum += Number(sum[i]);
//     }
//     sum = newSum.toString();
//   }
//   return Number(sum);
// }

// Recursive
function digital_root(n) {
  if (n.toString().length === 1) return n;

  let sum = 0;
  for (const num of n.toString()) {
    sum += parseInt(num);
  }

  return digital_root(sum);
}

console.log(digital_root(16), 7);
console.log(digital_root(456), 6);