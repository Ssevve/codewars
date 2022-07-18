// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  const letterArr = text.toLowerCase().split('');
  const positionArr = [];
  
  for (const letter of letterArr) {
    const charCode = letter.charCodeAt();
    if (charCode > 96 && charCode < 123) { // from 'a' to 'z'
      positionArr.push(charCode - 96); // -96 to match the alphabet position
    }
  }
  return positionArr.join(' ');
}