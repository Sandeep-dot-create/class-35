//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
function preload()
{
	dog = loadImage("dogImg.png");
  dog1 = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  var CreateSprite = dog;
  dog.addImage(dog);




  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);
}
  drawSprites();
  text("food remaining",150,30);
  textSize(20);
fill("black");
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food: x
  })
}
