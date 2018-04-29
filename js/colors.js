var swatches = document.getElementsByClassName('swatch');

for (var i = 0, n = swatches.length; i < n; i++) {
    swatches[i].addEventListener('click', setSwatch);
}

function setColor(color) {
    ctx.fillStyle = newColor;
    ctx.strokeStyle = newColor;
    var active = document.getElementsByClassName('active')[0];
    if (active ) {
        active.className = 'swatch';
    }
}

function setSwatch(e) {
    var swatch = e.target;

    setColor(swatch.style.backgroundColor);

    swatch.className += ' active';
}
function startColor() {
    swatches = document.getElementsByClassName('swatch');
    for (var i = 0, n = swatches.length; i < n; i++) {
        if (swatches[i].className == 'swatch active') {
            swatches[i].className = 'swatch';
        }
    }
    
}

//Change background color
function setColorFon() {
    colorFon = newColor;
    ctx.fillRect(0,0, canv.width, canv.height);
    ctx.beginPath();
    console.log('Overlay color');
    replay(0.0001);
    console.log('Color applied');    
}
var getColorFon = document.getElementById('colorfon');

getColorFon.addEventListener('click', setColorFon);

var newColorPen = document.getElementById('colorPen');
var newColor;
var ButtonCurrentColor = document.getElementsByClassName('swatchactive'); 

newColorPen.addEventListener('click', function(){
    setColor(newColor);
    document.getElementById('NewColor').style.backgroundColor = newColor;
    
});
