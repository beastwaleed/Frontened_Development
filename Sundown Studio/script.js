const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

window.addEventListener("DOMContentLoaded", () => {

    function page3Animation() {
        var elemCon = document.querySelector("#elemContainer")
        var fixed = document.querySelector("#fixed-image")

        elemCon.addEventListener("mouseenter", () => {
            fixed.style.display = "block";
        })

        elemCon.addEventListener("mouseleave", () => {
            fixed.style.display = "none";
        })

        var elems = document.querySelectorAll(".elem");
        elems.forEach(function (e) {
            e.addEventListener("mouseenter", () => {
                var image = e.getAttribute("data");
                fixed.style.backgroundImage = `url(${image})`;
            })
        })
    }

    page3Animation();



    function mobileMenuFunc() {
        const menuIcon = document.getElementById("menu-icon");
        const closeIcon = document.getElementById("close");
        const mobileMenu = document.querySelector("#menu");

        menuIcon.addEventListener("click", () => {
            console.log("clicked");
            mobileMenu.style.display = "block";
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";
        })

        closeIcon.addEventListener("click", () => {
            mobileMenu.style.display = "none";
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        })
    }

    mobileMenuFunc();


})
