const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
  //agregar la clase inactive (preferenci con toggle)
  desktopMenu.classList.toggle("inactive");
}

