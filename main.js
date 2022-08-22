const togglebtn = document.querySelector('.navbar_togglebtn');
const menu = document.querySelector('.navbar_menu');
const icon = document.querySelector('.navbar_icon');

togglebtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});