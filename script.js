const backGroundNode = document.querySelector("#backGround");
let frames = 0;
let ballSpawnRate = 30;
let ballsArray = [];
let mouseX=0;
let mouseY=0;

function createNewBall() {
  if (frames % ballSpawnRate === 0) {
    let newBall = new Ball();
    ballsArray.push(newBall);
  }
}

function moverBall() {
  ballsArray.forEach((ballInBallsArray) => {
    ballInBallsArray.ballMove(mouseX,mouseY );
  });
}

function clearBall() {
  ballsArray.forEach((ballInBallsArray, index) => {
    if (ballInBallsArray.y < -400) {
      ballInBallsArray.node.remove();
      ballsArray.splice(index, 1);
    }
  });
}

function Loop() {
  frames++;

  createNewBall();
  moverBall();
  clearBall();
  requestAnimationFrame(Loop);
}

window.addEventListener("mousemove", (mousePosition) => {
  mouseX=mousePosition.x 
  mouseY=mousePosition.y 


})



Loop();



