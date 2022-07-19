//função altera o estado do menuToggle, adicionando elemento css e alterando as imagens

const navigation = document.querySelector("#navigation");

const menuExpanded = document.querySelector("body");

const menu = document.querySelector(".menu");
const logo = document.querySelector("#logoExpanded");

const backTop = document.querySelector("#backTop");


window.addEventListener('scroll', onScroll)
onScroll();

function onScroll() {
  showNavOnScroll()
  showBackTop()
}

function showNavOnScroll() {
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

function showBackTop() {
  if (scrollY < 700) {
   backTop.classList.remove('show');
  } else {
   backTop.classList.add('show');
  }
}

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

// comportamento de aparecimento gradual
ScrollReveal({
  origin:'top',
  distance:'3rem',
  duration:700,
}).reveal(`
#home,
.foto-mulher,
.box-number1,
.box-number2,
.box-number3,
.box-number4,
.box-number5,
.box-number6,
.card-servico0,
.card-servico1,
.card-servico2,
.card-servico3,
.card-servico4,
.card-servico5,
.card-servico6,
.txt-sobre,
.quemSomos,
.paragraph-sobre,
.img-medico,
.txt-contato,
.btn-consulta2,
.endereco,
.email,
.foto-homem,
.footer

 `);