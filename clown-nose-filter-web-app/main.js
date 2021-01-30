noseX = 0;
noseY = 0;

function preload() {
    Clown_nose = loadImage('https://i.postimg.cc/YS7R85LZ/Clown-nose-large.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('posenet is initialized');
}


function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 45;
        noseY = results[0].pose.nose.y - 40;
    }
}


function draw() {
    image(video, 0, 0, 300, 300);
    image(Clown_nose, noseX, noseY, 90, 90);
}

function take_snapshot() {
    save('nose_clown_img.png');
}