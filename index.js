
unitTests();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x_positions = calcXpositions(20, 340, 10); //der Variablen x_positions wird der return-wert zugewiesen 


function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 10; i++) {
        var dt = 0.06 * i;
        ctx.globalAlpha =  0.1 * i;

        var y_positions = sinusShape(x_positions, Date.now()/1000 + dt); // Date.now gibt ms aus. Daher Umrechnung von ms in s 
        drawRope(x_positions, y_positions,6, "#296AE3", "#296AE3");

    }
}
var timer = setInterval(drawFrame, 20);

console.log('Hallo Welt');

