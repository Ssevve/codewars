// https://www.codewars.com/kata/57f6ad55cca6e045d2000627

function squareOrSquareRoot(array) {
  return array.map(num => {
    return Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num**2;
  });  
}