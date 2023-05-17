var hamburger = document.querySelector(".hamburger");
var navlist = document.querySelector(".nav-list-container");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function () {
  this.classList.toggle("click");
  navlist.classList.toggle("open");
});

const sendEmail = (event) => {
  event.preventDefault();
  emailjs.sendForm("service_t6arflv", "template_6jh0dne", "#form").then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
};
document.querySelector("#form").addEventListener("submit", sendEmail);
