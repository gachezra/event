// get the hamburger icon and navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// add an event listener to the hamburger icon
hamburger.addEventListener('click', () => {
  // toggle the 'show' class on the navigation links
  navLinks.classList.toggle('show');
});
