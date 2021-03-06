function throttle(func, time, callback, done) {
  let active, args, docall;
  if(func && time) {
    return function bound() {
      args = arguments;
      docall = true;
      let result = null;
      if(!active) {
        active = true;
        docall = false;
        let start = 0;
        function clock(elapsed) {
          if(!start) { start = elapsed }
          if(elapsed - start > time) {
            active = false;
            if(docall) {
              let result = bound.apply(null, args);
              if(done) { requestAnimationFrame(() => done(result)) }
            }
          }
          else { requestAnimationFrame(clock) }
        }
        requestAnimationFrame(clock);
        result = func.apply(null, arguments);
        args = docall = null;
        if(callback) { requestAnimationFrame(() => callback(result)) }
      }
      return result;
    }
  }
  throw new Error("Invalid arguments");
}

export { throttle };
export default throttle;
