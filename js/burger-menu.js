document.querySelector('.burger-menu').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('.main-menu').classList.toggle('open')
})