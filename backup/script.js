const NUM_FACES = 9;
const FACE_ROTATION = 20;
const ROTATION_LEN = 0.25;

let sound = new Howl({
  src: ['resources/jingle-bells-orchestra-clip.mp3'],
  volume: 0.2
});

// let anim = gsap.to('#face1', {duration: 2, x: -300, y: 200});
let tl = gsap.timeline();
let tl2 = gsap.timeline();

function setFaces() {
  // tl.to('#face1', {duration: 2, x: -300, y: 200})
  //   .from('#face2', {duration: 1, x: 0, y: 0}, 0)
  //   .to('#face2', {duration: 1, x: -295, y: 340}, 1);
  // tl.set('.face', {opacity: 0, scale: 0});
  // tl.set('#face1', {x: -300, y: 200})
  // tl.set('#face1', {x: '0.5vw', y: '-92vh'});
  //   .set('#face2', {x: -295, y: 340})
  //   .set('#face3', {x: -435, y: 295})
  //   .set('#face4', {x: -350, y: 460})
  //   .set('#face5', {x: -510, y: 430})
  //   .set('#face6', {x: -640, y: 520})
  //   .set('#face7', {x: -715, y: 640})
  //   .set('#face8', {x: -600, y: 600})
  //   .set('#face9', {x: -540, y: 640})
  // tl.to('.face', {duration: 1, opacity: 1, scale: 1, stagger: 0.1, ease: 'bounce.out', onComplete: playAnimation});
  tl.to('.face', {duration: 1, opacity: 1, scale: 1, stagger: 0.1, ease: 'bounce.out'});
}

function animateFaces() {
  // tl2.to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION, delay: 0.25})
  //   .to('.face', {duration: ROTATION_LEN, rotation: -FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION});
  // tl2.to('.face', {duration: ROTATION_LEN, rotation: -FACE_ROTATION, delay:  0.25})
  //   .to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: -FACE_ROTATION});
  // tl2.to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION, delay:  0.25})
  //   .to('.face', {duration: ROTATION_LEN, rotation: -FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: -FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION});
  // tl2.to('.face', {duration: ROTATION_LEN, rotation: -FACE_ROTATION, delay: 0.75})
  //   .to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: -FACE_ROTATION});
  // tl2.to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION, delay:  0.25})
  //   .to('.face', {duration: ROTATION_LEN, rotation: -FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION});
  // tl2.to('.face', {duration: ROTATION_LEN, rotation: -FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION, delay: 0.1})
  //   .to('.face', {duration: ROTATION_LEN, rotation: -FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: -FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: FACE_ROTATION})
  //   .to('.face', {duration: ROTATION_LEN, rotation: 0, delay: 0.5})

  // let timelineDelay = [0, 0, 0,
  //                      0, 0.25, 0,
  //                      0, 0.25, 0, 0.1, 0,
  //                      0.75, 0, 0,
  //                      0.02, 0.1, 0, 0,
  //                      0, 0, 0, 0, 0
  //                     ];
  let timelineDelay = [0.25, 0, 0,
                        0.25, 0, 0,
                        0.25, 0, 0, 0.1,
                        0.75, 0, 0,
                        0.25, 0, 0, 0,
                        0.1, 0, 0
                        ];
 
  // let timelineDuration = [0, 0, 0,
  for (let i = 0; i <= 20; i++) {
    // tl2.to(`#face${(i % (NUM_FACES) + 1)}`, {duration: 0.13, scale: 1.5, repeat: 1, yoyo: true, ease: 'ease.out', delay: timelineDelay[i]})
    tl2.to(`#face${Math.floor(Math.random() * NUM_FACES) + 1}`, {duration: 0.13, scale: 1.5, repeat: 1, yoyo: true, ease: 'ease.out', delay: timelineDelay[i]})
  }
  tl2.to('.face', {duration: 0.13, scale: 1.5, repeat: 1, yoyo: true, ease: 'ease.out'});
}

function playAnimation() {
  tl2.progress(0).play();
  sound.stop();
  sound.play();
}

setFaces();
animateFaces();

tl2.pause();

document.querySelector("#play").onclick = () => {
  playAnimation();
}

// gsap.pause();
// create a timeline
// let tl = gsap.timeline()

// // add the tweens to the timeline - Note we're using tl.to not gsap.to
// tl.to("#face1", { x: -300, duration: 2 });
// tl.to("#face2", { x: -300, duration: 1 });


