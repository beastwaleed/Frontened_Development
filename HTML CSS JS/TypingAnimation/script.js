//script.js

const careers = ["Youtuber", "Web Developer", "Freelancer", "Digital Marketer"];
let careersLength = careers.length;
let charLength = 0;

let careerIdx = 0;

function toggleCareers() {
    const heading = document.querySelector("h1");

    let typing = setInterval(() => {
        const newCareer = careers[careerIdx];

        charLength++;
        heading.innerHTML = `I am a ${newCareer.slice(0, charLength)}`;
        charLength++;

        if (charLength > newCareer.length) {
            clearInterval(typing);

            setTimeout(() => {
                charLength = 0;
                careerIdx = (careerIdx + 1) % careersLength;
                toggleCareers();
            }, 500)

        }

    }, 100);
}

toggleCareers();