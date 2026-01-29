// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Change the first heading text a little
  var heading = document.querySelector("h1");
  if (heading) {
    heading.textContent = heading.textContent + " :)";
  }

  // Simple alert so you can see JavaScript is working
  alert("Welcome to my simple nano site!");
});
