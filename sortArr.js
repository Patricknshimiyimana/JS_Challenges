/*

// WHILE LOOP
==============

function sortArr(array) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  let numbers = [12, 10, 15, 11, 14, 13, 16];
  console.log(sortArr(numbers)); 

  */

// Since all the known sorting methods use more than 1 loop,
// it is hard to imagine to do the same with a single loop.
// Practically, it is not impossible to do so. But doing so won’t be the most efficient.
// Example 1: Below code will sort an array with integer elements.

function sortArrays(arr) {
  // Finding the length of array 'arr'
  let length = arr.length;

  // Sorting using a single loop
  for (let j = 0; j < length - 1; j++) {
    // Checking the condition for two
    // simultaneous elements of the array
    if (arr[j] > arr[j + 1]) {
      // Swapping the elements.
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;

      // updating the value of j = -1
      // so after getting updated for j++
      // in the loop it becomes 0 and
      // the loop begins from the start.
      j = -1;
    }
  }

  return arr;
}

// Declaring main method
let arr = [1, 2, 99, 9, 8, 7, 6, 0, 5, 4, 3];
console.log(sortArrays(arr));
