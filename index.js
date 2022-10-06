let c = document.getElementById("myCanvas")
let ctx = c.getContext('2d')

let i = 0
const lineInterval = setInterval(function(){
    ctx.lineWidth = 10;
    ctx.strokeRect(75, 140, 150, 110);
    ctx.fillRect(130, 190, 40, 60);
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
    i += 50
    if(i > 500){
        clearInterval(lineInterval)
    }
},100)



