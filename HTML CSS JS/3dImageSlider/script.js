const imageContainer = document.querySelector(".container");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let x = 0;

setInterval(() => {
    setTimeout(() => {
        x = x + 45;
        updateGallery();
    }, 500);
}, 1500);

prev.addEventListener("click", () => {
    x = x + 45;
    updateGallery();
})

next.addEventListener("click", () => {
    x = x - 45;
    updateGallery();
})

function updateGallery() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}