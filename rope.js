function drawRope(horizontalPositions, verticalPositions, radius){
    if (horizontalPositions.length !== verticalPositions.length) {
        throw new Error("horizontalPositions.length does not match verticalPositions.length");
    }

    var oldx, oldy;
    for(var i=0; i<horizontalPositions.length; i++) {
        var x = horizontalPositions[i];
        var y = verticalPositions[i];

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();

        if (i !== 0) {
            ctx.moveTo(x, y); 
            ctx.lineTo(oldx, oldy); // das objekt ctx hat die eigenschaft lineTo, die eine funktion ist. die funktion lineTo wird mir zwei parametern aufgerufen: werte oldx, oldy 
            ctx.stroke();
        }

        oldx = x;
        oldy = y;
    }
}

function sinusShape(xps) {
    var yps = [];
    for (var i=0; i < xps.length; i++){
        var y = Math.sin(xps[i] * Math.PI / 180) * -120 + 180;
        yps.push(y);

        // -120 = Skalierungsfaktor (Amplitüde)
        // 180 = Translation (Verschiebung auf der y-Achse)
        // PI/180 = SKalierung von x (ist kleiner als 1, daher: verringert die Frequenz)
    }
    console.log(yps);
    return yps;
} 

function calcXpositions(start, end, count) {
    if (count<2) {
        throw new Error("Count must be two or higher");
    }
    var distance = (end-start) / count;
    var result = [];
    for (var x=start; x<end; x+=distance) {
        result.push(x);
    }
    console.log(x);
    return result;
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//var x_positions = [20, 40, 200, 250, 260];
var x_positions = calcXpositions(20, 800, 300); //der Variablen x_positions wird der return-wert zugewiesen 
var y_positions = sinusShape(x_positions);
// im array von x_positions werden die x positionen benannt
// anhand dieser werte kann die funktion sinusShape die y_positions berechnen

drawRope(x_positions, y_positions,6);
console.log('Hallo Welt');
