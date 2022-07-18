 //função altera o estado do menuToggle, adicionando elemento css e alterando as imagens
 
const navigation = document.querySelector('#navigation')

const menuExpanded = document.querySelector('body')


function menuExpendedOn() {

navigation.classList.add('logo')
document.querySelector('.logo').src = './assets/logo2.svg'
document.body.classList.add('menu-expanded')


}

function menuExpendedOff() {
    document.body.classList.remove('menu-expanded')
    document.querySelector('.logo').src = './assets/logo.svg'
    navigation.classList.remove('logo')
    }



function onScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll')
        document.querySelector('.logo').src = './assets/logo2.svg'
        document.querySelector('.open-menu').src = './assets/icon-menu2.svg'
       
    } else{
        navigation.classList.remove('scroll')
        document.querySelector('.logo').src = './assets/logo.svg'
        document.querySelector('.open-menu').src = './assets/icon-menu1.svg'
    }   
}
