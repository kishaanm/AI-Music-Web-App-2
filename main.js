song = "";

function preload(){
    song = loadSound("eletro-pop-124340.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 650, 500);
}
