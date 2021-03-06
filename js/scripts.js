var
        canv 	= document.getElementById('canvas'),
        ctx 	= canv.getContext('2d'),
        isMouseDown = false,
        radius = defaultRad,
        coords = [];
var     buttonClear = document.getElementById('clear');
        //canv.width = window.innerWidth;
        canv.width = 800;        
        //canv.height = window.innerHeight;
        canv.height = 500;        
var     saveCanv = [];
var     colors = [], oldColors = [];
var     sizePencil = [], oldSizePencil = [];
var     colorFon = '#ffffff';
var     oldcoords = []; 
var     cancelActionCount = 0;
var     canclAction = [];
        //Code
        buttonClear.addEventListener('click', function(){
            clear();
            cp.setHex('#000000');
            coords = [];
            oldcoords = []; 
            colors = [];
            oldColors = [];

            cancelActionCount = 0; //Clear parametrs
            canclAction = [];

            sizePencil = [];
            oldSizePencil = [];

            colorFon = '#ffffff';
        });

        canv.addEventListener('mousedown', function() {
            isMouseDown = true;
            if (radius == NaN) radius = defaultRad;
        });

        canv.addEventListener('mouseup', function(){
            isMouseDown = false;
            saveCanv.push(ctx);
            ctx.beginPath();
            coords.push('mouseup');

            cancelActionCount++;
            canclAction.push(cancelActionCount);
            cancelActionCount = 0;

            //Saving old parametrs
            oldcoords.push('mouseup'); // #ff0000
            oldColors.push('mouseup');
            oldSizePencil.push('mouseup');

            colors.push('mouseup');
            sizePencil.push('mouseup');
        });

        ctx.lineWidth = radius;
        canv.addEventListener('mousemove', function(e) {
        	
        	if (isMouseDown) {
                //Считаем кол-во действий для рисования одной линии
                cancelActionCount++;                

                sizePencil.push(radius);    //Save size pencil
                colors.push(ctx.fillStyle); //Save color pencil
                coords.push([e.clientX-275, e.clientY-60]); //Save coords pencil
                
                //Saving old parametrs 
                oldcoords.push([e.clientX-275, e.clientY-60]); // #ff0000
                oldColors.push(ctx.fillStyle);
                oldSizePencil.push(radius);

                ctx.lineTo(e.clientX-275, e.clientY-60);
                ctx.stroke();

        		ctx.beginPath();
        		ctx.arc(e.clientX-275, e.clientY-60, ctx.lineWidth / 2, 0, Math.PI*2);
        		ctx.fill();

                ctx.beginPath();
                ctx.moveTo(e.clientX-275, e.clientY-60);
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
            newColor = '#000000';
            setColor(newColor);
            document.getElementById('NewColor').style.backgroundColor = newColor;
            radius = 5;
        }

        document.addEventListener('keydown', function(e) {

            if (e.keyCode == 83) {
                //Save
                save();
                console.log('Saved');
            }

            if (e.keyCode == 82) {
                // replay
                replay(1);
                document.execcommand("undo");                
               
            }

            if (e.keyCode == 67) {
                //clear
                clear();
                console.log('Cleared');
            }
        });
