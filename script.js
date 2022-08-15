const canvas = getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 2;
let frameY = 5;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    //ctx.drawImage(playerImage, 0, 0, 800, 800, 0, 0,CANVAS_WIDTH, CANVAS_HEIGHT);
   ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    requestAnimationFrame(animate);
};
animate();