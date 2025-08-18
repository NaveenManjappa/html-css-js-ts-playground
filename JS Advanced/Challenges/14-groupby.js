// Write a function groupBy that takes an array of objects and a property name (as a string), and returns an object where the keys are the unique values of the specified property, and the values are arrays of objects that have that property value

function groupby(arr,key){
  if(arr.length <=0)
    return {};
  
  let result = {};

  for(let el of arr){
    //console.log(el[key]);
    if(el[key] in result){
      result[el[key]].push(el);
    }
    else {
      result[el[key]]=[el]
    }
    
  }
  console.log(result);
}

groupby([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');


groupby([
  { id:1,category:'Electronics'},
  { id:2,category:'Clothing'},
  { id:3,category:'Electronics'}
],'category');