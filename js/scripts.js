//função altera o estado do menuToggle, adicionando elemento css e alterando as imagens

const navigation = document.querySelector("#navigation");

const menuExpanded = document.querySelector("body");

const menu = document.querySelector(".menu");
const logo = document.querySelector("#logoExpanded");

function menuExpendedOn() {
  navigation.classList.add("logo");
  logo.classList.add("logoExpanded");
  document.body.classList.add("menu-expanded");
  menu.classList.remove("displayNone");
}

function menuExpendedOff() {
  if(scrollY > 0){
    document.body.classList.remove("menu-expanded")
    menu.classList.add("displayNone")
  } else{ 
    logo.classList.remove("logoExpanded")
    document.body.classList.remove("menu-expanded")
   menu.classList.add("displayNone")}
}

function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
    logo.classList.add("logoExpanded");
    document.querySelector(".open-menu").src = "./assets/icon-menu2.svg";
  } else {
    navigation.classList.remove("scroll");
    logo.classList.remove("logoExpanded");
    document.querySelector(".open-menu").src = "./assets/icon-menu1.svg";
  }
}
