let latex;
let correct, wrong;
let button10,button25,button50;
let restartbutton;
let words, wordcnt = 25;

//keys that should not be counted as errors (eg. shift, ctrl, alt, etc.)
let invalidkeys = [9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 44, 45, 46, 91, 92, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144, 145, 173, 174, 175, 181, 182, 183, 224, 225, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255];
function preload(){
    latex = loadJSON("scripts/code_latex.json")
    correct = color("#d1d0c5")
    wrong = color("#ca4754")
    button10 = new Clickable();
    button25 = new Clickable();
    button50 = new Clickable();
    restartbutton = new Clickable();
    restartbutton.image = loadImage("assets/restart.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background("#323437");
    setwords(wordcnt);
    setbutton(button10, width / 16 + 35, height / 3.5 + 35, "10")
    setbutton(button25, width / 16 + 35, height / 3.5 + 87, "25")
    setbutton(button50, width / 16 + 35, height / 3.5 + 139, "50")
    button25.stroke = "#d5ad16";
}
function setwords(wordcntr) {
    //generating the words
    words = random(latex.words)
    for (let i = 0; i < wordcntr; i++) {
      words = words + " " + random(latex.words)
    }
}

function setbutton(){

}
function draw(){

}