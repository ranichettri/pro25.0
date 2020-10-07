class Wall {
  constructor(x, y) {
     this.x = x;
      this.y = y;
      this.image = loadImage("images/dustbingreen.png");
      
    }
    display(){
      
    
      imageMode(CENTER);
      image(this.image, this.x, this.y );
    }
  };
  