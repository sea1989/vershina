var burger = document.getElementsByClassName('menu__image');
var menu = document.getElementsByClassName("menu__section");
var close_btn = document.getElementsByClassName('menu__close');
burger.onclick = function (){
    menu.style.display = "flex";
}
close_btn.onclick = function (){
    menu.style.display = "none";
}
close_btn