var r,g,b;
	
	function setup() { 
  createCanvas(800,800);
	background(r, g, b );

}
function draw() {
	//ellipse
		
}

function mouseWheel() {
	r=random(255);
	g=random(255);
	b=random(255);
	background(r,g,b)
}

function mouseDragged(){
	

 ellipse(mouseX,mouseY,90,90);
	fill(r,g,b);
	r=random(255);
	g=random(255);
	b=random(255);

}

