// https://www.codewars.com/kata/542c0f198e077084c0000c2e

function getDivisorsCnt(n){
  let divisorCount = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) divisorCount++;
  }
  return divisorCount;
}