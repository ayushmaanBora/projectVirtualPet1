//Create variables here
var readStock;
var writeStock;
var foodS;
var database;

function preload()
{
  //load images here
  dogImg = loadImage ("images/dogImg.png");
  dogImg1 = loadImage ("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(300,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.3;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);


}

function readStock(data){


  foodS = data.val();

}
 function writeStock(x) {
  if(x<0){
    x=0;
  
    }
    else {
      x=x-1
    }
    database.ref('/').update({
      Food : x 
    })
 }
  

  

function draw() {  
  background("grey")
 textSize(25);
 stroke("blue") ;
 text("Note : Press UP Arrow Key to feed Milk",170,170);

  text("Food Remaining :  "+ foodS ,200,200)


if (keyWentDown("up")){
 
  writeStock(foodS);
  dog.addImage(dogImg1);
}


  drawSprites();
  //add styles here





}





