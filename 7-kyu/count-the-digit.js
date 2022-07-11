// https://www.codewars.com/kata/566fc12495810954b1000030

function nbDig(n, d) {
  const squares = [];
  for (let i = 0; i <= n; i++) {
    squares.push(i * i);
  }
  const dCount = squares.reduce((acc, curr) => {
    const currString = curr.toString();
    for (let i = 0; i < currString.length; i++) {
      if (currString[i] === d.toString()) {
        acc += 1;
      }
    }
    return acc;
  }, 0);
  return dCount;
}