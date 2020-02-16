var a;
var bodies = [];

function setup() {
  createCanvas(400, 400);
  a = new Attractor();
  for (var i = 0; i < 100; i++){
      b = new Body();
      bodies[i] = b;
  }
  stroke(0);
  background(220);
}

function draw() {
  
  a.show();
  
  for (var i = 0; i < 100; i++){
     bodies[i].show(); 
     bodies[i].show();
     var force = a.attract(bodies[i]);
     bodies[i].addForce(force);
     bodies[i].update();
  }
}