crashBtn = document.querySelector(".crash");
kickBtn = document.querySelector(".kick");
snareBtn = document.querySelector(".snare");
tomBtn = document.querySelector(".tom");

crashBtn.addEventListener("click", () => {
    const audio = new Audio()
    audio.src = "Sounds/crash.mp3";
    audio.play();
})

kickBtn.addEventListener("click", () => {
    const audio = new Audio()
    audio.src = "Sounds/kick.mp3";
    audio.play();
})

snareBtn.addEventListener("click", () => {
    const audio = new Audio()
    audio.src = "Sounds/snare.mp3";
    audio.play();
})

tomBtn.addEventListener("click", () => {
    const audio = new Audio()
    audio.src = "Sounds/tom.mp3";
    audio.play();
})

window.addEventListener("keydown", (event) => {
    if (event.key === 'c') {
        const audio = new Audio();
        audio.src = "Sounds/crash.mp3";
        audio.play();
        crashBtn.style.transform = "scale(0.8)";
        setTimeout(() => {
            crashBtn.style.transform = "scale(1)";
        }, 150);
    }

    if (event.key === 'k') {
        const audio = new Audio();
        audio.src = "Sounds/kick.mp3";
        audio.play();
        kickBtn.style.transform = "scale(0.8)";
        setTimeout(() => {
            kickBtn.style.transform = "scale(1)";
        }, 150);
    }

    if (event.key === 's') {
        const audio = new Audio();
        audio.src = "Sounds/snare.mp3";
        audio.play();

        snareBtn.style.transform = "scale(0.8)";
        setTimeout(() => {
            snareBtn.style.transform = "scale(1)";
        }, 150);
    }

    if (event.key === 't') {
        const audio = new Audio();
        audio.src = "Sounds/tom.mp3";
        audio.play();
        tomBtn.style.transform = "scale(0.8)";
        setTimeout(() => {
            tomBtn.style.transform = "scale(1)";
        }, 150);
    }
})

