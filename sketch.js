let bird;
let pipes = [];

function preload(){
  img = loadImage("1.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  bird = new Bird();
  pipes.push(new Pipe());
  windowResized();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  bird.update();
  bird.show();
  
  if(frameCount % 80 == 0){
    pipes.push(new Pipe());
  }
  
  for(let i = pipes.length-1; i >= 0; i--){
    pipes[i].show();
    pipes[i].update();
    
    if(pipes[i].hits(bird)){
      console.log("hit");   
    }
    
    if(pipes[i].offScreen()){
      pipes.slice(i, 1);
    }
  }
}

function keyPressed(){
  if(key == ' '){
    bird.up();
  }
}

function mousePressed(){
  if(mousePressed){
    bird.up();
  }
}
