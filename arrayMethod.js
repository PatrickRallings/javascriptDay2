// 1. Simple Stuff
let num = [1, 2, 3];

function getFirstValue() {
  return num[0];
}
console.log(getFirstValue());

// 2. Fix the Bugs
let num2 = [1, 2, 3];

function incrementItems(num2) {
  return num2.map((num2) => num2 + 1);
}
console.log(incrementItems(num2));

// 3. Rotate an Array
let num3 = [1, 2, 3];

function rotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}
console.log(rotate(num3));