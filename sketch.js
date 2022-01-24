
var diameter=200;
const colorstring=["red", "orange" ,"gold" ,"green"]

function setup(){
  createCanvas(800,500);
}

function draw(){
  background(225);
  strokeWeight(5)
  var s = second();
  var m = minute();
  var h = hour();
  
  //hours
  //number of green circles
  for (let i = 0; i < h-1; i++){
    fill("green") 
    circle(map(i,0,23,25,475),475,50);
  }
  
  //minutes
  fill(colorstring[floor(m/15)]) // 
  circle(map(h,0,23,25,475),475,50);
  
  // seconds
  //circle shrinking per second, when diameter=50 it falls 
  
  circle(152,60+0.45*map(s, 0, 59, 0, diameter+20),(245-map(s, 0, 59, 0, diameter))); 
  circle(map(s,0,59,150,map(h,0,23,25,475)),160+map(s,0,59,0,475-160),50);
  if (s==59){
    print(m+1)}

  line(0, 150, 125, 175);
  line(180, 175, 800, 100);
  line(125, 175,map(h,0,23,25,475)-25, 470);
  line(180, 175,map(h,0,23,25,475)+25, 475);
 fill(500)
 rect(300,0,400, 60)
 fill(0)    
 text ("seconds: shrinking circle size", 320,20)
 text ("minutes: 0-15 = red, 15-30 = orange, 30-45 = yellow, 45-60=green", 320,35)
 text ("hour: number of circles at the bottom", 320,50)
  


}
