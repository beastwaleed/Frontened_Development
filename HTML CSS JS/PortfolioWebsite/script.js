gsap.from(".logo",{
  opacity:0,
  y:-100,
  duration:2,
})

gsap.from(".projects .cardsContainer",{
  opacity:0,
  y:100,
  duration:0.5,
  stagger: 0.3, 
  scrollTrigger: ".projects",
})

gsap.from(".skills-section",{
  x:-1800,
  duration:1,
  scrollTrigger: ".skills-section",
  delay:0.4,
})

gsap.to("#page2 h2",{
  transform: "translateX(-150%)",
  scrollTrigger:{
    trigger: "#page2",
    scroller: "body",
    start:"top 0%",
    end: "top -70%",
    scrub:3,
    pin:true,
  }
  
})


  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.add('glass');
    } else {
      header.classList.remove('glass');
    }
  });
