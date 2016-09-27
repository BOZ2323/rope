var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var point_y = [ 300, 400, 500, 600 ];


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

point(600,point_y[2]);

function point(x, y)
{
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI, true);
    ctx.fill();
}

point(500,point_y[3]);

function point(x,y)
{
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI, true);
    ctx.fill();
}

point(300,point_y[4]);
