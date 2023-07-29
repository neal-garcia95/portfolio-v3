// import { gsap } from "gsap";

function show(element){
    element.querySelector("svg").style.display = "block"
}

function hide(element){
    element.querySelector("svg").style.display = "none"
}

var timeline = new TimelineMax();
    timeline.from(".hero", 0.3, {y:-100, opacity:0},0.2)
    timeline.from(".currently", 0.3, {y:100, opacity:0},0.2)
    timeline.from(".list", 0.3, {y:100, opacity:0},0.2)

gsap.from(".projects", {
    scrollTrigger: {
        trigger: ".projects",
        start: 300
    },
    y: 100,
    opacity: 0,
})

gsap.from(".more", {
    scrollTrigger: {
        trigger: ".more",
        start: 600
    },
    y: 100,
    opacity: 0,
})

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const container = document.querySelector("body");
  
    // Check the user's dark mode preference from localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";
  
    // Apply the initial dark mode state if the preference is set
    if (isDarkMode) {
      container.classList.add("dark-mode");
    }
  
    // Toggle the dark mode on button click
    darkModeToggle.addEventListener("click", function () {
      if (container.classList.contains("dark-mode")) {
        container.classList.remove("dark-mode");
      } else {
        container.classList.add("dark-mode");
      }
    });
  });