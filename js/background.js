const images = [
  "01.JPG",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpeg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.JPG",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/img/${chosenImage}`;

document.body.appendChild(bgImage);
