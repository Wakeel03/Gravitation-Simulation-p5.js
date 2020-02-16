function Body() {
   this.location = createVector(random(0, 400), random(0, 400));
   this.radius = 5;
   this.velocity = createVector(random(-5, 5), random(-5, 5));
   this.acceleration = createVector(0, 0);
  
   this.show = function() {
      fill(random(0, 255), random(0, 255), random(0, 255));
      circle(this.location.x ,this.location.y, this.radius); 
   }
  
   this.update = function() {
      this.velocity.add(this.acceleration);
      this.location.add(this.velocity);
   }
  
   this.addForce = function(force) {
       this.acceleration = force;
   }
}

function Attractor() {
  this.mass = 50;
  this.location = createVector(random(0, 400), random(0, 400));
  this.radius = 30;
  
  this.show = function() {
     fill(0);
     circle(this.location.x, this.location.y, this.radius);
  }
  
  this.attract = function(body) {
       var dir = p5.Vector.sub(this.location, body.location);
       var d = dir.mag();
       var dist = constrain(d, 2, 10);
       dir.normalize();
       var mag = this.mass / (dist * dist);
       var force = dir.mult(mag);
       return force;
  }
}