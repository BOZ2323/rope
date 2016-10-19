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
            ctx.lineTo(oldx, oldy); // das Objekt ctx hat die Eigenschaft lineTo, die eine Funktion ist. Die Funktion lineTo wird mit zwei Parametern aufgerufen: werte oldx, oldy 
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
    console.log("die X-Positionen:   " + xps);
    console.log(yps);
    return yps;
} 

//function calcXpositions(start, end, count) {
//    if (count<2) {
//        throw new Error("Count must be two or higher");
//    }
//    var distance = (end-start) / count;
//    console.log(distance);
//    var result = []; //könnte man zuerst alle xPositionen überhaupt errechnen und dann teilen und nur die Anzahl von count im richtigen Abstand stehen lassen?
//    for (var x=start; x<end; x+=distance) {
//        result.push(x);
//    }
//    console.log(x);
//    return result;
//}


function calcXpositions(start, end, count) {
    if (count<2) {
        throw new Error("Count must be two or higher");
    }
    var distance = (end-start) / count;
    console.log(distance);
    var xCoordinates = [];  //evtl. die Strecke erst halbieren und dann nochmal in kleinere Teile zerlegen um Fehler zu verteilen
    for (var x=start; x<end; x++) {
        xCoordinates.push(x);
    }
    console.log (x);
    return xCoordinates;
}

//function setXpositions(allPossibleX_positions){
//    var dotsToBeDrawn = [];
//    for ( var x=0; x<allPossibleX_positions.length; x+=100) {
//        dotsToBeDrawn.push(x);
//    }
//    console.log (dotsToBeDrawn);
//    return dotsToBeDrawn;
//}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//var x_positions = [20, 40, 200, 250, 260];
//var x_positions = setXpositions(allPossibleX_positions);// calcXpositions  muss an setXpositions übergeben werden um dann jede z.B. nur jeden 7.Punkt rauszusuchen und an x_positions weiterzugeben
x_positions= calcXpositions(20, 800, 7); //der Variablen x_positions wird der return-wert zugewiesen 
var y_positions = sinusShape(x_positions);


// im array von x_positions werden die x positionen benannt
// anhand dieser werte kann die funktion sinusShape die y_positions berechnen
//calcXpositions(20, 370, 50);
drawRope(x_positions, y_positions,6);
console.log('Hallo Welt');
