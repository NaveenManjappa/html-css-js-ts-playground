function StopWatch() {
  let duration,startTime,endTime,running = 0;

  Object.defineProperty(this, 'duration', {    
    get: function() { return duration; }
  });

  Object.defineProperty(this, 'startTime', {    
    get: function() { return startTime; }
  });

  Object.defineProperty(this, 'endTime', {    
    get: function() { return endTime; }
  });

  Object.defineProperty(this, 'running', {    
    get: function() { return running; }
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
  this.duration += (this.endTime.getTime() - this.startTime.getTime()) / 1000;
}

StopWatch.prototype.reset = function() {
  this.startTime = null;
  this.endTime = null;
  this.running = null;
  this.duration = 0;
}

StopWatch.prototype.duration = function() {
  if(this.running)
    throw new Error('Stopwatch is not stopped');

  return (this.endTime - this.startTime) / 1000;
}

const sw = new StopWatch();


//Putting the stopwatch into Prototype is a bad idea as it will expose unnecessary properties