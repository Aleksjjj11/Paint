var
        canv 	= document.getElementById('canvas'),
        ctx 	= canv.getContext('2d'),
        isMouseDown = false,
        radius = defaultRad,
        coords = [];
var     buttonClear = document.getElementById('clear');
        canv.width = window.innerWidth;
        canv.height = window.innerHeight;
var     saveCanv = [];

        //Code

        buttonClear.addEventListener('click', function(){
            clear();
            coords = [];
        });

        canv.addEventListener('mousedown', function() {
        	isMouseDown = true;
        });

        canv.addEventListener('mouseup', function(){
            isMouseDown = false;
            saveCanv.push(ctx);
            ctx.beginPath();
            coords.push('mouseup');
        });

        ctx.lineWidth = radius;
        canv.addEventListener('mousemove', function(e) {
        	
        	if (isMouseDown) {
                coords.push([e.clientX, e.clientY-50]);
                
                ctx.lineTo(e.clientX, e.clientY-50);
                ctx.stroke();

        		ctx.beginPath();
        		ctx.arc(e.clientX, e.clientY-50, ctx.lineWidth / 2, 0, Math.PI*2);
        		ctx.fill();

                ctx.beginPath();
                ctx.moveTo(e.clientX, e.clientY-50);
        	}
        });
        
        function save() {
            localStorage.setItem('coords', JSON.stringify(coords));
        }
        function clear() {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0,0, canv.width, canv.height);
            ctx.beginPath();
            startColor();
            setColor('black');
            var newColor = document.getElementById('Black');
            newColor.className = 'swatch active';
        }

        document.addEventListener('keydown', function(e) {

            if (e.keyCode == 83) {
                //Save
                save();
                console.log('Saved');
            }

            if (e.keyCode == 82) {
                // replay
                replay();
                document.execcommand("undo");                
               
            }

            if (e.keyCode == 67) {
                //clear
                clear();
                console.log('Cleared');
            }
        });