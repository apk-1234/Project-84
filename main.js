var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext("2d");
var rand=Math.floor(Math.random()*4);
var car1_width=100;
var car1_height=60;
var car2_width=100;
var car2_height=70;
var car1_x=10;
var car1_y=10;
var car2_x=10;
var car2_y=100;
var b_image="bg_image.jpeg";
console.log(b_image);
var car1_image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWJHaNyVRB313lFFdBPzaNBgukjtgzT9OTg&usqp=CAU";
var car2_image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5hCDcPhbZLk5c25soj7gbMd2cWo6sVcFRg&usqp=CAU";
function add()
{
    b_imgTag=new Image();
    b_imgTag.onload=uploadBg;
    b_imgTag.src=b_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadCar1;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_image;
}
function uploadBg()
{
    ctx.drawImage(b_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCar1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadCar2()
{
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",keyDown);
function keyDown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        car1_up();
        console.log("Up");
    }
    else if(keyPressed=='40')
    {
        car1_down();
        console.log("Down");
    }
    else if(keyPressed=='37')
    {
        car1_left();
        console.log("Left");
    }
    else if(keyPressed=='39')
    {
        car1_right();
        console.log("Right");
    }
    else if(keyPressed='87')
    {
        car2_up();
        console.log("W Key");
    }
    else if(keyPressed='65')
    {
        car2_down();
        console.log("A Key");
    }
    else if(keyPressed='83')
    {
        car2_left();
        console.log("S Key");
    }
    else if(keyPressed='68')
    {
        car2_right();
        console.log("D Key");
    }
}
