//Cursor-1
const cursor = document.querySelector(".cursor");
const navItems = document.querySelectorAll("nav ul li a");

const crs_2 = document.querySelector(".crs-2");

navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hovered");
    crs_2.style.display = "none";
  });

  item.addEventListener("mouseout", () => {
    cursor.classList.remove("hovered");
    crs_2.style.display = "block";
  });
});

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX - 10 + "px";
  cursor.style.top = e.pageY - 10 + "px";
});

//For about section
const about = document.querySelector(".about");
const education = document.querySelector(".education");
const skills = document.querySelector(".skills");
const contacts = document.querySelector(".contacts");
const links = document.querySelectorAll("nav ul li a");

const nav = document.querySelector("nav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove the active class from all links
    links.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the active class to the clicked link
    link.classList.add("active");

    // Toggle the visibility of sections based on the clicked link
    if (link.textContent.includes("ABOUT")) {
      toggleSection(about);
      hideSection(education);
      hideSection(skills);
      hideSection(contacts);
    } else if (link.textContent.includes("EDUCATION")) {
      toggleSection(education);
      hideSection(about);
      hideSection(skills);
      hideSection(contacts);
    } else if (link.textContent.includes("SKILLS")) {
      toggleSection(skills);
      hideSection(about);
      hideSection(education);
      hideSection(contacts);
    } else if (link.textContent.includes("CONTACTS")) {
      toggleSection(contacts);
      hideSection(about);
      hideSection(education);
      hideSection(skills);
    }
  });
});

// Function to toggle section visibility
function toggleSection(section) {
  if (section.style.height === "0px" || section.style.height === "") {
    section.style.height = "450px";
    section.style.transition = "0.8s ease";
    nav.style.borderBottom = "1px solid white";
    nav.style.transition = "0.5s ease";
  } else {
    section.style.height = "0px";
    nav.style.borderBottom = "none";
    nav.style.transition = "0s ease";

    links.forEach((links) => {
      links.classList.remove("active");
    });
  }
}

// Function to hide section
function hideSection(section) {
  section.style.height = "0px";
  section.style.transition = "0s ease";
}




//For Bubbles
// Get the canvas element
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set canvas dimensions to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store the bubbles
var bubbles = [];

// Function to generate random number within a range
function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Array of colors for the bubbles
var colors = [
  "#ff7f50",
  "#6495ed",
  "#ff69b4",
  "#1e90ff",
  "#32cd32",
  "#ff4500",
  "#ff1493",
  "#008b8b",
  "#8a2be2",
  "#7fff00",
];

// Define Bubble object
function Bubble() {
  this.x = randomRange(0, canvas.width);
  this.y = randomRange(-50, 0); // Start above the canvas
  this.radius = randomRange(5, 15); // Adjusted size
  this.speed = randomRange(1, 4);
  this.color = colors[Math.floor(Math.random() * colors.length)]; // Random color

  this.update = function () {
    this.y += this.speed; // Move downwards
    if (this.y > canvas.height + 50) {
      // Reset if off-screen
      this.y = randomRange(-50, 0); // Start above the canvas
      this.x = randomRange(0, canvas.width);
    }
  };

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };
}

// Create bubbles and add to array
for (var i = 0; i < 60; i++) {
  bubbles.push(new Bubble());
}

// Animation loop
function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw each bubble
  bubbles.forEach(function (bubble) {
    bubble.update();
    bubble.draw();
  });

  // Request next frame
  requestAnimationFrame(animate);
}

// Start animation
animate();



//For color selection

const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const purple = document.querySelector(".purple");
const white = document.querySelector(".white");

const afterColor = document.querySelectorAll(".after-color");

const typedELement = document.querySelector("#element");

green.addEventListener("click", () => {
  afterColor.forEach((color) => {
    color.style.color = "rgb(11, 236, 11)";
  });
  typedELement.style.color = "white";
});

yellow.addEventListener("click", () => {
  afterColor.forEach((color) => {
    color.style.color = "yellow";
  });
});

purple.addEventListener("click", () => {
  afterColor.forEach((color) => {
    color.style.color = "#d500ff";
  });
});

white.addEventListener("click", () => {
  afterColor.forEach((color) => {
    color.style.color = "white";
  });
  typedELement.style.color = "rgb(11, 236, 11)";
});

//For rotating icon
const colorIcon = document.querySelector(".fa-gear");
const diffColor = document.querySelector(".diffColor");

function rotateThat() {
  colorIcon.style.transform += "rotate(360deg)";
  diffColor.style.width = "200px";
  diffColor.style.opacity = "1";
}

function rotateBack() {
  colorIcon.style.transform += "rotate(-360deg)";
  diffColor.style.width = "0px";
  diffColor.style.opacity = "0";
}

//Social media icons

const fb = document.querySelector(".fa-square-facebook");
const ln = document.querySelector(".fa-linkedin");
const gt = document.querySelector(".fa-github");
const ins = document.querySelector(".fa-instagram");

const iconTitle = document.querySelectorAll(".icon-names p");

fb.addEventListener("mouseover", () => {
  iconTitle[0].style.display = "block";
});

fb.addEventListener("mouseout", () => {
  iconTitle[0].style.display = "none";
});

ln.addEventListener("mouseover", () => {
  iconTitle[1].style.display = "block";
});

ln.addEventListener("mouseout", () => {
  iconTitle[1].style.display = "none";
});

gt.addEventListener("mouseover", () => {
  iconTitle[2].style.display = "block";
});

gt.addEventListener("mouseout", () => {
  iconTitle[2].style.display = "none";
});

ins.addEventListener("mouseover", () => {
  iconTitle[3].style.display = "block";
});

ins.addEventListener("mouseout", () => {
  iconTitle[3].style.display = "none";
});


//Loader
// Wait for the page to fully load
window.addEventListener('load', () => {
    // Add loaded class to the body to hide the loader
    document.body.classList.add('loaded');
  });
  