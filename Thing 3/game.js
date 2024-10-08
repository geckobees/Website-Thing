const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousedown', function(event){
    console.log(event);
});

function MainPlayer(x, y) {
    this.x = x;
    this.y = y;
    this.dy = 1;
    this.dx = 1;

    this.draw = function() { // how to draw the shape
        c.beginPath();
        c.arc(this.x, this.y, 50, 0, Math.PI * 2, false)
        c.fillStyle = 'black';
        c.fill();
    }

    this.update = function() {
        this.draw();
    }
}



function init() {
    player = new MainPlayer(200, 200);
}


function animate() {
    c.clearRect(0, 0, innerWidth, innerHeight);
    requestAnimationFrame(animate);
    player.update()
}
init();
animate();