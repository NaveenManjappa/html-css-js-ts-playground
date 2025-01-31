function StopWatch(){
  this.running = false;
  this.startTime = 0;
  this.endTime = 0;

  Object.defineProperty(this, 'running', {    
    enumerable: true,
    configurable: false
  });
}

StopWatch.prototype.start = function() {
  if(this.running)
    throw new Error('Stopwatch has already started');
  this.running = true;
  this.startTime = new Date();
}

StopWatch.prototype.stop = function() {
  if(!this.running)
    throw new Error('Stopwatch is not started');
  this.running = false;
  this.endTime = new Date();
}

StopWatch.prototype.duration = function() {
  if(this.running)
    throw new Error('Stopwatch is not stopped');

  return (this.endTime - this.startTime) / 1000;
}

const sw = new StopWatch();
