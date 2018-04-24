"use strict";
var replayButton = document.getElementById('replay');

replayButton.addEventListener('click', replay);

var saveCoords = document.getElementById('saveCoords');
var uploadCoords = document.getElementById('uploadCoords');

function replay(time){
    console.log('Replaing...');
    clear();

    if (coords.length < 1) 
        for (var i = 0; i < oldcoords.length; i++) {
            coords.push(oldcoords[i]); // #ff0000
            colors.push(oldColors[i]);
            sizePencil.push(oldSizePencil[i]);
        }
    if (coords.length > 0) {
    ctx.fillStyle = colorFon;
    ctx.fillRect(0,0, canv.width, canv.height);
    ctx.beginPath();

    //Replaying...
    var timer = setInterval(function(){
        if (!coords.length) {
            clearInterval(timer);
            ctx.beginPath();
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
        
    }, time);
    for (var i = 0; i < oldcoords.length; i++) {
        coords.push(oldcoords[i]); // #ff0000
        colors.push(oldColors[i]);
        sizePencil.push(oldSizePencil[i]);
    }
    console.log('Replayed');
}
}