// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
  const characters = word.toLowerCase().split('');
  let retStr = '';
  
  for (const character of characters) {
    const firstIndex = characters.indexOf(character);
    const lastIndex = characters.lastIndexOf(character);
    
    if (firstIndex === lastIndex) retStr += '(';
    else retStr += ')';
  }
  return retStr;
}