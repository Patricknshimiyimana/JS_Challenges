const replaceVowels = (str = "") => {
  const vowels = "aeiou";
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (vowels.includes(el)) {
      //  res += (i + 1); // this replace vowels with their 1-based index in a string
      res += 4; // this replace all vowels with just 4
    } else {
      res += el;
    }
  }
  return res;
};

const str = "cancotainsomevowels";
console.log(replaceVowels(str));
