class Particle  {
    constructor(x, y,r){


      var options = {
        'restitution':0.4,
    }

    
  


   this.r=r;

   this.body = Bodies.circle(x,y, this.r,options);
   this.width = 100;
   this.height = 100;
   this.image = loadImage("Ball.png");
  
   World.add(world, this.body);
  }
  
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();

    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    noStroke();

    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

   

    

  
  }
  }