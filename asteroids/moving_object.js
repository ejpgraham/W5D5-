
const MovingObject = function(options){
  this.pos = options[pos];
  this.vel = options[vel];
  this.radius = options[radius];
  this.color = options[color];

}

MovingObject.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.vel[0], //The x coordinate of the arc's center.
    this.vel[1], // The y coordinate of the arc's center.
    this.radius, // The arc's radius.
    0,            // startAngle
    2 * Math.PI, // endAngle
    false       // anticlockwise ?
  );

  ctx.fill();

};

MovingObject.prototype.move = function(){
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  

};

module.exports = MovingObject;
