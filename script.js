// import { gsap } from "gsap";

function show(element){
    element.querySelector("svg").style.opacity = "1"
}

function hide(element){
    element.querySelector("svg").style.opacity = "0"
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

  const debouncedHandleScroll = debounce(handleScroll, 10); // Adjust the debounce delay

	window.addEventListener("scroll", debouncedHandleScroll);

	function handleScroll() {
		var collapseMenu = document.querySelector('.hero');
    var current = document.querySelector('.img-section')
    const darkToggle = document.querySelector(".dark-toggle");

		if (window.scrollY >= 170) {
			if (!collapseMenu.classList.contains('collapsed')) {
				collapseMenu.classList.add('collapsed');
        current.style.paddingTop = "300px";
        darkToggle.style.top = "25px";
        darkToggle.style.right = "30px";
			}
		} else {
			if (collapseMenu.classList.contains('collapsed')) {
				collapseMenu.classList.remove('collapsed');
        current.style.paddingTop = "0";
        darkToggle.style.top = "10px";
        darkToggle.style.right = "10px";
			}
		}
	}

	// Debounce function implementation
	function debounce(func, delay) {
		let timeoutId;
		return function () {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(func, delay);
		};
	}

  (function() {
    console.clear();
    
    const follower = document.querySelector('#follower');
    
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;
    
    const ease = 0.1;
    
    function easeTo() {    
      const followerBounds = follower.getBoundingClientRect();
      
      const dX = mouseX - (followerBounds.left + 10);
      const dY = mouseY - (followerBounds.top + 10);
      
      posX += dX * ease;
      posY += dY * ease;
    }
    
    function update() {
      easeTo();
      follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;  
      requestAnimationFrame(update);
    }
    
    function setCoords(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    
    document.onmousemove = setCoords;
    update();
  })();