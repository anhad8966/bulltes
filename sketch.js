
var wall, thickness;
var wall2, thickness2;
var wall3, thickness3;
var wall4, thickness4;

var bullet,speed, weight,bullet2,bullet3,bullet4;

function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
  weight=random(30,52)


  thickness=random(22,83)
  thickness2=random(22,83)
  thickness3=random(22,83)
  thickness4=random(22,83)




  
    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
	bullet.shapeColor=color(255);
	
	bullet2=createSprite(100, 200, 50,5);  
    bullet2.velocityX = speed;
	bullet2.shapeColor=color(255);
	
	bullet3=createSprite(150, 200, 50,5);  
    bullet3.velocityX = speed;
	bullet3.shapeColor=color(255);
	
	bullet4=createSprite(200, 200, 50,5);  
    bullet4.velocityX = speed;
	bullet4.shapeColor=color(255);
	
	

 
  	
    
	wall=createSprite(1200, 200, thickness, height/2);  
	wall.shapeColor=color(230,230,230);
	
	wall2=createSprite(1200, 800, thickness, height/2);  
	wall2.shapeColor=color(230,230,230);
	
	wall3=createSprite(1200, 1400, thickness, height/2);  
	wall3.shapeColor=color(230,230,230);
	
	wall4=createSprite(1200, 2000, thickness, height/2);  
    wall4.shapeColor=color(230,2600,230);
  
}


function draw() {
  background(0);  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		wall2.shapeColor=color(255,0,0);
		wall3.shapeColor=color(255,0,0);
		wall4.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
		wall2.shapeColor=color(0,255,0);
		wall3.shapeColor=color(0,255,0);
		wall4.shapeColor=color(0,255,0);
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}


