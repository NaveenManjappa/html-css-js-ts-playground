// Write a function that takes a sentence as input and returns a new sentence where the first letter of each word is capitalized, and the rest of the letters are in lowercase.

// Input: A string sentence containing one or more words separated by spaces.
// Output: A new string where each word starts with an uppercase letter followed by lowercase letters.

function capitalizeWords(sentence){
  capitalizedSetence = sentence
      .toLowerCase()
      .trim()
      .split(/\s+/)    
      .map(word => word.charAt(0).toUpperCase()+word.slice(1))
      .join(" ");
    console.log(capitalizedSetence);  
  
}

capitalizeWords("hello world");
capitalizeWords("        multiple spaces    ");
capitalizeWords("Javascript Is Fun");

const chars = ['a','bgklj'];
console.log(chars[1].slice(1));