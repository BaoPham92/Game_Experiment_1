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

//variables holding the values of the canvas properties.
var HEIGHT = 500;
var WIDTH = 500;

//Variable witholding messages to be used.
var message = 'Bouncing';

//Object containing properties for player.
var player = {
x:50,
spdX:30,
y:40,
spdY:5,
name:'Player',
};

//Collisions for the objects.

//Array list for all the enemies.
var enemylist = {};

//Object containing properties for enemy's encased in 
//A array.

Enemy('E1',150,350,10,15);
Enemy('E2',250,350,10,-15);
Enemy('E3',250,150,10,-8);
Enemy('E4',100,110,10,15);
Enemy('E5',120,115,10,-15);
Enemy('E6',245,150,10,-8);
Enemy('E7',235,350,10,15);
Enemy('E8',255,350,10,-15);
Enemy('E9',290,355,10,-8);

//Collision system below.

// player : point (x,y)
// enery : point (x,y)

// get distance between player and enemy < 30 => colliding

function getDistanceBetweenEntity(entity1,entity2){ //Return Distance (number)
	var vx = entity1.x - entity2.x;
	var vy = entity1.y - entity2.y;
	return Math.sqrt(vx*vx+vy*vy);
}

function testCollidingEntity(entity1,entity2){ //Return if colliding (True/False)
	var distance = getDistanceBetweenEntity(entity1,entity2);
	return distance < 30;
}


function Enemy(id,x,y,spdX,spdY){
	var enemy3 = {
		x:x,
		spdX:spdX,
		y:y,
		spdY:spdY,
		name:'E',
		id:id,
	};
	enemylist[id] = enemy3;
}


//For now, the below is expressing how we can draw something
//within our canvas and effect how it will be placed.
ctx.font = '30px Arial';
//setInterval is a timer. It will process the function we created
//called update every 40 miliseconds we create in the 2nd parameter.
setInterval(update, 35);

//Function template for any object we decide to call on.
function updateEntity(test){

ctx.fillText(test.name,test.x,test.y);
test.x += test.spdX;
test.y += test.spdY;
console.log("Testing for the placements of Y and X values.")
	
	if(test.x < 0 || test.x > WIDTH){
	console.log(message);
	test.spdX = -test.spdX;
	}

	if(test.y < 0 || test.y > HEIGHT){
	console.log(message);
	test.spdY = -test.spdY;
	}

}
//clearRect is clearing the past fillText we created at every 
//x and y for every object moving leaving no trail or duplicates.
function update(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
// The for loop will run through the enemyList for every key
// that exist. We created the keys by giving every enemy cariable 
// inside the list with an 'id' and assigning the variable
// at the end to the enemyList array we created.
	for(var key in enemylist){
		updateEntity(enemylist[key])

		var isColliding = testCollidingEntity(player,enemylist[key]);
		if(isColliding){
			console.log("Colliding!");
		}
	}
	updateEntity(player);
}





