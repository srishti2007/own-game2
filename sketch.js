var canvas;
//apple
var apple, appleimg;
//inputs
var A, P1, P, L, E;
//value inside inputs
var inA, inP, inP1, inL, inE;
//tick marks
var t1, t2, t3, t4, t5, tickimg;
//cross marks
var c1, c2, c3, c4, c5, crossimg;
//score
var score = 0;
//background img
var bg;
//timer 
var counter = 0;
var timeleft = 31;
var timer;

function preload() {
    //load images
    appleimg = loadImage("apple.jpg");
    tickimg = loadImage("tick.png");
    crossimg = loadImage("cross.png");
    bg = loadImage("bg.jpg");
}

function setup() {
    //this will create canvas
    canvas = createCanvas(displayWidth, displayHeight);
    //timer
    function timeIt() {
        counter++;
        timer = timeleft - counter;
    }
    interval = setInterval(timeIt, 1000);
    //to display the apple
    apple = createSprite(650, -10, 1, 1);
    apple.addImage(appleimg);
    apple.velocityY = 4;
    //inputs are created and position are also given
    A = createInput();
    A.position(218, 600);
    P1 = createInput();
    P1.position(393, 600);
    P = createInput();
    P.position(568, 600);
    L = createInput();
    L.position(743, 600);
    E = createInput();
    E.position(918, 600);
}

function draw() {
    //background image
    background(bg);
    //timer
    text("time left:"+timer, 200, 200);
    if (timer < 1) {
        clearInterval(interval);
    }
    //score displayed
    text("score:" + score, 200, 250);
    //after apple reaches certain height it stops 
    if (apple.y > displayHeight / 2) {
        apple.velocityY = 0;
    }
    //with the value in the inputs the computer chosses wheater its correct or wrong.
    inA = A.value();
    if (inA === "A") {
        t1 = createSprite(300, 720, 10, 10);
        t1.addImage(tickimg);
    }
    else {
        c1 = createSprite(300, 720, 10, 10);
        c1.addImage(crossimg);
    }
    inP = P.value();
    if (inP === "P") {
        t2 = createSprite(645, 720, 10, 10);
        t2.addImage(tickimg);
    }
    else {
        c1 = createSprite(645, 720, 10, 10);
        c1.addImage(crossimg);
    }
    inP1 = P1.value();
    if (inP1 === "P") {
        t3 = createSprite(474, 720, 10, 10);
        t3.addImage(tickimg);
    }
    else {
        c1 = createSprite(474, 720, 10, 10);
        c1.addImage(crossimg);
    }
    inL = L.value();
    if (inL === "L") {
        t4 = createSprite(817, 720, 10, 10);
        t4.addImage(tickimg);
    }
    else {
        c1 = createSprite(817, 720, 10, 10);
        c1.addImage(crossimg);
    }
    inE = E.value();
    if (inE === "E") {
        t5 = createSprite(999, 720, 10, 10);
        t5.addImage(tickimg);
    }
    else {
        c1 = createSprite(999, 720, 10, 10);
        c1.addImage(crossimg);
    }
    //if all inputs are put in the score increases
    if (inA === "A" && inP1 === "P" && inP === "P" && inL === "L" && inE === "E" && timer > 0) {
        score = 30;
        clearInterval(interval);
        timer = "YOU FINISHED WITHIN TIME!!"
    }
    drawSprites();
}