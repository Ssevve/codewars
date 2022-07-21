// https://www.codewars.com/kata/5a3dd29055519e23ec000074

// Foreach
function checkExam(array1, array2) {
  let points = 0;

  array2.forEach((answer, i) => {
    if (answer === '') return;
    else if (answer === array1[i]) { points += 4; }
    else { points -= 1; }
  });

  return (points > 0) ? points : 0;
}

// Reduce
// function checkExam(array1, array2) {
//   let points = array2.reduce((acc, answer, i) => {
//     if (answer === '') { return acc; }
//     else if (answer === array1[i]) { return acc += 4; }
//     else { return acc -= 1; }
//   }, 0);

//   return (points > 0) ? points : 0;
// }

// For loop
// function checkExam(array1, array2) {
//   let points = 0;

//   for (let i = 0; i < array2.length; i++) {
//     const answer = array2[i];
//     if (answer === '') { continue; }
//     else if (answer === array1[i]) { points += 4; }
//     else { points -= 1; }
//   }

//   return (points > 0) ? points : 0;
// }

// For of loop
// function checkExam(array1, array2) {
//   let points = 0;

//   for (const [i, answer] of array2.entries()) {
//     console.log(i);
//     if (answer === '') { continue; }
//     else if (answer === array1[i]) { points += 4; }
//     else { points -= 1; }
//   }
  
//   return (points > 0) ? points : 0;
// }

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);