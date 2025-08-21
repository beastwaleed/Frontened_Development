window.addEventListener("DOMContentLoaded",()=>{


const btnElem = document.querySelector(".btn");
const Name = document.querySelector(".name");

let emojis = [];

async function getEmojis() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=89041fc32dcf6b67be5721719ca4c80b36d87008");

    const data = await response.json();

    // Check if data is received and loop safely up to data.length or 1000
    for (let i = 0; i < Math.max(1000, data.length); i++) {
        emojis.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmojis().then(() => {
    btnElem.addEventListener("click", () => {
        const randomNum = Math.floor(Math.random() * emojis.length);
        btnElem.innerText = emojis[randomNum].emojiName;
        Name.innerText = emojis[randomNum].emojiCode;
    });
});

});