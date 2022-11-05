function returnPrime(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (isPrime(element)) {
      newArr.push(element);
    }
  }

  return newArr;
}

function isPrime(nber) {
  if (nber < 2) {
    return false;
  }

  for (let i = 2; i < nber; i++) {
    if (nber % i == 0) {
      return false;
    }
  }

  return nber;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(returnPrime(array));
