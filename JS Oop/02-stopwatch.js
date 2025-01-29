function StopWatch() {
  const state = { status: false, startTime: null, endTime: null };
  

  this.start = function() {
    console.log(state);
    if(state.status)
      throw new Error('Stopwatch is already started');
    state.status = true;
    state.startTime = new Date();
  }

  this.stop = function() {
    if(!state.status)
      throw new Error('Stopwatch is not started yet');
    state.status = false;
    state.endTime = new Date();
  }

  Object.defineProperty(this, 'duration', {
    get: function() {
      if(state.status)
        throw new Error('Stopwatch not stopped yet');
  
      return (state.endTime - state.startTime) / 1000;
    }
  });
}

const sw = new StopWatch();