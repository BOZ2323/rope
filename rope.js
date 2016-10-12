function drawRope(x_positions, y_positions, radius)
{
    if (x_positions.length !== y_positions.length) {
        throw new Error("horizontalPositions.length does not match verticalPositions.length");
    }

    for(var i=0; i<x_positions.length; i++) {
        var x = x_positions[i];
        var y = y_positions[i];   

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();

        if (i+1 < x_positions.length) {
            ctx.moveTo(x, y); 
            ctx.lineTo(x_positions[i+1], y_positions[i+1]);
            ctx.stroke();
        }
    }
}

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x_positions = [20, 40, 200, 250, 260];
    var y_positions = sinusShape(x_positions);
    // im array von x_positions werden die x positionen benannt
    // anhand dieser werte kann die funktion sinusShape die y_positions berechnen
    
    
function sinusShape(x_positions) {
    var y_positions = [];
    for (var i=0; i < x_positions.length; i++){
        var y = Math.sin(x_positions[i] * Math.PI / 180) * -120 + 180;
        console.log(y);
        y_positions.push(y);
        return y;

        //function sinusShape(xps) {
        //  for (var i=0; i < xps.length; i++){
        //    var y_positions  = Math.sin(xps[i] * Math.PI / 180) * -120 + 180;
        //  console.log(y_positions + "Hallo");

        // -120 = Skalierungsfaktor (Amplitüde)
        // 180 = Translation (Verschiebung auf der y-Achse)
        // PI/180 = SKalierung von x (ist kleiner als 1, daher: verringert die Frequenz)
    }
} 

sinusShape(x_positions);
drawRope(x_positions, y_positions,6);
console.log('Hallo Welt');
