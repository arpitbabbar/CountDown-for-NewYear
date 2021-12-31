const fireworkC = document.querySelector('.fireworks-container');

const fireworks = new Fireworks(fireworkC, {
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})

fireworks.start();