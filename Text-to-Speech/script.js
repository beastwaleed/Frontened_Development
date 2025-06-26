window.addEventListener("DOMContentLoaded", () => {

    buttonElem = document.getElementById('button');
    inputElem = document.getElementById('input');
    selectElem = document.getElementById('voiceSelect');

    let speech = new SpeechSynthesisUtterance();

    let voices = [];

    function populateVoiceList() {
        voices = window.speechSynthesis.getVoices();
        const voiceSelect = document.getElementById('voiceSelect');
        voiceSelect.innerHTML = '';
        voices.forEach((voice) => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.textContent = `${voice.name} (${voice.lang})`;
            selectElem.appendChild(option);
        });
    }

    window.speechSynthesis.onvoiceschanged = function () {
        populateVoiceList(); // always populate when voices change
        const selectedVoice = voices.find(voice => voice.name === selectElem.value);
        if (selectedVoice) {
            speech.voice = selectedVoice;
            speech.lang = selectedVoice.lang;
        } else if (voices.length > 0) {
            speech.voice = voices[0];
            speech.lang = voices[0].lang;
        }
    };


    selectElem.addEventListener('change', function () {
        const selectedVoice = voices.find(voice => voice.name === selectElem.value);
        if (selectedVoice) {
            speech.voice = selectedVoice;
            speech.lang = selectedVoice.lang;
        }
    });

    buttonElem.addEventListener('click', function () {
        const inputValue = inputElem.value;
        if (inputValue) {
            speech.text = inputValue;
            window.speechSynthesis.speak(speech);

        } else {
            alert('Please enter a value.');
        }
    });



});