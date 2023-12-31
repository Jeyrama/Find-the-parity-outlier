/*
You are given an array (which will have a length of at least 3, 
but could be very large) containing integers. 
The array is either entirely comprised of odd integers or 
entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.

Examples:
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/


// Solution

function findOutlier(integers) {
  return integers.slice(0,3).filter(even).length >= 2 ? integers.find(odd) : integers.find(even);
}
function even(num) {
  return (num % 2 == 0);
}
function odd(num) {
  return !even(num)
}

// or

function findOutlier(integers) {
  let odds = [];
  let evens = [];
  for(let i of integers) i % 2 === 0
    ? evens.push(integer)
    : odds.push(integer);

  return odds.length === 1 ? odds[0] : evens[0];
}