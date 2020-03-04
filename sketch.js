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


var dragging = false; //to drag image
var rollover = false; 

var x, y, w, h;          // Location and size
var offsetX, offsetY; //for dragging

let myFont;

function preload() {
  // fish[0] = loadImage('assets/finalfish.jpg'); //loading the fish image
  // fish[1] = loadImage('assets/finalleftfish.jpg');

  fishLeft = loadImage('assets/finalleftfish.jpg'); //loading the fish image
  fishRight = loadImage('assets/finalright.jpg');

  myFont = loadFont('assets/GoodUnicornRegular.otf');

}
//setup
function setup() {

	imageMode(CENTER);

 	createCanvas(1000, 1000);
	frameRate(4);
	background(20,250,230);
	smooth();

  textFont(myFont);
	
}

//to draw images
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

  textSize(90);
	fill(255);
	text('Welcome Friends!',100, 250);
  textSize(35);
  text('Key: \n Press "1" to Move the Fishies \n Press "2" to Drag & Drop \n Press "3"for Coloring \n Press "4" to Count Fishies \n Press "5" for Circles \n Press "0" for Home Page' ,100, 550);
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

  textSize(80);
	fill(244, 14, 147);
	text('Which direction is the fish going?',100, 250);



  textSize(30);
  fill(244, 14, 147);
  text('** Use the mouse to move the fishie! \n To change directions, use the < > arrows **',100, 700);


	// image(fishRight,500,400,fishRight.width/4, fishRight.height/4);
	//image(fishLeft,500,400,fishLeft.width/4, fishLeft.height/4);

  // var movearound= 400;
  // var moveupdown = 400;


	if (keyCode == RIGHT_ARROW) {
	image(fishRight,mouseX, mouseY, fishRight.width/4, fishRight.height/4);
  }
  else if (keyCode == LEFT_ARROW) {
		image(fishLeft, mouseX, mouseY,fishLeft.width/4, fishLeft.height/4);
    }

 }     
   

function mousePressed() {
 if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }

}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}

//state 2 - drag the scale onto the fish
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


	 image(fishLeft,400,400, fishLeft.width/3, fishLeft.height/3);

    x = 820;
    y = 200;
    w = 100;
    h = 130;


    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
      rollover = true;
    } 
    else {
      rollover = false;
    }
    
    // Adjust location if being dragged
    if (dragging) {
      x = mouseX + offsetX;
      y = mouseY + offsetY;
    }
  noStroke();
  // Different fill based on state
  if (dragging) {
    fill (250, 236, 22);
  } else if (rollover) {
    fill(249, 168, 16);
  } else {
    fill(249, 30, 16);
  }
  ellipse(x, y, w, h,);

  textSize(63);
  fill(244, 14, 14 );
  text('Drag the scale onto the fish!',100, 100);

}


//state 3 -- colouring state
function drawFish3(){

  var brush = color(0,0,0); // create the brush
  var rainbow = 0;
  //colorMode(HSB);
  background(255); 

  if (mouseIsPressed) {
    // Reset Button
    if (mouseX > 20 && mouseX < 80 && mouseY > 300 && mouseY < 330)
      background(255);
    
    if (dist(30, 50, mouseX, mouseY) < 10) {
      brush = color(120, 100, 100);
      rainbow = 0;
    }
    if (mouseX > 20 && mouseX < 40 && mouseY > 100 && mouseY < 120) {
      rainbow = 1;
    } else if (mouseX > 20 && mouseX < 40 && mouseY > 140 && mouseY < 160) {
      rainbow = 2;
    }
  }

  // Console Panel
  fill(150);
  strokeWeight(1);
  rect(0, 0, 100, height);

  // Colour Buttons
  fill(120, 100, 100);
  ellipse(30, 50, 20);

  rect(20, 100, 20, 20);
  for (var i = 0; i < 18; i++) {
    stroke(i * 16, 100, 100);
    line(i + 21, 101, i + 21, 119);
  }

  rect(20, 140, 20, 20);
  for (var i = 0; i < 18; i++) {
    stroke(i * 16, 100, 100);
    line(20, i+141, 40, i+141);
  }
    
  // Reset Button
  fill(14, 230, 244 );
  rect(20, 300, 60, 30);
  fill(0);
  textSize(20);
  noStroke();
  text("RESET", 30, 320);

  // Draw
  if (rainbow == 1) {
    brush = color(map(mouseX, 200, width, 0, 360), 200, 200);
  } else if (rainbow == 2) {
    brush = color(map(mouseY, 10, height, 0, 360), 200, 200);
  }
  fill(brush);
  stroke(brush);
  strokeWeight(3);
  if (mouseIsPressed)
    line(pmouseX, pmouseY, mouseX, mouseY);


 	noTint();
  	noStroke();
	textSize(80);
	fill(120, 250, 99 );
	text('" we may all be different',110, 300);
	textSize(87);
	fill(164, 234, 248  );
	text('but in this school',180, 390);
	fill(247, 157, 252  );
	text('we swim together "', 160, 480);
  
  textSize(30);
  fill(246, 31, 122);
  text('** Press down on the mouse to draw! **', 600,100)
 
 //colorMode();
}


//state 4 - count the fist state - fish on rotation
function drawFish4(){
  //colorMode(HSB);
	textSize(60);
	fill(255 );
	text('Count the fishies!',400, 200);
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





//state 5 - colour circles
function drawFish5(){
    noStroke();
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
	image(fishRight, 720,300, fishRight.width/8, fishRight.height/8);
	//stroke(242, 147, 62);
	strokeWeight(10);
	// rect(100, 140, 380,40);
	// rect(450, 600, 510,40);

	textSize(60);
	fill(31, 233, 246 );
	text('What colour are the circles?',350, 100);
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

