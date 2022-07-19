// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

function declareWinner(fighter1, fighter2, firstAttacker) {
  const canStandFighter1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const canStandFighter2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  
  if (canStandFighter1 === canStandFighter2) return firstAttacker;
  else if (canStandFighter1 > canStandFighter2) return fighter1.name;
  else return fighter2.name;
}