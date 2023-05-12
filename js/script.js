var hamburger = document.querySelector(".hamburger");
var navlist = document.querySelector(".nav-list-container");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function () {
  this.classList.toggle("click");
  navlist.classList.toggle("open");
});
