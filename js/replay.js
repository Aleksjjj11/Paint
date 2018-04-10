"use strict";
var replayButton = document.getElementById('replay');

replayButton.addEventListener('click', replay);

var saveCoords = document.getElementById('saveCoords');
var uploadCoords = document.getElementById('uploadCoords');

// saveCoords.addEventListener('click', function(){
//     //oldCoords = coords;
// });
// uploadCoords.addEventListener('click', function(){
//     //coords = oldCoords;
// });

function replay(){
    console.log('Replaing...');
    clear();
    
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
        //oldCoords.push(e.clientX, e.clientY);
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
