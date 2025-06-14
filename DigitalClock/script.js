const hoursElem = document.getElementById("hours")
const minElem = document.getElementById("min")
const secElem = document.getElementById("sec")
const AMPM = document.getElementById("ampm");


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursElem.innerText = h;
    minElem.innerText = m;
    secElem.innerText = s;
    AMPM.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);

}

updateClock();