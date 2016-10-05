 var c = document.getElementById("myCanvas");
 var ctx = c.getContext("2d");

 //for(x=0; x<360; x += 20){
   //      ctx.moveTo(x+5,180);
     //        ctx.lineTo(x,180);
// }
//ctx.moveTo(0,180);

for(x=0; x<=360; x+=1){
        y = 180.0 - Math.sin(x*Math.PI/180)*120;
            ctx.lineTo(x,y);
}
ctx.stroke();
