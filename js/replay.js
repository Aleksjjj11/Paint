"use strict";
var replayButton = document.getElementById('replay');

replayButton.addEventListener('click', replay);

var saveCoords = document.getElementById('saveCoords');
var uploadCoords = document.getElementById('uploadCoords');

function replay(){
    console.log('Replaing...');
    clear();

    ctx.fillStyle = colorFon;
    ctx.fillRect(0,0, canv.width, canv.height);
    ctx.beginPath();

    var timer = setInterval(function(){
        //var oldCoords = coords;
        if (!coords.length) {
            clearInterval(timer);
            ctx.beginPath();
            //coords = oldCoords;
            return;
        }
        var crd = coords.shift(),
            e = {
                clientX: crd["0"],
                clientY: crd["1"]
            };
        ctx.lineWidth = sizePencil[1];
        radSpan.textContent = sizePencil[1];

        ctx.fillStyle = colors[1];
        ctx.strokeStyle = colors[1];
        colors.shift();
        sizePencil.shift();

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, ctx.lineWidth / 2, 0, Math.PI*2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        
    }, 1);
    console.log('Replayed');
}
