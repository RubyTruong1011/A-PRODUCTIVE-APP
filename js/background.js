const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
const bgImage = document.createElement("img");
const chosenImage = images[Math.floor(Math.random() * images.length)];

bgImage.classList.add("background");

document.body.appendChild(bgImage);

document.addEventListener("DOMContentLoaded", function (event) {
    bgImage.setAttribute("src", `img/${chosenImage}`);
})

