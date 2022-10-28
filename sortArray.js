// USING JavaScript Array sort() method

function sortStringArr(arr) {
  return arr.sort();
}

function reverseSortStringArr(arr) {
  let sortedArr = arr.sort();
  let reverseSortedArr = sortedArr.reverse();
  return reverseSortedArr;
}

function sortNumbersArrAscending(arr) {
  let sortedArr = arr.sort(function (a, b) {
    return a - b;
  });

  return sortedArr;
}
function sortNumbersArrDescending(arr) {
  let sortedArr = arr.sort(function (a, b) {
    return b - a;
  });

  return sortedArr;
}

const points = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Numbers
console.log(sortNumbersArrAscending(points));
console.log(sortNumbersArrDescending(points));

// Strings
console.log(sortStringArr(fruits));
console.log(reverseSortStringArr(fruits));
