/**
		Project 1 
		by Taylor Malligan
**/

var state;
var fishStatic = 0;
var fish1 = 1;
var fish2 = 2;
var fish3 = 3;
var fish4 = 4;
var fish5 = 5;


let r;
let g;
let b;

let col = {
  
  r: 250,
  g: 76,
  b: 206
};


let dot = {
  x: 150,
  y: 200,
  size: 20
};

// Rect 1
rect1Left = 100;
rect1Width = 200;
rect1Top = 400;
rect1Height = 50;

// Rect 2
rect2Left = 300;
rect2Width = 100;
rect2Top = 100;
rect2Height = 60;

// Rect 3
rect3Left = 250;
rect3Width = 300;
rect3Top = 200;
rect3Height = 100;


function preload() {
  // fish[0] = loadImage('assets/finalfish.jpg'); //loading the fish image
  // fish[1] = loadImage('assets/finalleftfish.jpg');

  fishLeft = loadImage('assets/finalfish.jpg'); //loading the fish image
  fishRight = loadImage('assets/finalright.jpg');
  

}

function setup() {

	imageMode(CENTER);

 	createCanvas(1000, 1000);
	frameRate(4);
	background(20,250,230);
	smooth();
	
}


function draw() {
	background(0);
	if (state == fishStatic) {
	     staticFish(); 
	 	}
	 else if (state == fish1) {
	 	drawFish1();
	 	
	 	}
	else if (state == fish2) {
	  	drawFish2();

	 }
	 else if(state == fish3){
	 	drawFish3();

	 }
	 else if (state == fish4){
	 	drawFish4();
	 }
	  else if (state == fish5){
	 	drawFish5();
	 }

	else{
	  	staticFish();
	  	}

}


// static state function
function staticFish(){
	var rainbow = 0;
	var c;
	c = 'black';
	//colorMode(HSB);
	background(244, 14, 147 );

	dot.x = random(0, width);
	dot.x = random(0, width);
  	dot.y = random(0, 350);
  	dot.size = random(3, 88);
  	col.r = random(9, 59);
  	col.g = random(232, 15);
  	col.b = random(242, 166);
  	fill(col.r, col.g, col.b);
  	noStroke();
  	ellipse(dot.x, dot.y, dot.size);

  	image(fishLeft,mouseX, mouseY, fishLeft.width/3, fishLeft.height/3);

  	textSize(40);
	fill(255 );
	text('Welcome!',200, 300);

 //  	if(rainbow == 1) {
	// 	var h = map(mouseX, 0, width, -30, 1000);
	// 	c = color(h, map(mouseY, 0, height, 100, 20), 100);
	// }
	// stroke(c);
	// fill(c);
	// ellipse(mouseX, mouseY, 5);
	
	// // Rainbow Brush
	// rect(20, 20, 30, 20);
	// for(var i = 1; i < 30; i++) {
	// 	stroke(i*10, 100, 100);
	// 	line(20+i, 21, 20+i, 39);
	// }
	
	// if(mouseIsPressed) {
	// 	if(mouseX > 500 && mouseX < 550 && mouseY > 530 && mouseY < 550) {
	// 		rainbow = 1;
	// 	}
	}

  

	//grass
  // for (let x = 0; x < width; x += 20) {
  //   for (let y = 0; y < height; y += 20) {
  //     triangle(x, y + 350, x + 10, y + 330, x + 20, y + 30);
  //     fill(55, 143, 80);
  //     noStroke();
  //   }
  // }

//state 1
function drawFish1(){
	background(250, 220, 99);
	dot.x = random(0, width);
	dot.x = random(0, width);
  	dot.y = random(0, 900);
  	dot.size = random(3, 88);
  	col.r = random(9, 59);
  	col.g = random(232, 15);
  	col.b = random(242, 166);
  	fill(col.r, col.g, col.b);
  	noStroke();
  	ellipse(dot.x, dot.y, dot.size);

  	textSize(40);
	fill(255 );
	text('Which direction is the fish going?',200, 300);

	//image(fishRight,500,400,fishRight.width/4, fishRight.height/4);
	//image(fishLeft,500,400,fishLeft.width/4, fishLeft.height/4);

	if (keyCode == RIGHT_ARROW) {
		image(fishRight,mouseX, mouseY, fishRight.width/4, fishRight.height/4);
	} else if (keyCode == LEFT_ARROW) {
		image(fishLeft, mouseX, mouseY,fishLeft.width/4, fishLeft.height/4);
	}
}

//state 2
function drawFish2(){
	background(76, 240, 240 );
	dot.x = random(0, width);
	dot.x = random(0, width);
  	dot.y = random(0, 900);
  	dot.size = random(3, 88);
  	col.r = random(9, 59);
  	col.g = random(232, 15);
  	col.b = random(242, 166);
  	fill(col.r, col.g, col.b);
  	noStroke();
  	ellipse(dot.x, dot.y, dot.size);


	let offset = 0;
	let easing = 0.5;

	image(fishLeft,450,450, fishLeft.width/3, fishLeft.height/3);

	//image(fishLeft, fishLeft.width/4, fishLeft.height/4); // Display at full opacity
	let dx = mouseX - fishRight.width/3 - offset;
	offset += dx * easing;
	tint(255, 127); // Display at half opacity
	image(fishLeft, offset, 430,fishLeft.width/3, fishRight.height/3);
	noTint();


	textSize(40);
	fill(255 );
	text('What colour is the background?',100, 2000);
}

