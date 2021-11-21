var velocity = 100;
var positionY = 0;
var positionX = 0;
var reverse = false;

var ball = document.getElementById('ball');

var Xmin = 0;
var Xmax = 300;
var Ymin = 0;
var Ymax = 300;

function moveBall() {
  if (reverse){ 
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
 } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
  }

  if (positionX === Xmax ||
      positionX === Xmin ||
      positionY === Ymax ||
      positionY === Ymin)
      {
      reverse = !reverse;
  }
}
// This call the moveBall function every 100ms
setInterval(moveBall, 100);
