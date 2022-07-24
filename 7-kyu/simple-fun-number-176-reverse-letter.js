// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

function reverseLetter(str) {
  let returnStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      returnStr += str[i];
    }
  }
  return returnStr;
}

console.log(reverseLetter("krishan"),"nahsirk");
console.log(reverseLetter("ultr53o?n"),"nortlu");
console.log(reverseLetter("ab23c"),"cba");
console.log(reverseLetter("krish21an"),"nahsirk");