//state 3
function drawFish3(){
	let frame = 0;

	if (frame > 120) {              
    	noLoop();                     
    	background(0);     
          
  	}
 	 else {                          
    	background(37, 162, 212 );   
    	strokeWeight(20);
    	// fill(33, 8, 247  
    	stroke(181, 217, 252 );           
    	line(mouseX, 0, mouseX,1000);
    	line(0, mouseY, 1000, mouseY);
    	frame++;
  }
  	tint(255, 127);
	image(fishLeft,250,250, fishLeft.width/6, fishLeft.height/6);
 	image(fishLeft,300,600, fishLeft.width/6, fishLeft.height/6);
 	image(fishRight,800,300, fishRight.width/6, fishLeft.height/6);
 	image(fishRight,600,700, fishRight.width/6, fishLeft.height/6);

 	noTint();
  	noStroke();
	textSize(80);
	fill(120, 250, 99 );
	text('" we may all be different',100, 300);
	textSize(87);
	fill(164, 234, 248  );
	text('but in this school',170, 390);
	fill(247, 157, 252  );
	text('we swim together "', 150, 480);
 
 
}

//state 2
function drawFish4(){
	textSize(40);
	fill(255 );
	text('Count the fishies!',400, 300);
  	rotate(radians(frameCount));

  	image(fishLeft, 100,300, fishLeft.width/4, fishRight.height/4);
  	image(fishLeft, 200, 400, fishLeft.width/4, fishLeft.height/4);
  	image(fishLeft, 300,300, fishLeft.width/4, fishRight.height/4);
  	image(fishLeft, 500, 500, fishLeft.width/4, fishLeft.height/4);
  	image(fishLeft, 600,400, fishLeft.width/4, fishLeft.height/4);
  	image(fishLeft, 700, 400, fishLeft.width/4, fishLeft.height/4);

  	image(fishLeft, 100,200, fishLeft.width/4, fishRight.height/4);
  //	image(fishRight, 400, 400, fishRight.width/4, fishRight.height/4);
  	image(fishLeft, 600,300, fishLeft.width/4, fishRight.height/4);
  //	image(fishRight, 900, 500, fishRight.width/4, fishRight.height/4);
  	image(fishLeft, 800,500, fishLeft.width/4, fishRight.height/4);
  //	image(fishRight, 700, 300, fishRight.width/4, fishRight.height/4);


  	image(fishLeft, 400,600, fishLeft.width/4, fishRight.height/4);
  	image(fishLeft, 600, 500, fishLeft.width/4, fishLeft.height/4);
  	image(fishLeft, 400,600, fishLeft.width/4, fishRight.height/4);
  	image(fishLeft, 600, 500, fishLeft.width/4, fishLeft.height/4);
  	image(fishLeft, 800,500, fishLeft.width/4, fishLeft.height/4);
  	image(fishLeft, 1000, 500, fishLeft.width/4, fishLeft.height/4);

  	image(fishLeft, 400,800, fishLeft.width/4, fishLeft.height/4);
  	image(fishLeft, 600, 900, fishLeft.width/4, fishLeft.height/4);
  	image(fishLeft, 400,1000, fishLeft.width/4, fishLeft.height/4);
  	image(fishLeft, 600, 700, fishLeft.width/4, fishLeft.height/4);
  	image(fishLeft, 800,500, fishLeft.width/4, fishLeft.height/4);
  	image(fishLeft, 1000, 300, fishLeft.width/4, fishLeft.height/4);


  	// image(fishLeft, 200,800, fishLeft.width/4, fishRight.height/4);
  	// image(fishLeft, 400, 900, fishLeft.width/4, fishRight.height/4);
  	// image(fishLeft, 400,1000, fishLeft.width/4, fishRight.height/4);
  	// image(fishRight, 900, 700, fishRight.width/4, fishRight.height/4);
  	// image(fishLeft, 1000,500, fishLeft.width/4, fishRight.height/4);
  	// image(fishRight, 800, 300, fishRight.width/4, fishRight.height/4);
  	
  	



}

function drawRects() {
  // draw an red at center
  noFill(255,0,0);
  stroke(0,255,0);
  strokeWeight(2);
  
  rect(rect1Left,rect1Top,rect1Width,rect1Height);
  rect(rect2Left,rect2Top,rect2Width,rect2Height);
  rect(rect3Left,rect3Top,rect3Width,rect3Height);
}

function isMouseInRect(rectL, rectT, rectW, rectH) {
  // check X first
  if( mouseX >= rectL && mouseX <= rectL + rectW ) {
    if( mouseY >= rectT && mouseY <= rectT + rectH ) {
      // must satisfy *both* conditions
      return true;
    }
  }

  return false;
}





//state 2
function drawFish5(){
  	let x = mouseX;
  	let y = mouseY;
  	let ix = width - mouseX;  // Inverse X
  	let iy = height - mouseY; // Inverse Y
  	background(238, 102, 226 );
  	fill(130, 238, 8);
  	ellipse(x, height/2, y, y);
  	fill(254, 248, 46 );
  	ellipse(ix, height/2, iy, iy);

	image(fishLeft, 300,300, fishLeft.width/4, fishLeft.height/4);

	image(fishRight, 600,600, fishRight.width/6, fishRight.height/6);
	image(fishRight, 700,350, fishRight.width/8, fishRight.height/8);
	//stroke(242, 147, 62);
	strokeWeight(10);
	// rect(100, 140, 380,40);
	// rect(450, 600, 510,40);

	textSize(40);
	fill(255 );
	text('What colour is the circles?',400, 100);
}	
	
function mousePressed() {
 // image(fishLeft, fishLeft.width/4, fishRight.height/4);

}


function keyPressed() {
  if (key == '0') {
  	state = staticFish;
  }
  else if (key == '1') {
  	state = fish1;
  }
  else if(key =='2'){
  	state = fish2;
  	}
  else if(key == '3'){
  	state = fish3;
  	}
  else if(key == '4'){
  	state = fish4;

  }	
  else if(key == '5'){
  	state = fish5;
	}
}

