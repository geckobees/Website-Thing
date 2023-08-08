const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d')

// c.fillRect(100, 100, 100, 100)

//draw a line

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(100, 100);
// c.stroke();

//circle

// for (var i = 0; i < 200; i++) {
//     c.beginPath();
//     c.arc(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 50, 0, Math.PI * 2, false)
//     c.stroke();
// }




function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.stroke();     
    }

    this.update = function(){
        this.x += this.dx;

        this.y += this.dy;
    
        if (this.x + this.radius > innerWidth|| this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight|| this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.draw()
    }


}


circleArray = []

for (var i = 0; i < 200; i++) {
    var radius = Math.random(10, 30)
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    circleArray.push(new Circle(x, y, dx, dy, radius))
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) { 
        circleArray[i].update()
    }
}

animate();