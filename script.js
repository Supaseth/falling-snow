(() => {
  function setup() {
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    return {
      canvas,
      canvasContex: canvas.getContext("2d"),
      numberOfSnowBalls: 250,
    };
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createSnowBalls(canvas, numberOfSnowBalls) {
    return [...Array(numberOfSnowBalls)].map(() => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.5, 1),
        radius: random(2, 4),
        speedX: random(-5, 5),
        speedY: random(1, 3),
      };
    });
  }

  function drawSnowBall(canvasContex, snowBall) {
    canvasContex.beginPath();
    canvasContex.arc(
      snowBall.x,
      snowBall.y,
      snowBall.radius,
      4,
      0,
      Math.PI * 2
    );
    canvasContex.fillStyle = `rgba(255, 255, 255, ${snowBall.opacity})`;
    canvasContex.fill();
  }

  function moveSnowBall(snowBall) {
    snowBall.x += snowBall.speedX;
    snowBall.y += snowBall.speedY;

    if (snowBall.x > canvas.width) {
      snowBall.x = canvas.width;
    } else if (snowBall.x < 0) {
      snowBall.x = canvas.width;
    }

    if (snowBall.y > canvas.height) {
      snowBall.y = 0;
    }
  }

  function run() {
    const { canvas, canvasContex, numberOfSnowBalls } = setup();
    createSnowBalls(canvas, numberOfSnowBalls);

    setInterval(() => {
      canvasContex.clearRect(0, 0, canvas.width, canvas.height);
      snowBalls.forEach((snowBall) => drawSnowBall(canvasContex, snowBall));
      snowBalls.forEach((snowBall) => moveSnowBall(canvas, snowBall));
    }, 50);
  }

  run();
})();
