
Function.prototype.inherits = function(parentClass){
  function Surrogate() {}
  Surrogate.prototype = parentClass.prototype ;
  let childClass = this;
  childClass.prototype = new Surrogate();
  childClass.prototype.constructor = childClass;
};

Function.prototype.inherits2 = function(parentClass){
  let childClass = this;
  this.prototype = Object.create(parentClass.prototype);
  childClass.prototype.constructor = childClass
};

function MovingObject (speed, startingLocation) {
  this.speed = speed;
  this.startingLocation = startingLocation;
}

MovingObject.prototype.stateSpeed = function(){
  console.log(`I am going ${this.speed} mph and I started at ${this.startingLocation}`);
};


function Ship (speed, startingLocation) {
  MovingObject.call(this, speed, startingLocation);
}

Ship.inherits(MovingObject);

Ship.prototype.changeDirection = function(direction) {
  console.log(`I am now going ${direction} at ${this.speed} mph `);
};




function Asteroid (speed, startingLocation) {
  MovingObject.call(this, speed, startingLocation);
}

Asteroid.inherits(MovingObject);

Asteroid.prototype.rocks = function(){
  console.log('I am a huge rock');
};
