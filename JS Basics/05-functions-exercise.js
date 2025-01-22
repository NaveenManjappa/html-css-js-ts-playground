//Find the sum
console.log('--------Exercise 1--------');
function sum(...items) { 
  if(items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];
  return items.reduce((a,b) => a += b); 
}

console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5));
console.log(sum([1,2,3,4,5,6]));

console.log('--------Exercise 2--------');

const circle = {
  radius:1,
  get area() {
    return this.radius * this.radius * Math.PI;
  }
}

console.log(circle.area);

console.log('--------Exercise 3--------');
function countOccurences(array,searchElement){
  if(!Array.isArray(array))
    throw new Error('The value passed is not an array');

  const count = array.reduce((acc,cv) => cv === searchElement ? acc + 1 : acc,0);
  return count;
}

try {
  const numbers = [1, 2, 3, 4];
  countOccurences(null,3);
}
catch(e){
  console.error(e.message);
}