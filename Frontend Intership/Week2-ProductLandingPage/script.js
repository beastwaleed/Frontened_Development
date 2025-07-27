window.addEventListener("DOMContentLoaded", () => {
    
  const scrollContainer = document.querySelector(".gallery");
  const backBtn = document.querySelector(".backBtn");
  const nextBtn = document.querySelector(".nextBtn");   

  const themeIcon = document.querySelector(".moon");
  themeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.querySelector(".logoImg").style.filter = "invert(1)";
    if (document.body.classList.contains("dark-theme")) {
      themeIcon.src = `sun.png`;
      backBtn.style.filter = "invert(1)";
      nextBtn.style.filter = "invert(1)";
    } else {
      themeIcon.src = `moon.png`;
      document.querySelector(".logoImg").style.filter = "invert(0)";
      nextBtn.style.filter = "invert(0)";
      backBtn.style.filter = "invert(0)";
    }
  });

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 600;
  });

  nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 600;
  });

});
