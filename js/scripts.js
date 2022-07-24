//função altera o estado do menuToggle, adicionando elemento css e alterando as imagens

const navigation = document.querySelector("#navigation");
const header = document.querySelector(".header");

const menuExpanded = document.querySelector("body");

const menu = document.querySelector(".menu");
const logo = document.querySelector("#logoExpanded");

const backTop = document.querySelector("#backTop");

const openMenu = document.querySelector("#btnOpen")
const closeMenu = document.querySelector("#btnClose")


window.addEventListener('scroll', onScroll)
onScroll();


function onScroll() {
  showNavOnScroll()
  showBackTop()
  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(sobre)
  activeMenuAtCurrentSection(servicos)
  activeMenuAtCurrentSection(contato)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
    header.classList.add("scroll");
    logo.classList.add("logoExpanded");
    document.querySelector(".open-menu").src = "./assets/icon-menu2.svg";
  } else {
    navigation.classList.remove("scroll");
    header.classList.remove("scroll");
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


//Função que vai ativar no menu a seção em que está atualmente
 function activeMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2


  //verificar se a seção passou da linha
  
  //quais dados vou precisar? 

  //topo da seção
  const sectionTop = section.offsetTop

  //altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção passou ou chegou na linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine 
  >= sectionTop

  //informações dos dados
  console.log('o topo da seção passou da linha?',
   sectionTopReachOrPassedTargetLine)

   //verificar se a base está abaixo da linha alvo
   //quais dados vou precisar?

   const sectionEndsAtt = sectionTop + sectionHeight

   //o final da seção passou da linha alvo
   const sectionEndPassedTargetLine = sectionEndsAtt <=
   targetLine

  console.log('o fundo da seção passou da linha?', 
  sectionEndPassedTargetLine)

  const sectionBoundaries = 
  sectionTopReachOrPassedTargetLine &&
  !sectionEndPassedTargetLine


  const sectionId = section.getAttribute('id') 
  const menuElement = document.querySelector
  (`.menu a[href*=${sectionId}]`)

//arrumar classe active para funcionar
  menuElement.classList.remove('active')
  if(sectionBoundaries) {
    menuElement.classList.add('active')

 }
}