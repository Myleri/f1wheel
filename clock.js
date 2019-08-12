/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

 var img = null;

function load_clock_graphics()
{
  if (img == null) {
    img = loadImage("image.png");
  }
}

function draw_clock_img(hour)
{
    colorMode(HSB, 360, 100, 100, 1);
    var day_color = [217, 68, 100];
    var night_color = [217, 68, 0];

    var background_color = [0, 0, 0];
    background_color[1] = map(hour, 0, 6, day_color[1], night_color[1])
    

  if(hour > 16 && hour < 23){
    background_color[0] = map(hour, 16, 20, day_color[0], 360)

    background_color[2] = map(hour, 16, 20, day_color[2], night_color[2])
    
  }
  else if(hour > 4 && hour < 10){
    background_color[0] = map(hour, 4, 8, 360, night_color[0])

    background_color[2] = map(hour, 4, 10, night_color[2], day_color[2])
  }
  if (hour > 8 && hour < 17) {
    background_color = [217, 68, 100];
  }

  else if(hour >23 && hour < 4) {
    background_color = [217, 68, 0];
  }
  background(background_color);

    image (img, 0, 0);

    colorMode(RGB, 255, 255, 255, 1);

}

function draw_clock(hour, minute, second, millis, alarm) {

  textSize(20);
  text("Hour: "   + hour, 18, 30);
  text("Minute: " + minute, 18, 50);
  text("Second: " + second, 18, 70);
  text("Millis: " + millis, 18, 90);


//function clockDisplay(){
   
   fill (0,0);

    //REV LIMITER
    var startX = 220;
    var startY = 78;
    var height = 25;
    var width = 25;
    var spacing = 30;

    //RECT READER
    var hourBarWidth   = map(hour, 200, 23, 75, 100);
    var minuteBarWidth = map(minute, 200, 59, 270, 75);
    var secondBarWidth = map(second, 480, 59, 270, 75);

    var starting_color = [0, 255, 0];
    var ending_color = [255, 0, 0];

    var second_color = [0, 0, 0];
    second_color[0] = map(second, 0, 59, starting_color[0], ending_color[0])
    second_color[1] = map(second, 0, 59, starting_color[1], ending_color[1])
    second_color[2] = map(second, 0, 59, starting_color[2], ending_color[2])

    var minute_color = [0, 0, 0];
    minute_color[0] = map(minute, 0, 59, starting_color[0], ending_color[0])
    minute_color[1] = map(minute, 0, 59, starting_color[1], ending_color[1])
    minute_color[2] = map(minute, 0, 59, starting_color[2], ending_color[2])

    var hour_color = [0, 0, 0];
    hour_color[0] = map(hour, 0, 23, starting_color[0], ending_color[0])
    hour_color[1] = map(hour, 0, 23, starting_color[1], ending_color[1])
    hour_color[2] = map(hour, 0, 23, starting_color[2], ending_color[2])

   fill(128,100,100);


    //else {
     //   fill(0,255,0);
     //   rect(480, 181, 220, 100);
   // }

   noStroke();
  // is alarm going off in next 20 seconds
    fill (0, 255, 0);
    stroke (0, 255, 0);
    ellipse(220, 309, 25, 25);
  if (alarm > 0) {
    fill (0, 255, 0);
    stroke (0, 255, 0);
    ellipse(220, 309, 25, 25);
    if (alarm < 20.0) {
    fill (255, 0, 0);
    stroke (255, 0, 0);
    ellipse(220, 309, 25, 25);
      
    }
}


   

//HOUR BAR OUTSIDE
    if (hour > 23) {
        fill (0, 255, 0);
     }
     else {
        fill (255, 255, 255);
    }
    fill (hour_color);
    rect(250, 181, 225, 100);

//HOUR BAR
    fill ('black');
    stroke ('black');
    rect(260, 194, 205, 75);

//pit lap alarm outside
    fill(0,255,0);
    rect(480, 181, 220, 100);
    if (alarm == 0){
    if (second % 2 == 0) {

        fill(255,0,0);
        rect(480, 181, 220, 100);   
    }

   else{
        fill(0,255,0);
        rect(480, 181, 220, 100);
        }
    }


 //PIT LAP ALARM
    fill ('black');
    stroke ('black');
    rect(490, 194, 200, 75);

//MINUTE BAR OUTSIDE
    stroke('black');
    if (minute > 59) {
        fill (0, 255, 0);
     }
     else {
        fill (255, 255, 255);
    }
    fill (minute_color);
    rect(250, 298, 225, 65);

 //MINUTE BAR
    fill ('black');
    stroke ('black');
    rect(260, 308, 205, 45);

//SECOND BAR OUTSIDE
    stroke('black');
    if (second > 59) {
        fill (0, 255, 0);
     }
     else {
        fill (255, 255, 255);
    }
    fill(second_color);
    rect(480, 298, 220, 65);

 //SECOUND BAR
    fill ('black');
    stroke ('black');
    rect(490, 308, 200, 45);

  strokeWeight(0);

 //ONE 
    stroke('black')
     if (millis > 100) {
        fill (0, 255, 0);
     }
     else {
        fill(255, 255, 255);
     }
    ellipse(startX, startY+40, width, height);

    ellipse(spacing*17+startX, startY+40, width, height);

 //TWO
     if (millis > 200) {
        fill (30, 230, 0);
     }
     else {
        fill(255, 255, 255);
     }
    ellipse(spacing+startX, startY+30, width, height);

    ellipse(spacing*16+startX, startY+30, width, height);

 //THREE
     if (millis > 300) {
        fill (40, 220, 0);
     }
     else {
        fill(255, 255, 255);
     }
    ellipse(spacing*2+startX, startY+20, width, height);

    ellipse(spacing*15+startX, startY+20, width, height);

 //FOUR
    if (millis > 400) {
        fill (50, 200, 0);
     }
     else {
        fill(255, 255, 255);
     }
    ellipse(spacing*3+startX, startY+10, width, height);

    ellipse(spacing*14+startX, startY+10, width, height);

 //FIVE
    if (millis > 500) {
        fill (50, 200, 0);
     }
     else {
        fill(255, 255, 255);
     }
    ellipse(spacing*4+startX, startY+5, width, height);

    ellipse(spacing*13+startX, startY+5, width, height);

 //SIX
    if (millis > 600) {
        fill (100, 150, 0);
     }
     else {
        fill(255, 255, 255);
     }
    ellipse(spacing*5+startX, startY, width, height);

    ellipse(spacing*12+startX, startY, width, height);

 //SEVEN
    if (millis > 700) {
        fill (150, 100, 0);
     }
     else {
        fill(255, 255, 255);
     }
    ellipse(spacing*6+startX, startY-5, width, height);

    ellipse(spacing*11+startX, startY-5, width, height);

//EIGHT
        if (millis > 800) {
        fill (200, 50, 0);
     }
     else {
        fill(255, 255, 255);
     }
    ellipse(spacing*7+startX, startY-10, width, height);

    ellipse(spacing*10+startX, startY-10, width, height);

//NINE
    if (millis > 900) {
        fill (255, 0, 0);
     }
     else {
        fill(255, 255, 255);
     }
    ellipse(spacing*8+startX, startY-10, width, height);

    ellipse(spacing*9+startX, startY-10, width, height);

   fill(255,255,255);
   textFont(fontDigi);
   textSize(60);
   text(hour, 330, 250);
   textSize(30);
   text("PIT NEXT LAP" , 510, 240);
   text(minute, 350, 340);
   text(second, 580, 340);
   textSize(50);
   fill(255,255,255);
   text(millis, 435, 125);
}




//}
      // var pos_x = map(millis, 0, 999, 0, width);
    // print(millis);
    //wheel image
    //push()
    //translate(960/2, 500/2)
    //rotate(mouseMoved)
    //translate(-960/2, -500/2)
    
   //pop();

      //ALARM 

   //if (mouseClicked) {
    //    alarm == 0;
        
   //}

  // if (alarm == 0) {
    //pitALARM();
    //fill (255, 0, 0);
    //rect(480, 181, 220, 100);

   //}


