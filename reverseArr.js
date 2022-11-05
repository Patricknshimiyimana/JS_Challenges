function reverseArr(arr) {
  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    reversedArr.push(element);
  }

  return reversedArr;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(reverseArr(array));
