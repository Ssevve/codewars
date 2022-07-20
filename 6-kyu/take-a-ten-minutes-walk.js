// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  
  const offset = {
    x: 0,
    y: 0,
  }

  for (const direction of walk) {
    if (direction === 'n') offset.y += 1;
    else if (direction === 's') offset.y -= 1;
    else if (direction === 'e') offset.x += 1;
    else offset.x -= 1;
  }
  
  return offset.y === 0 && offset.x === 0;
}