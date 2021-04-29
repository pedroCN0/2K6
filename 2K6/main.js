var i = 0;
var j = 0;
window.onload = reset;
imgs = ['s0.png','s1.png','s2.png'];
function searchOpen(){
    document.getElementById('buscar').style.display = "flex";
    document.getElementById('inputid').style.display = "flex";
}
function searchClose(){
    document.getElementById('buscar').style.display = "none";
    document.getElementById('inputid').style.display = "none";
}
function slide(){
    imgs = ['s0.png','s1.png','s2.png'];
    i++;
    if(i > 2){
        i = 0;
    }
    console.log(i);
    document.getElementById('fundo').style.backgroundImage = "url('s"+i+".png";
    if(i == 0){
        document.getElementsByTagName('h1')[0].innerHTML = "xxxxxxxxs"
    }
    if(i == 1){
        document.getElementsByTagName('h1')[0].innerHTML = "xxxxxxxxa" 
        
    }
    if(i == 2){
        document.getElementsByTagName('h1')[0].innerHTML = "xxxxxxxxd" 
        
    }
    reset();
}
function name(){
    if(j++ > 2){
        j = 1;
    }
        document.getElementById('slide-index').innerHTML = j+"/"+imgs.length;
}


function reset(){
    name();
    setTimeout(slide,4000);
}
