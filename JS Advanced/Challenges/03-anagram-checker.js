function isAnagram(str1,str2){
  const elements = [];
  for (const element of str1.toLowerCase()) {
    if(!(element >='a' && element <='z') )
      continue;
    elements.push(element);
}

for(const element of str2.toLowerCase()){ 
  if(elements.length === 0)
    return false;
  if(!(element >='a' && element <='z') )
      continue;
  let index=elements.findIndex(value => value === element);
 
  if(index>=0) elements.splice(index,1);
}
  
  return elements.length === 0;
}

 //console.log(isAnagram('Listen','silent'));
// console.log(isAnagram('triangle','integral'));
//console.log(isAnagram('hello','world'));


function isAnagramEfficient(str1, str2) {
  // Helper to clean and normalize strings
  const clean = str => str
    .toLowerCase()
    .replace(/[^a-z]/g, '');

  const s1 = clean(str1);
  const s2 = clean(str2);
  console.log(s1,s2);

  if (s1.length !== s2.length) return false;

  const count = {};

  for (const char of s1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of s2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

console.log(isAnagramEfficient('Listen','silent'));
