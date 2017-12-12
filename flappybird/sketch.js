var bird;
var pipes = [];
function setup() {
  createCanvas(700, 500);
	
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
	
fill(255,255,255)
	textSize(32);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	
}
function mousePressed() {
    bird.up();
    //console.log("SPACE");
}

function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
		stroke(0)
    fill(255,200,0);
	
    ellipse(this.x, this.y, 32, 32);
		fill(100,100,0,255)
		triangle(this.x+25,this.y+10,this.x+17,this.y,this.x,this.y);
		triangle(this.x-25,this.y-10,this.x-17,this.y,this.x,this.y);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
		var s = second()
		stroke(255,255,255);
    fill(0);
    if (this.highlight) {
			fill(255,0,0);
			textSize(33);
		text("Game Over. Your Score Is", 200,200);
				text(s, 300,200);
			restGame();
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}


