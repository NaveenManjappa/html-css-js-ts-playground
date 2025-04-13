
const { fromEvent } = rxjs;

fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

const { of } = rxjs;

const numberObservable$ = of(1,2,3,4,5);

const observer = {
  next:(value) => console.log(`Received value: ${value}`),
  error:(error) => console.log('Something went wrong:', error),
  complete:()=>console.log('Obervable finished')
};

console.log('Subscribing..');
const subscription = numberObservable$.subscribe(observer);
console.log('Subscribed')