// https://www.codewars.com/kata/57e3f79c9cb119374600046b

function hello(name) {
  const correctedName = name ? name[0].toUpperCase() + name.substring(1).toLowerCase() : 'World';
  return `Hello, ${correctedName}!`;
}