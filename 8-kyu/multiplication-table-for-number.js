// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

function multiTable(number) {
  let table = '';
  for (let i = 1; i < 10; i++) {
    table += (`${i} * ${number} = ${i * number}\n`);
  }
  table += `10 * ${number} = ${10 * number}`; // Add it out of the loop to avoid adding a new line at the end
  return table;
}