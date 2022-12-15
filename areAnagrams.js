/* SOLUTION 1 */
const areAnagrams = (str1, str2) => {
  /* to remove spaces use 
  `string.replaceAll(" ", "")` or Regular Expressions 
  `string.replace(/\s/g, "")` */
  let sortedStr1 = str1
    .replaceAll(" ", "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  let sortedStr2 = str2
    .replaceAll(" ", "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  if (sortedStr1.length != sortedStr2.length) return false;
  return sortedStr1 === sortedStr2;
};

console.log(areAnagrams("Debit Card", "Bad Credit"))
console.log(areAnagrams("Debit Card", "Bad Cred"))
console.log(areAnagrams("triangle", "integral"));
console.log(areAnagrams("triangle", "integer"));

/* SOLUTION 2 */
// function areAnagrams(stringA, stringB) {
//     /*First, we remove any non-alphabet character using regex and convert
//     convert the strings to lowercase. */
//     stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
//     stringB = stringB.replace(/[^\w]/g, "").toLowerCase()

//     //Get the character map of both strings
//     const charMapA = getCharMap(stringA)
//     const charMapB = getCharMap(stringB)

//     /* Next, we loop through each character in the charMapA,
//     and check if it exists in charMapB and has the same value as
//     in charMapA. If it does not, return false */
//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) {
//             return false
//         }
//     }

//     return true
// }

// function getCharMap(string) {
//     // We define an empty object that will hold the key - value pairs.
//     // let charMap = new Map // You can use this or an empty obj
//     let charMap = {};

//     /*We loop through each character in the string. if the character
//     already exists in the map, increase the value, otherwise add it
//     to the map with a value of 1 */
//     for (let char of string) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
//     return charMap
// }
