// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
  const duplicates = new Set();
  let lowerCasedText = text.toLowerCase();

  for (let i = 0; i < lowerCasedText.length; i++) {
    const lastIndexOfCurrentLetter = lowerCasedText.lastIndexOf(lowerCasedText[i]);
    if (i !== lastIndexOfCurrentLetter) {
      duplicates.add(lowerCasedText[i]);
    }
  }
  return duplicates.size;
}