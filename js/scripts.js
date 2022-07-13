const menuScroll = {
    imgToggle:'./assets/icon-menu2.svg',
    imgLogo2:'./assets/logo2.svg'
}


function changeMenuScroll(menuScroll){
    const logoElement = document.querySelector('.logo');
    const menuToggle = document.querySelector('.menuToggle');
    logoElement.setAttribute('src', menuScroll.imgLogo2)
    menuToggle.setAttribute('src', menuScroll.imgToggle)
}

const navigation = document.querySelector('#navigation')

function onScroll(){
    if(scrollY > 0){
        navigation.classList.add('scroll'),
        changeMenuScroll()
    } else{
        navigation.classList.remove('scroll')
    }   
}

