const { fromEvent,interval } = rxjs;
const { pipe,switchMap,map,take } = rxjs.operators;

const click$ = fromEvent(document.getElementById('myButton'),'click');

const result$ = click$.pipe(
  switchMap((event) => {
    console.log('button clicked');
    return interval(500).pipe(
      map(i => `Result from click ${event.timeStamp.toFixed(0)}: value ${i}`),
      take(3)
    );
  })
);

console.log('Subscribing to the results');
const subscription  = result$.subscribe({
next: value => console.log(value),
complete: () => console.log('Observable completed')
});

setTimeout(()=>{
  console.log('Unsubscribing');
  subscription.unsubscribe();
},10000)