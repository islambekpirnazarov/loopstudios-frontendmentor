window .addEventListener('DOMContentLoaded', function(){
    const menuBtn = document.querySelector('.menu-btn')
    const navigation = document.querySelector('.navigation-items')

    menuBtn.addEventListener('click', () =>{
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })
})