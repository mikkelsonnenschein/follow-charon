var video; 

var cols = 72;
var rows = 72;
var vidVolume = 0;

var boxes = [];

function setup() {
	noCanvas();    
    pixelDensity(1);
    video = createVideo(['lung2.mp4']);
    video.loop();
    video.size(cols, rows);
    video.hide();
    for (var y = 0; y < rows; y++){
        for (var x = 0; x < cols; x++){
            //var box = createCheckbox();
            
            var box = createDiv('⋔');
            
            box.class('inline');
            box.parent('mirror');
            boxes.push(box);
        }
        var linebreak = createSpan('<br>'); 
        linebreak.parent('mirror');
        
    }
    
    //follow charon
    muteBbn = createP('⋔');
    muteBbn.class('follow-charon');
    
    //mute
    muteBbn = createP('🔇');
    muteBbn.mousePressed(togglePlaying);
    muteBbn.class('mute');
    
    video.volume(vidVolume);

}

function draw() {
    
    //background(51);
    
    
    video.loadPixels();  
    for (var y = 0; y < video.height; y++){
        for (var x = 0; x < video.width; x++){
            var index = (x + y * video.width) * 4; 
            
            var r = video.pixels[index+0];
            var g = video.pixels[index+1];
            var b = video.pixels[index+2];
            
            var checkIndex = x + y * cols;

            
            switch (true) {
                case (bright<20):
                    boxes[checkIndex].style('color: #000;');
                    break;
                case (bright<40):
                    boxes[checkIndex].style('color: #2C2C2C;');
                    break;
                case (bright<60):
                    boxes[checkIndex].style('color: #3A3A3A;');
                    break;
                case (bright<80):
                    boxes[checkIndex].style('color: #4C4C4C;');
                    break;
                case (bright<100):
                    boxes[checkIndex].style('color: #5E5E5E;');
                    break;
                case (bright<120):
                    boxes[checkIndex].style('color: #737373;');
                    break;
                case (bright<140):
                    boxes[checkIndex].style('color: #8E8E8E;');
                    break;
                case (bright<160):
                    boxes[checkIndex].style('color: #AEAEAE;');
                    break;
                case (bright<180):
                    boxes[checkIndex].style('color: #C7C7C7;');
                    break;
                case (bright<200):
                    boxes[checkIndex].style('color: #E0E0E0;');
                    break;
                case (bright<220):
                    boxes[checkIndex].style('color: #FAFAFA;');
                    break;
                case (bright<240):
                    boxes[checkIndex].style('color: #EEEEEE;');
                    break;
                case (bright<260):
                    boxes[checkIndex].style('color: #fff;');
                    break;
            }
            var bright = (r+g+b)/1.8 ;
        }
    }
}

function togglePlaying() {
  if ( vidVolume == 0 ) {
    console.log("umnuted");
    vidVolume = 1;    
    video.volume(vidVolume);
    muteBbn.html('🔈');
  } else {
    console.log("muted");
    vidVolume = 0;  
    video.volume(vidVolume);
    muteBbn.html('🔇');
  }
}



