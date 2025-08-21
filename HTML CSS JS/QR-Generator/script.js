window.addEventListener("DOMContentLoaded", () => {

const inputElem = document.getElementById('qr-input');
const qrImageElem = document.getElementById('qr-image');
const qrButtonElem = document.getElementById('generate-btn');


qrButtonElem.addEventListener('click', () => {
    if(inputElem.value.length === 0) {
        alert('Please enter a value to generate a QR code.');
        return;
    }
    else{
        qrImageElem.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputElem.value;
        qrImageElem.style.display = 'block';
        inputElem.value = ''; 
    }
});

});