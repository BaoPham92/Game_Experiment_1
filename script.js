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

//Object containing properties for player.
var player = {
x:50,
spdX:30,
y:40,
spdY:5,
name:'P',
};

//Array list for all the enemies.
var enemylist = {};

//Object containing properties for enemy's.
var enemy = {
x:150,
spdX:10,
y:350,
spdY:15,
name:'E1',
id:'E1',
};
enemylist['E1'] = enemy;

var enemy2 = {
x:250,
spdX:10,
y:350,
spdY:-15,
name:'E2',
id:'E2'
};
enemylist['E2'] = enemy2;

var enemy3 = {
x:50,
spdX:15,
y:350,
spdY:-15,
name:'E3',
id:'E3'
};
enemylist['E3'] = enemy3;

//Variable witholding messages to be used.
var message = 'Bouncing';

//For now, the below is expressing how we can draw something
//within our canvas and effect how it will be placed.
ctx.font = '30px Arial';
//setInterval is a timer. It will process the function we created
//called update every 40 miliseconds we create in the 2nd parameter.
setInterval(update, 40);

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
	}
	updateEntity(player);
}




