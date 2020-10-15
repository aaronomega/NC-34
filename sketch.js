//Create variables here
var Dog, dog_IMG, happydog_IMG, dataBase, foodS, foodStock;
function preload()
{
  dog_IMG = loadImage("images/dogImg.png");
  happydog_IMG = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(900, 1500);
  dataBase = firebase.database();

  foodstock = dataBase.ref('food');
  foodstock.on("value",readStock);
 
  Dog = createSprite(250,250,50,50);
  Dog.addImage(dog_IMG);
   Dog.scale=0.5;
}


function draw() {  

  background(46, 139, 87);
   

  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(happydog_IMG);
   
}
 drawSprites(); 

 fill("black");
 text("food remaining =" + foodS,300,80 );
 fill("brown");
text("Note:press up arrow key to feed the dog",300,40);

}

function readStock(data){
  foodS= data.val();
  
}
function writeStock(x){
 
  if(x<=0){ 
    x=0;
   }
  else{ 
    x=x-1;
   } 
  dataBase.ref('/').update({
     food:x }); 
    
}

