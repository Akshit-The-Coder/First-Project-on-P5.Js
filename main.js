preload()
{
}
function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(118 , 200);
    img = loadImage('https://happycoding.io/images/stanley-1.jpg');
}
function draw()
{
    background(255);
  noStroke();

  image(img, 170, 100, 0, 0);

  // Bright red //
  fill(255,0,0);
  circle(50,40,50);
  
  fill(255,0,0);
  circle(590,40,50);
  
  fill(255,0,0);
  circle(590,440,50);

  fill(255,0,0);
  circle(50,440,50);

  fill(122,0,0);
  rect(71,26,500,30);

  fill(122,0,0);
  rect(576,60,30,360);

  fill(122,0,0);
  rect(71,425,500,30);

  fill(122,0,0);
  rect(35,60,30,360);
  
  
}