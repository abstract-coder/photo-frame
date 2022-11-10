function preload(){

}

function setup(){
canvas= createCanvas(600,600);
canvas.center();
video= createCapture(VIDEO);
video.hide();

}

function draw(){
image(video, 40, 40, 520, 520);
fill("pink");
stroke("pink");
rect(0, 0, 600, 20);
rect(0, 0, 20, 600);
rect(0, 580, 600, 20);
rect(580, 0, 20, 600);
fill("#d081f7");
stroke("#d081f7");
circle(580,10, 250);
circle(10,580, 250)
}

function take_snapshot(){
    save("my_picture.png");
}