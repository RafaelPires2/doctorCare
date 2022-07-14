//função altera o estado do menuToggle, adicionando elemento css e alterando as imagens
 
const navigation = document.querySelector('#navigation')

function onScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll') // adiciona elemento css
        document.querySelector('.logo').src = './assets/logo2.svg'
        document.querySelector('.open-menu').src = './assets/icon-menu2.svg'
       
    } else{
        navigation.classList.remove('scroll')
        document.querySelector('.logo').src = './assets/logo.svg'
        document.querySelector('.open-menu').src = './assets/icon-menumenu1.svg'
    }   
}
