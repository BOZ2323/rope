var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var point_y = [ 200, 300, 500 ];


function point(x, y)
{
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI, true);
    ctx.fillStyle = "red";
    ctx.fill();
}

point(200,point_y[0]);

function line()
{   
    ctx.beginPath();    
    ctx.moveTo (200,200);
    ctx.lineTo (700,300);
    ctx.lineTo (500,500);
    ctx.stroke();
}

line();

function point(x, y)
{
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI, true);
    ctx.fill();
}

point(700,point_y[1]);

function point(x, y)
{
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI, true);
    ctx.fill();
}

point(500,point_y[2]);

