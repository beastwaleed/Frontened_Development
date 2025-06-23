
window.addEventListener("DOMContentLoaded", () => {


    const api = "6rEhyAklUD_aRQRDNph1ggPAR5hyZbW6NRH19pIEJzM"
    let page = 1;
    let inputData = "";

    const formElem = document.querySelector("form");
    const searchInputElem = document.getElementById("searchInput");
    const searchResultElem = document.querySelector(".results");
    const showMoreBtn = document.querySelector(".showMore");



    async function searchImages() {
        inputData = searchInputElem.value;
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${api}`;


        const response = await fetch(url);
        const data = await response.json();

        if (page === 1) {
            searchResultElem.innerHTML = "";
        }
        const results = data.results;

        results.map((result) => {
            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("imageContainer");
            const image = document.createElement("img");
            image.src = result.urls.small;
            image.alt = result.alt_description;
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.textContent = result.alt_description;

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);

            searchResultElem.appendChild(imageWrapper);
        });

        page++;

        if (page > 1) {
            showMoreBtn.style.display = "inline";
        }
    }


    formElem.addEventListener("submit", (event) => {
        event.preventDefault();
        page = 1;
        searchImages();
    });

    showMoreBtn.addEventListener("click", () => {
        searchImages();
    });
});

