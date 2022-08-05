var elModalNavbar = document.querySelector(".site-header");
var elToggleButton = document.querySelector(".site-header__hamburger");

elToggleButton.addEventListener("click", function(){
    elModalNavbar.classList.toggle("open");
  })