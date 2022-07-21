// https://www.codewars.com/kata/5300901726d12b80e8000498

// For loop
function fizzbuzz(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) { arr.push('FizzBuzz'); }
    else if ( i % 3 === 0) { arr.push('Fizz'); }
    else if (i % 5 === 0) { arr.push('Buzz'); }
    else { arr.push(i); }
  }
  return arr;
}

// While loop
// function fizzbuzz(n) {
//   const arr = [];

//   let count = 1;
//   while (arr.length < n) {
//     if (count % 15 === 0) { arr.push('FizzBuzz'); }
//     else if ( count % 3 === 0) { arr.push('Fizz'); }
//     else if (count % 5 === 0) { arr.push('Buzz'); }
//     else { arr.push(count); }

//     count += 1;
//   }
//   return arr;
// }
