window.addEventListener('DOMContentLoaded', () => {

    const TextArea = document.getElementById('textarea');
    const total = document.getElementById('total');
    const remaining = document.getElementById('remaining');

    updateCounter();

    TextArea.addEventListener("keyup", () => {
        console.log("pressed");
        updateCounter();

    });

    function updateCounter() {
        total.innerText = TextArea.value.length;
        remaining.innerText = TextArea.getAttribute("maxLength") - total.innerText;
    }

});