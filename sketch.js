var wave;
var playing = false;

var button;
function setup() {
  createCanvas(640, 440);
  wave = new p5.Oscillator();
  wave.setType('sine');
  //wave.start();
  wave.freq(440);  //주파수
  wave.amp(0); //volume

  button = createButton('play/pause');
  button.mousePressed(toggle);
}


// function draw() {
//   background(220);
// }

function toggle(){
  if(!playing){
    wave.start(); //소리 나기 시작
    wave.amp(0.5,1);
    playing=true;
  }
  else{
    wave.amp(0,1);
    playing = false;
  }
}