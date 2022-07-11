// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

function isAnagram(test, original) {
  const testCompareString = test.toLowerCase().split('').sort().join('');
  const originalCompareString = original.toLowerCase().split('').sort().join('');
  
  return testCompareString === originalCompareString;
}