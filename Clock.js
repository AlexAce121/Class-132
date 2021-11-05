function setup() {
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects" ;
}

img = "";
statuses = "";

function preload() {
    img = loadImage('Clock.jpg')
}

function modelLoaded() {
    console.log('Model Loaded');
    statuses = true;
    objectDetector.detect(img , gotResult)
}

function gotResult(error , results) {
    if (error) {
       console.log(error); 
    }
    console.log(results);
}

function draw() {
    image(img , 0 , 0 , 640 , 420);
}