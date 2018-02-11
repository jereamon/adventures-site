// Gallery Functionality

const allCircles = document.querySelectorAll(".circle");

// Retrieve divs that contains all gallery elements and divs that contains img in gallery
const gallery = document.querySelectorAll('.gallery-container');
const galImageContainer = document.querySelectorAll('.gallery-image-container');

// Set specific height of gallery container and image container based on the height
// they loaded at so that everything will stay in place when the image is momentarily removed.
for (let i = 0; i < gallery.length; i++) {
  let galHeight = gallery[i].offsetHeight;
  gallery[i].style.height = galHeight.toString() + 'px';
}

for (let i = 0; i < galImageContainer.length; i++) {
  let galImageHeight = galImageContainer[i].offsetHeight;
  galImageContainer[i].style.height = galImageHeight.toString() + 'px';
}



// Adds a click event listener to every 'circle' on the page
allCircles.forEach(function (circle) {
  circle.addEventListener('click', function () {
    // Create html collection of children to clear only siblings of .circle-selected
    siblingCircles = circle.parentElement.children;

    for (let i = 0; i < siblingCircles.length; i++) {
      siblingCircles[i].classList.remove('circle-selected');
    }
    // Toggle .circle-selected on clicked circle
    circle.classList.toggle("circle-selected");

    sendInfoToGallery(circle.parentElement);
  })
});


function sendInfoToGallery(parentEl) {
  // Responds to a 'circle' click and sends info to appropriate gallery function
  // Get object of circle siblings
  siblingCircles = parentEl.children;

  // determine which circle is selected, determine which gallery the circle is in
  // pass parentEl and index to appropriate gallery function
  for (let i = 0; i < siblingCircles.length; i++) {
    if (siblingCircles[i].classList.contains('circle-selected')) {
      if (parentEl.id === '1-gal-1') {
        oneGalOne(parentEl, i);
      } else if (parentEl.id === '1-gal-2') {
        oneGalTwo(parentEl, i);
      } else if (parentEl.id === '2-gal-1') {
        twoGalOne(parentEl, i);
      };
    };
  };
};



function oneGalOne(parentEl, index) {
  // Get the image container that has been selected and the image w/in that container
  const imageContainer = parentEl.previousElementSibling;
  const image = imageContainer.firstElementChild;

  // Array of img src's
  const galOneImages = [
    "story-1-images/gal-1/big-log.jpg",
    "story-1-images/gal-1/falls-2.jpg",
    "story-1-images/gal-1/three-birds.jpg",
    "story-1-images/gal-1/just-trees.jpg"
  ]

  // create new image element
  const newImage = document.createElement('img');
  // Set new image element src to appropriate index from galOneImages array
  newImage.setAttribute('src', galOneImages[index - 1]);
  // Apply fade in animation class so it will start from beginning
  newImage.classList.add('gallery-image-shift');

  // Remove current image. I thought this may be faster to put it after creating the
  // replacement image, but it probably doesn't matter.
  image.remove();

  // append new image to imageContainer div
  imageContainer.appendChild(newImage);
}

function oneGalTwo(parentEl, index) {
  // Get the image container that has been selected and the image w/in that container
  const imageContainer = parentEl.previousElementSibling;
  const image = imageContainer.firstElementChild;

  // Array of img src's
  const galOneImages = [
    "story-1-images/gal-2/garden-arch.jpg",
    "story-1-images/gal-2/garden-path.jpg",
    "story-1-images/gal-2/garden-birds.jpg",
  ]

  // create new image element
  const newImage = document.createElement('img');
  // Set new image element src to appropriate index from galOneImages array
  newImage.setAttribute('src', galOneImages[index - 1]);
  // Apply fade in animation class so it will start from beginning
  newImage.classList.add('gallery-image-shift');

  // Remove current image. I thought this may be faster to put it after creating the
  // replacement image, but it probably doesn't matter.
  image.remove();

  // append new image to imageContainer div
  imageContainer.appendChild(newImage);
}

function twoGalOne(parentEl, index) {
  // Get the image container that has been selected and the image w/in that container
  const imageContainer = parentEl.previousElementSibling;
  const image = imageContainer.firstElementChild;

  // Array of img src's
  const twoGalOneImages = [
    "story-2-images/gal-1/stack-and-river.jpg",
    "story-2-images/gal-1/step-trail.jpg",
    "story-2-images/gal-1/unknown-creek.jpg",
    "story-2-images/gal-1/kick-back.jpg"
  ];

  // create new image element
  const newImage = document.createElement('img');
  // Set new image element src to appropriate index from galOneImages array
  newImage.setAttribute('src', twoGalOneImages[index - 1]);
  // Apply fade in animation class so it will start from beginning
  newImage.classList.add('gallery-image-shift');

  // Remove current image. I thought this may be faster to put it after creating the
  // replacement image, but it probably doesn't matter.
  image.remove();

  // append new image to imageContainer div
  imageContainer.appendChild(newImage);
}

// Gallery Functionality Ends



// To top button functionality
const toTopButton = document.querySelector('.to-top-button i');

toTopButton.addEventListener('click', function () {
  var startY = window.pageYOffset;
  var stopY = 0;
  if (startY < 100) {
    scrollTo(0, stopY);
  }

  var speed = Math.round(startY / 100);
  if (speed >= 20) speed = 20;

  var step = Math.round(startY / 25);
  var leapY = startY - step;
  var timer = 0;
  for (var i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;
    if (leapY < stopY) {
      leapY = stopY
    };
    timer++;
  }
});