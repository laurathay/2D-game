let playerState = 'fall';
const dropdwon = document.getElementById('animations');
dropdwon.addEventListener('change', function(e){
    playerState = e.target.value;
})

//tu créer ton cadre 
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//sa taile 
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//tu ajoutes l'image qui va dedans
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

//en lui mettant sa dimension
const spriteWidth = 575;
const spriteHeight = 523;

//tu parcours le dessin par frame en horizontal
let gameFrame = 0;
const staggerFrames = 5;

//tu créer le tableau avec les differents etats
const spriteAnimations = [];
const animationStates = [
    {
        name:'idle',
        frames: 7,
    },
    {
        name:'jump',
        frames: 7,
    },
    {
        name:'fall',
        frames: 9,
    },
    {
        name:'run',
        frames: 7,
    },
    {
        name:'dizzy',
        frames: 11,
    },
    {
        name:'sit',
        frames: 5,
    },
    {
        name:'roll',
        frames: 7,
    },
    {
        name:'bite',
        frames: 7,
    },
    {
        name:'ko',
        frames: 12,
    },
    {
        name:'getHit',
        frames: 4,
    }
];
//letat selon lindex
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    //on parcours le tableau selon le nombre de frames loc
    for (let j=0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y:positionY});
    }
    //pour parcourir le tableau d'animations
    spriteAnimations[state.name] = frames;
});

//on créer le cadre noir puis on regle la vistesse avec math.floor et cela bouge avec la loc d'en haut 
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    //le dessine dans le cadre attitre
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
    
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();