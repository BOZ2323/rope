var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



function point(x, y)
{
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI, true);
    ctx.fill();
}

point(20,40);
