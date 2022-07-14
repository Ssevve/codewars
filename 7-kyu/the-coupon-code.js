// https://www.codewars.com/kata/539de388a540db7fec000642

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const dateDiff = new Date(expirationDate) - new Date(currentDate);
  return enteredCode === correctCode && dateDiff >= 0;
}
