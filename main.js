function preload(){
    music=loadSound("music.mp3")
}


function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,500,500);
}

function modelLoaded(){
    console.log('PoseNet is Initialised');
}

function play(){
    music.play();
}
