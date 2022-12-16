function animate__animated_left() {
  var reveals = document.querySelectorAll(".animate__animated_1");
  console.log(reveals);
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate__fadeInLeft");
    } else {
      reveals[i].classList.remove("animate__fadeInLeft");
    }
  }
}
function animate__animated_right() {
  var reveals = document.querySelectorAll(".animate__animated_2");
  console.log(reveals);
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate__fadeInRight");
    } else {
      reveals[i].classList.remove("animate__fadeInRight");
    }
  }
}
window.addEventListener("scroll", animate__animated_left);
window.addEventListener("scroll", animate__animated_right);
