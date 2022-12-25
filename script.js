const NUM_FACES = 9;    // Max is 15
const FACE_SIZE = 45;
const TREE_WIDTH = 660, TREE_HEIGHT = 900;
const SCREEN_CENTER_X = Math.floor(window.innerWidth / 2)
const SCREEN_CENTER_Y = Math.floor(window.innerHeight / 2)


// let sound = new Howl({
//   src: ['resources/jingle-bells-orchestra-clip.webm'],
//   volume: 0.4,
//   preload: true,
//   onplayerror: function() {
//     sound.once('unlock', function() {
//       sound.play();
//     });
//   }
// });

// Check if mobile because sound is delayed by 0.8 seconds
// Sound isn't delayed on a desktop browser pretending to be mobile,
// but it is actually delayed on a real phone.
let isMobile = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  isMobile = true;
}
// document.querySelector('button').onclick = function () {
//   sound.play();
// };

let sound = new Audio('resources/jingle-bells-orchestra-clip.mp3');
sound.load();

let app = new PIXI.Application({
  width: TREE_WIDTH,
  height: TREE_HEIGHT,
});

document.getElementById('container').appendChild(app.view);

// Inner radius of the circle
const radius = FACE_SIZE / 2;

const circle = new PIXI.Graphics()
.beginFill(0xFF0000)
.drawCircle(radius, radius, radius)
.endFill();

const bounds = new PIXI.Rectangle(0, 0, radius * 2, radius * 2);
const texture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
let faceMask = [];

let face = [];
for (let i = 0; i <= NUM_FACES; i++) {
  face[i] = PIXI.Sprite.from('resources/face1.jpg');
  // face[i] = PIXI.Sprite.from(`resources/face${i + 1}.jpg`);
  face[i].width = FACE_SIZE;
  face[i].height = FACE_SIZE;
  faceMask[i] = new PIXI.Sprite(texture);
}


let tree = PIXI.Sprite.from('resources/christmas-tree.png');
app.stage.addChild(tree);

let facePos = [{x: 335, y: 250},
               {x: 290, y: 360},
               {x: 390, y: 415},
               {x: 300, y: 520},
               {x: 435, y: 560},
               {x: 200, y: 620},
               {x: 170, y: 760},
               {x: 346, y: 718},
               {x: 470, y: 760},
               {x: 440, y: 675},
               {x: 220, y: 460},
               {x: 260, y: 820},
               {x: 120, y: 680},
               {x: 520, y: 630},
               {x: 400, y: 830}];


for (let i = 0; i < NUM_FACES; i++) {
  face[i].x = facePos[i].x;
  face[i].y = facePos[i].y;
  faceMask[i].x = facePos[i].x;
  faceMask[i].y = facePos[i].y;
  
  face[i].anchor.set(0.5);
  faceMask[i].anchor.set(0.5);

  app.stage.addChild(faceMask[i]);
  face[i].mask = faceMask[i];
  app.stage.addChild(face[i]);
}

function animate(face, faceMask) {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  (async()=>{
    for (let i = 0; i <= 20; i++) {
      face.width += 1;
      face.height += 1;
      faceMask.width += 1;
      faceMask.height += 1;

      await sleep(1);
    }
    for (let i = 20; i >= 0; i--) {
      face.width -= 1;
      face.height -= 1;
      faceMask.width -= 1;
      faceMask.height -= 1;

      await sleep(1);
    }

  })()
}

function addAnimation(id, pos) {
  tl.call(animate, [face[id], faceMask[id]], pos);
}

let tl = gsap.timeline();

let animationTimeline = [0.1, 0.35, 0.6, 1.1, 1.35, 1.6, 2.1, 2.35, 2.6, 3.1, 3.2, 4.3, 4.55, 4.8, 5.2, 5.3, 5.55, 5.8, 6.1, 6.4, 6.65, 6.9, 7.15];
let timelineOffset = isMobile ? 0.8 : 0;

for (let pos = 0; pos < animationTimeline.length; pos++) {
  addAnimation(pos % NUM_FACES, animationTimeline[pos]);
  // addAnimation(Math.floor(Math.random() * NUM_FACES), timelineOffset + animationTimeline[pos]);
  continue;
  if (!isMobile) {
    addAnimation(Math.floor(Math.random() * NUM_FACES), timelineOffset + animationTimeline[pos]);
  } else {
    face.forEach((_, idx) => addAnimation(idx, timelineOffset + pos));
  }
}
face.forEach((_, idx) => addAnimation(idx, timelineOffset + 7.4));

tl.pause();

tree.interactive = true;

tree.on('pointerdown', (event) => {
  sound.pause();
  sound.load();
  sound.play();
});

sound.addEventListener("play", () => {
  tl.play(0);
});
