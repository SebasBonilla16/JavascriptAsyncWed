
//Example 8

function removeSpaces(str) {
    return str.replace(/\s/g,"")
}

const name = "Sebastian Bonilla";
const cleanName = removeSpaces(name);
console.log(cleanName);


// Example 9

function isDivisibleByTen (number) {
    return number % 10 === 0;
}

console.log(isDivisibleByTen(50));
console.log(isDivisibleByTen(100000));
console.log(isDivisibleByTen(8));


//Example 10

function countVowelsAndChars(str) {
    const vowels = "aeiouAEIOU";
    let vowelsCount = 0;
    let charsCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelsCount++;
      }
      charsCount++;
    }
    return { vowels: vowelsCount, chars: charsCount };
  }
 
  console.log(countVowelsAndChars("Sebastian"));