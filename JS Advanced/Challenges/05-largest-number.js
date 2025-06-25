// Write a function that arranges a list of non-negative integers to form the largest possible number. Given an array of integers, rearrange them such that when concatenated, they produce the maximum possible numeric value.

// Input

// An array arr of non-negative integers.
// Output

// A string representing the largest number that can be formed by arranging the given integers.
// Constraints & Edge Cases

// All integers in the array are non-negative.
// The resulting number may be very large, so return it as a string.
// If all numbers are 0, return "0" (not "000").
// The array may contain duplicate numbers.
// When comparing numbers for arrangement, treat them as strings:
// For example, "30" should come after "3" because: "330" > "303" → so "3" should come before "30".

function formLargestNumber(numbers){
  
     numbers.sort((f,s) => {
      if(f.toString()+ s.toString() > s.toString()+f.toString()){
        return -1;
      }
      else {
        return 1;
      }
     });
     
     let largestNumber='';
     numbers.forEach(element => {
      
       largestNumber=largestNumber.toString()+element.toString();
     });
     
     if(numbers[0] ===0) return 0;
     return largestNumber;
  
}

console.log(formLargestNumber([30,3]));
console.log(formLargestNumber([0,0,0]));