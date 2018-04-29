var 
    setRadius = function(newRadius){
        if (newRadius < minRad) newRadius = minRad;
    else if (newRadius > maxRad) newRadius = maxRad;
    radius = newRadius;
    ctx.lineWidth = radius;
    radSpan.textContent = radius;
    }
var 
    minRad = 0.5,
    maxRad = 105,
    defaultRad = 5,
    radSpan = document.getElementById('radval'),
    decSpan = document.getElementById('decrad'),
    incSpan = document.getElementById('incrad');
    
    function decrad5() {
        setRadius(radius-5);
    }
    function incrad5() {
        setRadius(radius+5);
    }
    function decrad1() {
        setRadius(radius-1);
    }
    function incrad1() {
        setRadius(radius+1);
    }
    function decrad05() {
        setRadius(radius-0.5);
    }
    function incrad05() {
        setRadius(radius+0.5);
    }