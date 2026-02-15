//Reserve a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello"));


//Double Numbers Using map()
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 


//Count Vowels in String
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("JavaScript")); 


//Convert Array to Uppercase (map)
const words = ["apple", "banana", "mango"];
const upper = words.map(word => word.toUpperCase());
console.log(upper); 


//Sum of Even Numbers in Array
const nums = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    sum += nums[i];
  }
}
console.log(sum); 


//Filter Even Numbers Using Arrow
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(num => num % 2 === 0);
console.log(evens); 


//Count Total Characters in Array of Strings
function countTotalChars(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].length;
  }
  return total;
}
console.log(countTotalChars(["hi", "hello", "js"])); 


//Square Each Number
const squareNumbers = arr => arr.map(num => num * num);
console.log(squareNumbers([2, 3, 4])); 


//Print Numbers Divisible by 3
function printDivisibleBy3() {
  for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

printDivisibleBy3();


//Find Average of Array Elements
const findAverage = arr =>
  arr.reduce((sum, num) => sum + num, 0) / arr.length;
console.log(findAverage([10, 20, 30, 40])); 



