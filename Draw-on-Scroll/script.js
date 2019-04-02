// Get the id of the <path> element and the length of <path>
const triangle = document.querySelector("#triangle");
const length = triangle.getTotalLength();

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  let draw = length * scrollpercent;
  
  // Reverse the drawing (when scrolling upwards)
  triangle.style.strokeDashoffset = length - draw;
}