
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