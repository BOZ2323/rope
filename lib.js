function drawRope(horizontalPositions, verticalPositions, radius, colorFill, colorStroke){
    if (horizontalPositions.length !== verticalPositions.length) {
        throw new Error("horizontalPositions.length does not match verticalPositions.length");
    }

    var oldx, oldy;
    for(var i=0; i<horizontalPositions.length; i++) {
        var x = horizontalPositions[i];
        var y = verticalPositions[i];

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = colorFill;
        ctx.fill();

        if (i !== 0) {
            ctx.moveTo(x, y); 
            ctx.lineTo(oldx, oldy); // das Objekt ctx hat die Eigenschaft lineTo, die eine Funktion ist. Die Funktion lineTo wird mit zwei Parametern aufgerufen: werte oldx, oldy 
            ctx.strokeStyle = colorStroke;
            ctx.stroke();
        }

        oldx = x;
        oldy = y;
    }
}

function sinusShape(xps, t) { // weiteres Parameter könnte die Amplitude sy sein
    var yps = [];
    var sy = 120;
    for (var i=0; i < xps.length; i++){
        var y = Math.sin(xps[i] * Math.PI / 180 + t) * sy  + 180;
        yps.push(y);

        // -120 = Skalierungsfaktor (Amplitüde)
        // 180 = Translation (Verschiebung auf der y-Achse)
        // PI/180 = SKalierung von x (ist kleiner als 1, daher: verringert die Frequenz)

        // y = sin(x * sx + ty) * sy + ty
        // sx: in x richtung skaliert = frequenz auf x achse. bei x * w ist die Frequenz doppelt so hoch
        // sy: skalierung der amplitude 
        // ty: verschiebt nach oben bzw. unten
        // tx: translation links, rechts
    }
    console.log("die X-Positionen:   " + xps);
    console.log(yps);
    return yps;
} 

function calcXpositions(start, end, count) {
    if (count<2) {
        throw new Error("Count must be two or higher");
    }
    var distance = (end-start) / (count - 1);
    console.log(distance);

    var xCoordinates = [];  //evtl. die Strecke erst halbieren und dann nochmal in kleinere Teile zerlegen um Fehler zu verteilen
    for (var n=0; n<count; n++) {
        var xn = start + n * distance;
        xCoordinates.push(xn);
    }
    console.log (xCoordinates);
    return xCoordinates;
}

//var y_positions = sinusShape(x_positions);

function arrayCompare(array1, array2) {
    if (array2.length != array1.length) {    
        return false;
    } 

    for (var i = 0; i < array2.length; i++) {
        if (array2[i] != array1[i]) {
            return false;
        }
    } 
    return true;
}


