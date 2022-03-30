
function majorityElement(arr) {

    let newArr = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
       newArr[element] = newArr[element] + 1 || 1;
        if (newArr[element] > Math.floor(arr.length / 2))
        return element
  };
    return false
}

const array = [3,1,3,4,4,5,3,5,3,3,3,6,3];

console.log(majorityElement(array));
console.log(majorityElement([3,1,3,4,4]));