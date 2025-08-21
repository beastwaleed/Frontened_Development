window.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector(".container");

    for (let i = 0; i < 8; i++) {
        const colorContainerDiv = document.createElement("div");
        colorContainerDiv.classList.add("color-container");
        container.appendChild(colorContainerDiv);
    }

    const colorContainersALL = document.querySelectorAll(".color-container");

    generateColors();

    function generateColors() {
        colorContainersALL.forEach((colorContainerDiv) => {
            colorContainerDiv.style.backgroundColor = randomColors();
            colorContainerDiv.innerText = randomColors();

        });

    }

    function randomColors() {
        const chars = "0123456789abcdf";
        const colorLength = 6;
        let ColorCode = "#";

        for (let i = 0; i < colorLength; i++) {
            let randomNum = Math.floor(Math.random() * chars.length);
            ColorCode += chars[randomNum]
        }
        return ColorCode;
    }

});