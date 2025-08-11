window.addEventListener("DOMContentLoaded", () => {
    const Dino = document.querySelector('.Dino');
    const Obstacle = document.querySelector('.obstacle');
    const Score = document.querySelector('.scoreCount');
    const GameOver = document.querySelector('.gameOver');

    let scored = 0;
    let isAlive = true;


    const playAudio = new Audio('assets/game.mp3');
    const gameOverAudio = new Audio('assets/gameover.mp3');
    
    // Dino movement and jump
    window.addEventListener('keydown', function (event) {
        playAudio.play();
        if (!isAlive) return;

        if ((event.keyCode === 38 || event.keyCode === 32) && !Dino.classList.contains('jump')) {
            Dino.classList.add("jump");
            setTimeout(() => {
                Dino.classList.remove("jump");
            }, 500);
        }

        if (event.keyCode === 37) {
            let left = parseInt(getComputedStyle(Dino).getPropertyValue("left"));
            if (left > 0) {
                Dino.style.left = (left - 100) + "px";
            }
        }

        if (event.keyCode === 39) {
            let left = parseInt(getComputedStyle(Dino).getPropertyValue("left"));
            if (left < window.innerWidth - 100) {
                Dino.style.left = (left + 100) + "px";
            }
        }
    });




    setInterval(() => {
        dx = parseInt(window.getComputedStyle(Dino,null).getPropertyValue("left"));
        dy = parseInt(window.getComputedStyle(Dino,null).getPropertyValue("top"));

        ox = parseInt(window.getComputedStyle(Obstacle,null).getPropertyValue("left"));
        oy = parseInt(window.getComputedStyle(Obstacle,null).getPropertyValue("top"));

        offsetX = Math.abs(dx-ox);
        offsetY = Math.abs(dy-oy);

        if(offsetX < 170 && offsetY < 100) {
            isAlive = false;
            GameOver.style.display = "block";
            GameOver.innerHTML = `Game Over! Your score is ${scored}`;
            Obstacle.style.animation = "none";
            Obstacle.style.left = `${ox}px`;
            Dino.style.animation = "none";

            //play gameover audio when collision occurs
            gameOverAudio.play();
            playAudio.pause();
            playAudio.currentTime = 0; // Reset audio to start
            setInterval(() => {
                gameOverAudio.pause();
            }, 1000);
            playAudio.currentTime = 0; // Reset audio to start
        }
        if (isAlive) {
            scored++;
            Score.innerHTML = `Score: ${scored}`;
        }

    }, 100);

   
});
