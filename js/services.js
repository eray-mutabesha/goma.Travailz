const imgmenu=document.getElementById("icon_menu")
const menup=document.querySelector(".menu_principale")
imgmenu.addEventListener("click",()=>{
    menup.classList.toggle("menu_li")
})