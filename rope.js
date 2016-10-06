function drawRope(horizontalPositions, verticalPositions, radius)
{
    if (horizontalPositions.length !== verticalPositions.length) {
        throw new Error("horizontalPositions.length does not match verticalPositions.length");
    }

    for(var i=0; i<horizontalPositions.length; i++) {
        var x = horizontalPositions[i];
        var y = verticalPositions[i];   

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();

        if (i+1 < horizontalPositions.length) {
            ctx.moveTo(x, y); 
            ctx.lineTo(horizontalPositions[i+1], verticalPositions[i+1]);
            ctx.stroke();
        }
    }
}


function sinusShape(xps) {
    for (var i=0; i < xps.length; i++){
        var y_positions  = Math.sin(xps[i] * Math.PI / 180) * -120 + 180;
        console.log(y_positions + "Hallo");

            // -120 = Skalierungsfaktor (Amplitüde)
            // 180 = Translation (Verschiebung auf der y-Achse)
            // PI/180 = SKalierung von x (ist kleiner als 1, daher: verringert die Frequenz)
    }
} 

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x_positions = [20, 40, 200, 250, 260];

// im array von x_positions werden die x positionen benannt
// anhand dieser werte kann die funktion sinusShape die y_positions berechnen
y_positions = sinusShape(x_positions);
drawRope(x_positions, y_positions,6);

console.log('Hallo Welt');
