window.addEventListener("DOMContentLoaded", () => {

    function VideoPlayButton() {


        const videoContainer = document.querySelector(".videoPlay");
        const playBtn = document.querySelector(".play");

        videoContainer.addEventListener("mouseenter", () => {
            playBtn.style.transform = "scale(1)";
            playBtn.style.opacity = "1";
        });

        videoContainer.addEventListener("mouseleave", () => {
            playBtn.style.opacity = "0";
            playBtn.style.transform = "scale(0)";
        });

        videoContainer.addEventListener("mousemove", (e) => {
            const bounds = videoContainer.getBoundingClientRect();
            const x = e.clientX - bounds.left;
            const y = e.clientY - bounds.top;

            playBtn.style.left = `${x - 30}px`;
            playBtn.style.top = `${y - 70}px`;
        });

    }

    VideoPlayButton();


    function loadingAnimations() {
        gsap.from(".page1 h1", {
            y: 100,
            opacity: 0,
            delay: 0.4,
            duration: 0.9,
            stagger: 0.3,
        });

        gsap.from(".videoPlay", {
            scale: 0.9,
            opacity: 0,
            delay: 1.3,
            duration: 0.8,
        });
    }

    loadingAnimations();

    function cursorChild() {
        document.addEventListener("mousemove", (dets) => {
            gsap.to("#cursor", {
                left: dets.x,
                top: dets.y,
            });
        });

        // document.querySelector("#child").addEventListener("mouseenter", () => {
        //     gsap.to("#cursor", {
        //         transform: 'translate(-50%, -50%) scale(1)'
        //     });
        // })

        document.querySelectorAll("#child").forEach(function (elem) {
            elem.addEventListener("mouseenter", () => {
                gsap.to("#cursor", {
                    transform: 'translate(-50%, -50%) scale(1)',
                });
            })
        })

        document.querySelectorAll("#child").forEach(function (elem) {
            elem.addEventListener("mouseleave", () => {
                gsap.to("#cursor", {
                    transform: 'translate(-50%, -50%) scale(0)',
                });
            })
        })

    }

    cursorChild();

    // const menuBtnn = document.querySelector(".menu-btn");
    // const navContent = document.querySelector(".nav");

    // menuBtnn.addEventListener("click", () => {
    //     navContent.classList.toggle("active");
    // });


    // document.addEventListener("DOMContentLoaded", () => {
    //     const menuIcon = document.getElementById("menuToggle");
    //     const links = document.querySelector(".links");

    //     menuIcon.addEventListener("click", () => {
    //         links.classList.toggle("show-links");
    //     });
    // });

    const menuBtn = document.getElementById('menuIcon');
    const closeBtn = document.getElementById('closeMenu');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');

    menuBtn.addEventListener('click', () => {
        fullscreenMenu.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        fullscreenMenu.style.display = 'none';
    });


});