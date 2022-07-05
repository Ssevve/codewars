// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/

function number(busStops) {
  return busStops.reduce((acc, curr) => acc + (curr[0] - curr[1]), 0);
}