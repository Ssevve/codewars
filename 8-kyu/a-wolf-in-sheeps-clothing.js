// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

function warnTheSheep(queue) {
  const reversedQueue = queue.reverse();
  if (reversedQueue[0] === 'wolf') 
    return 'Pls go away and stop eating my sheep';
  for (let i = 0; i < reversedQueue.length; i++) {
    if (reversedQueue[i] === 'wolf') 
      return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
  }
}