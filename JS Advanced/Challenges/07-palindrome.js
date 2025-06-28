/**
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward.
 *

 */
function isPalindrome  (str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g,'');
  // Reverse the string
  const reversedStr = cleanedStr.split('').reverse().join('');
  // Check if the cleaned string is equal to the reversed string
  return cleanedStr === reversedStr;
};

// Examples
console.log(`Is "A man, a plan, a canal: Panama" a palindrome? ${isPalindrome("A man, a plan, a canal: Panama")}`);
console.log(`Is "race a car" a palindrome? ${isPalindrome("race a car")}`);
console.log(`Is "madam" a palindrome? ${isPalindrome("madam")}`);


