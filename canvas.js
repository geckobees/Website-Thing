const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d')

c.fillRect(100, 100, 100, 100)

//draw a line
//circle

var maxRadius = 40

var mouse = {
    x: undefined,
    y: undefined
}

var colorArray = [
    '#ea9e8d',
    '#daefb3',
    '#eef4d4',
    '#d64550',
    '#1c2826'
]

window.addEventListener('mousemove', function(event){
    mouse.x = event.x
    mouse.y = event.y
})

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    this.draw = function() { // how to draw the shape
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color;
        c.fill();
        
            
    }

    this.update = function(){ // movement
        this.x += this.dx;

        this.y += this.dy;
    
        if (this.x + this.radius > innerWidth|| this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight|| this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.draw()

        
        //interactivity
        
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 ){
            if (this.radius < maxRadius){
                this.radius += 2
            }
        }else if(this.radius > this.minRadius){
            this.radius -= 1
        }

    }


}

var circleArray = [];

for (var i = 0; i < 600; i++) {
    var radius = Math.random() * 10 + 1
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