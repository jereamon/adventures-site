const readMores = document.querySelectorAll('.link-container a');

let storyHrefs = [];

readMores.forEach(function(readMore, index) {
  storyHrefs.push(`story-${index +1}.html`);
  readMore.addEventListener('click', function() {
    readMore.setAttribute('href', storyHrefs[index]);
  });
});