// You are given an array containing n distinct numbers taken from the range 0 to n.
// This means the array should ideally contain all numbers from 0 to n, but one
// number is missing. Your task is to find and return that missing number.

// Input: An array of n integers where each integer is unique and lies between 0 and n (inclusive) except for one missing number.
// Output: Return the missing number.
function findMissingNumber(nums){
  nums.sort();
  //console.log(nums);
  if(nums.length==1 && nums[0]==0)
    return nums[0]+1;
  else if(nums.length==1 && nums[0]>0)
    return nums[0]-1;

  for(let i=1;i<nums.length;i++){
    if(nums[i] !=nums[i-1]+1)
      return nums[i-1]+1;
    if(nums.length==2)
      return nums[i]+1;
  }
}

let missingNum=findMissingNumber([9,6,4,2,3,5,7,0,1]);
console.log(missingNum);
let missingNum2=findMissingNumber([1]);
console.log(missingNum2);