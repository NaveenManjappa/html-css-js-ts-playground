console.log('-------EX1 Array from range----');
function arrayFromRange(min,max){
  const range = [];
  
  for(let i=min;i <= max;i++)
    range.push(i);

  return range;
}

const numbers = arrayFromRange(-10,-4);
console.log(numbers);

console.log(arrayFromRange(1,10));
console.log(arrayFromRange(1,1));
console.log(arrayFromRange(2,1));

console.log('-------EX2 Includes----');
function includes(array,searchElement){
  // for(let el of array){
  //   if(el === searchElement) 
  //    return true;
  // }
  // return false;

  return array.indexOf(searchElement) === -1 ? false : true;
}

console.log(includes([1,2,3,4],11));

console.log('-------EX3 Except----');
function except(array,excluded){
  const output = [];
  for(let el of array){
    if(!excluded.includes(el))
      output.push(el);
  }
  return output;
}

console.log(except([1,2,3,4,5],[1]));

console.log('-------EX4 Move an element----');
const nums = [1, 2, 3, 4];

function move(array,index,offset) {
  const position = index + offset;
  if(position >= array.length || position < 0){
    console.error('Invalid offset');
    return;
  }

  const output = [...array];
  const element = output.splice(index,1)[0];
  output.splice(position,0,element);
  return output;
}

const result = move(nums,1,-1);
console.log('Result:',result);

console.log('-------EX5 Count occurences----');
const numbs = [1,2,3,4,5,1,1,1,2];

function countOccurences(array,searchElement){
  const count = array.reduce((acc,cv) => cv === searchElement ? acc + 1 : acc,0);
  return count;
}

console.log('Count:',countOccurences(numbs,1));

console.log('-------EX6 Get MAX----');
function getMAx(array) {
  if(array.length === 0) return;
  
  return array.reduce((acc,cv) => cv > acc ? cv : acc); 
 }

console.log(getMAx([]));
console.log(getMAx([1,2,32,44]));

console.log('-------EX7 Movies----');
const movies = [
  { title: 'a', year:2018, rating: 4.5},
  { title: 'b', year:2018, rating: 4.7},
  { title: 'c', year:2018, rating: 3},
  { title: 'd', year:2017, rating: 4.5}
];

const titles =  movies
  .filter(movie => movie.year === 2018 && movie.rating >= 4)
  .sort((first,second) => first.rating - second.rating)
  .reverse()
  .map(movie =>  movie.title);

  console.log('titles:',titles);
