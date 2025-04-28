
const { fromEvent } = rxjs;

fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

const { of,interval } = rxjs;
const { filter,map,tap,take } = rxjs;




const observer = {
  next:(value) => console.log(`Received value: ${value}`),
  error:(error) => console.log('Something went wrong:', error),
  complete:()=>console.log('Obervable finished')
};

const numberObservable$ = of(1,2,3,4,5);
console.log('Subscribing..');
const subscription = numberObservable$.subscribe(observer);
console.log('Subscribed');


//Operators
const numberObs$=of(1,2,3,4,5,6);

const oddObs$= numberObs$.pipe(
filter(value => value % 2 !== 0)
);

console.log('Odd numbers');
oddObs$.subscribe(val => console.log(val));

const evenDoubled$ = numberObs$.pipe(
  filter(v => v % 2 === 0),
  map(v => v * 2)
);

console.log('Even doubled');
evenDoubled$.subscribe(v => console.log(v));

//tap operator
console.log('Tap operator');
const tenNums$= numberObs$.pipe(
  tap(v => console.log(`Tap before filter:${v}`)),
  filter(v => v % 2 === 0),
  tap(v => console.log(`Tap after filter:${v}`)),
  map(v => v * 10)
);
tenNums$.subscribe(v => console.log(v));

//take operator
console.log('Take operator');
const numEverySec$ = interval(1000);
const takeNum$ = numEverySec$.pipe(
  take(30)
);

takeNum$.subscribe(observer);
