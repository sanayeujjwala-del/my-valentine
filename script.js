// Popup
function showPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let confettiArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Confetti {
  constructor() {
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height - canvas.height;
    this.size = Math.random()*8 + 4;
    this.speed = Math.random()*3 + 2;
    this.color = `hsl(${Math.random()*360},70%,60%)`;
    this.tilt = Math.random()*10 -10;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.moveTo(this.x,this.y);
    ctx.lineTo(this.x+this.size/2,this.y+this.tilt);
    ctx.lineTo(this.x-this.size/2,this.y+this.tilt);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    this.y+=this.speed;
    if(this.y>canvas.height) { this.y=-this.size; this.x=Math.random()*canvas.width; }
  }
}

for(let i=0;i<150;i++){ confettiArray.push(new Confetti()); }

function animateConfetti() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confettiArray.forEach(c=>{c.update();c.draw();});
  requestAnimationFrame(animateConfetti);
}

animateConfetti();
window.addEventListener('resize',()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});
