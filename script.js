/*  Base syntax we will be using regarding our game structure.
 
//1. Modify Settings =
ctx.font = '30px Arial';        //Font used
ctx.fillStyle = 'red';          //Color of the text and forms
ctx.globalAlpha = 0.5;          //Transparency 0 = invisble, 1 = visible
 
//2. Draw something ()
ctx.fillText('Hello',50,50);    //Write text ... ctx.fillText('text',x,y);
ctx.fillRect(50,50,100,100);    //Draw rectangle ... ctx.fillRect(startX,startY,width,height);
ctx.clearRect(75,75,100,100);   //Clear Canvas ... ctx.fillRect(startX,startY,width,height);
 
x += spdX;      same than       x = x +spdX
 
End of Comment Section */

// The ctx variable represents the canvas.
//We can use this in order to draw things.

var ctx = document.getElementById("ctx").getContext("2d")


//Player.
var x = 50;
var spdX = 30;
var y = 40;
var spdY = 5;
var name = 'P'

var HEIGHT = 500;
var WIDTH = 500;

//Enemy.
var enemy_x = 150;
var enemy_spdX = 10;
var enemy_y = 350;
var enemy_spdY = 15;
var enemy_name = 'E'

var HEIGHT = 500;
var WIDTH = 500;

var message = 'Bouncing';

//For now, the below is expressing how we can draw something
//within our canvas and effect how it will be placed.
ctx.font = '30px Arial';
//setInterval is a timer. It will process the function we created
//called update every x seconds we create in the 2nd parameter.
setInterval(update, 40);

function update(){
//Player.
ctx.fillText(name,x,y);
x += spdX;
y += spdY;
console.log("Testing for the placements of Y and X values.")
	
	if(x < 0 || x > WIDTH){
	console.log(message);
	spdX = -spdX;
	}

	if(y < 0 || y > HEIGHT){
	console.log(message);
	spdY = -spdY;
	}

//Enemy.
ctx.fillText(enemy_name,enemy_x,enemy_y);
enemy_x += enemy_spdX;
enemy_y += enemy_spdY;
console.log("Testing for the placements of Y and X values.")
	
	if(enemy_x < 0 || enemy_x > WIDTH){
	console.log(message);
	enemy_spdX = -enemy_spdX;
	}

	if(enemy_y < 0 || enemy_y > HEIGHT){
	console.log(message);
	enemy_spdY = -enemy_spdY;
	}

}





