// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f

function evaporator(content, evapPerDay, threshold) { 
  let days = 0;
  let thresholdContent = content * threshold / 100;
  
  while (content >= thresholdContent) {
    content *= 1 - (evapPerDay / 100);
    days++;
  }
  return days;
}