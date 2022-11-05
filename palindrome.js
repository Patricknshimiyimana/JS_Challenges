function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("banana"));
console.log(isPalindrome("racecar"));
