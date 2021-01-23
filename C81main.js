var canvas=document.getElementById("canv");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0,  2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",down);
function down(e){
    var x=e.clientX-canvas.offsetLeft;
    var y=e.clientY-canvas.offsetTop;
    var color=document.getElementById("lol").value;
    ctx.strokeStyle=color;
    ctx.beginPath();
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.stroke();
}