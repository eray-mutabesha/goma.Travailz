
let h1=document.getElementById("Aventurexplore")
text ="Aventurexplore";
let i=0;
function anim(){
    h1.innerHTML+=text[i];
    if(i<text.length -1){
        i++;
      
    }

    else{
    i=0;
    return
    }
    setTimeout(anim,100);
   
}
anim()
const imgmenu=document.getElementById("icon_menu")
const menup=document.querySelector(".menu_principale")

imgmenu.addEventListener("click",()=>{
    menup.classList.toggle("menu_li")
})
