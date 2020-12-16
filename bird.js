function Bird(){
  this.y = width/2;
  this.x = 70;
  
  this.gravity = 0.5;
  this.lift = -15;
  this.velocity = 0;
  
  this.show = function(){
    image(img, this.x, this.y,  50,  50);
  }
  
  this.up = function(){
    this.velocity += this.lift
    print(this.velocity);
  }
  
  this.update = function(){
    this.velocity += this.gravity;
    this.velocity *= 0.95;
    this.y += this.velocity;
    
    
    if(this.y > height){
      this.y = height;
      this.velocity = 0;
    }
    
    if(this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }
  }
}