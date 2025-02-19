const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius){
    _radius.set(this,radius);

    _move.set(this,() => {
      console.log('Move',this);
    })
  }

  draw() {
    console.log(_radius.get(this));
    _move.get(this)();
    console.log('draw');
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if(value <= 0) throw new Error('invalid radius');
    _radius.set(this,value);
  }
}

const c = new Circle(1);
console.log(c);
c.draw();
c.radius = 90;
console.log(c.radius);