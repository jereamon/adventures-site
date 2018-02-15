// Gallery Functionality
// To add a new gallery create the function for that gallery based off the other gallery
// functions and add that gallery id to the sendInfoToGallery for loop.

const allCircles = document.querySelectorAll(".circle");

// Retrieve divs that contains all gallery elements and divs that contains img in gallery
const gallery = document.querySelectorAll('.gallery-container');
const galImageContainer = document.querySelectorAll('.gallery-image-container');

// Set specific height of gallery container and image container based on the height
// they loaded at so that everything will stay in place when the image is momentarily removed.

//   for (let i = 0; i < gallery.length; i++) {
//     let galHeight = gallery[i].offsetHeight;
//     gallery[i].style.height = galHeight.toString() + 'px';
//   }

//   for (let i = 0; i < galImageContainer.length; i++) {
//     let galImageHeight = galImageContainer[i].offsetHeight;
//     galImageContainer[i].style.height = galImageHeight.toString() + 'px';
//   }




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
      } else if (parentEl.id === '2-gal-2') {
        twoGalTwo(parentEl, i);
      } else if (parentEl.id === '3-gal-1') {
        threeGalOne(parentEl, i);
      } else if (parentEl.id === '3-gal-2') {
        threeGalTwo(parentEl, i);
      }
    };
  };
};

function swapImage(imageContainer, image, imageSrc) {
  // Swap out the current image element with a new one so that fade in animation
  // will always start over.

  // create new image element
  const newImage = document.createElement('img');
  // Set new image element src to appropriate index from galOneImages array
  newImage.setAttribute('src', imageSrc);
  // Apply fade in animation class so it will start from beginning
  newImage.classList.add('gallery-image-shift');

  // Remove current image. I thought this may be faster to put it after creating the
  // replacement image, but it probably doesn't matter.
  image.remove();

  // append new image to imageContainer div
  imageContainer.appendChild(newImage);
}



function oneGalOne(parentEl, index) {
  // Get the image container that has been selected and the image w/in that container
  const imageContainer = parentEl.previousElementSibling;
  const image = imageContainer.firstElementChild;

  // Array of img src's
  const images = [
    "story-1-images/gal-1/big-log.jpg",
    "story-1-images/gal-1/falls-2.jpg",
    "story-1-images/gal-1/three-birds.jpg",
    "story-1-images/gal-1/just-trees.jpg"
  ]

  let imageSrc = images[index - 1];
  swapImage(imageContainer, image, imageSrc);
}

function oneGalTwo(parentEl, index) {
  // Get the image container that has been selected and the image w/in that container
  const imageContainer = parentEl.previousElementSibling;
  const image = imageContainer.firstElementChild;

  // Array of img src's
  const images = [
    "story-1-images/gal-2/garden-arch.jpg",
    "story-1-images/gal-2/garden-path.jpg",
    "story-1-images/gal-2/garden-birds.jpg",
  ]

  let imageSrc = images[index - 1];
  swapImage(imageContainer, image, imageSrc);
}

function twoGalOne(parentEl, index) {
  // Get the image container that has been selected and the image w/in that container
  const imageContainer = parentEl.previousElementSibling;
  const image = imageContainer.firstElementChild;

  // Array of img src's
  const images = [
    "story-2-images/gal-1/stack-and-river.jpg",
    "story-2-images/gal-1/step-trail.jpg",
    "story-2-images/gal-1/unknown-creek.jpg",
    "story-2-images/gal-1/kick-back.jpg"
  ];

  let imageSrc = images[index - 1];
  swapImage(imageContainer, image, imageSrc);
}

function twoGalTwo(parentEl, index) {
  const imageContainer = parentEl.previousElementSibling;
  const image = imageContainer.firstElementChild;

  const images = [
    'story-2-images/gal-2/beach-and-trees.jpg',
    'story-2-images/gal-2/beach-sunset.jpg',
    'story-2-images/gal-2/me-sunset.jpg',
    'story-2-images/gal-2/crow-sunset.jpg'
  ];

  let imageSrc = images[index - 1];
  swapImage(imageContainer, image, imageSrc);
}

function threeGalOne(parentEl, index) {
  const imageContainer = parentEl.previousElementSibling;
  const image = imageContainer.firstElementChild;

  const images = [
    'story-3-images/gal-1/goat-face.jpg',
    'story-3-images/gal-1/little-goat.jpg',
    'story-3-images/gal-1/snow-goat.jpg',
    'story-3-images/gal-1/side-goat.jpg',
  ]

  let imageSrc = images[index - 1];
  swapImage(imageContainer, image, imageSrc);
}

function threeGalTwo(parentEl, index) {
  const imageContainer = parentEl.previousElementSibling;
  const image = imageContainer.firstElementChild;

  const images = [
    'story-3-images/gal-2/breakfast.jpg',
    'story-3-images/gal-2/hat.jpg',
    'story-3-images/gal-2/railing.jpg',
    'story-3-images/gal-2/rock-stack.jpg',
  ]

  let imageSrc = images[index - 1];
  swapImage(imageContainer, image, imageSrc);
}

// Gallery Functionality Ends



// To top button functionality
const toTopButtonContainer = document.querySelector('.to-top-button');
const toTopButton = document.querySelector('.to-top-button i');

// button will disappear at top of page and appear when pageYOffset is greater than 250px
window.addEventListener('scroll', function () {
  let pageHeight = window.pageYOffset;
  if (pageHeight > 250) {
    toTopButtonContainer.style.opacity = '0.5';
  } else {
    toTopButtonContainer.style.opacity = '0';
  }
});

// Adds smooth scroll to top functionality
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
    setTimeout((function (leapY) { return function () { window.scrollTo(0, leapY) }; })(leapY), timer * speed);
    leapY -= step;
    if (leapY < stopY) {
      leapY = stopY
    };
    timer++;
  }
});