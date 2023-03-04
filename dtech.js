var goleft=document.getElementById("video-card1")
var goleft2=document.getElementById("video-card2")
var goleft3=document.getElementById("video-card3")
var goleft4=document.getElementById("video-card4")
var goleft5=document.getElementById("video-card5")
var goleft6=document.getElementById("v-content-ul")
var btn1=document.getElementById("button1")
var btn2=document.getElementById("button2")
var btn3=document.getElementById("button3")
var btn4=document.getElementById("button4")
var btn5=document.getElementById("button5")
var btn6=document.getElementById("button6")
function first(){
    goleft6.style.marginLeft="1650px";
    goleft6.style.transition="2s";
    btn1.style.color="red";
    btn2.style.color="white";
    btn3.style.color="white";
    btn4.style.color="white";
    btn5.style.color="white";
    btn6.style.color="white";
    

}
function second(){
    goleft6.style.marginLeft="845px";
    goleft6.style.transition="2s"
    btn1.style.color="white";
    btn2.style.color="red";
    btn3.style.color="white";
    btn4.style.color="white";
    btn5.style.color="white";
    btn6.style.color="white";
}
function third(){
    goleft6.style.marginLeft="52px";
    goleft6.style.transition="2s"
    btn1.style.color="white";
    btn2.style.color="white";
    btn3.style.color="red";
    btn4.style.color="white";
    btn5.style.color="white";
    btn6.style.color="white";
}
function fourth(){
    goleft6.style.marginLeft="-750px";
    goleft6.style.transition="2s"
    btn1.style.color="white";
    btn2.style.color="white";
    btn3.style.color="white";
    btn4.style.color="red";
    btn5.style.color="white";
    btn6.style.color="white";
}
function fifth(){
    goleft6.style.marginLeft="-1550px";
    goleft6.style.transition="2s"
    btn1.style.color="white";
    btn2.style.color="white";
    btn3.style.color="white";
    btn4.style.color="white";
    btn5.style.color="red";
    btn6.style.color="white";
}
function sixth(){
    goleft6.style.marginLeft="-2352px";
    goleft6.style.transition="2s"
    btn1.style.color="white";
    btn2.style.color="white";
    btn3.style.color="white";
    btn4.style.color="white";
    btn5.style.color="white";
    btn6.style.color="red";
}


//----------------------hamburger----------------------

var navbar=document.getElementById("nav");
var menubtn=document.getElementById("menu");
var closebtn=document.getElementById("closebtn");
function menuSlide(){
    navbar.style.height="20rem";
    navbar.style.transition="1s";
    menubtn.style.transform="rotateZ(90deg)";
    menubtn.style.transition="1s";
    closebtn.style.transform="rotateZ(180deg)";
    closebtn.style.transition="3s";
}
function menuoffSlide(){
    navbar.style.height="8rem";
    navbar.style.transition="1s";
    menubtn.style.transform="rotateZ(0deg)";
    menubtn.style.transition="1s";
    closebtn.style.transform="rotateZ(0deg)";
    closebtn.style.transition="0.5s";
}


let sticky=document.getElementById("stickybar")
let side=document.getElementById("sidecontent")
let side2=document.getElementById("sidecontent0")
let conn=document.getElementById("connection")
let gif=document.getElementById("gifimg")
window.addEventListener("scroll",
function(){
    if(window.pageYOffset > 900)
{
   sticky.style.backgroundColor="rgb(87 153 247)";
   side.style.marginLeft="0"
   side.style.opacity="100%"
   side.style.transition="3s"
   side2.style.marginLeft="0"
   side2.style.opacity="100%"
   side2.style.transition="3s"
  
   
}
else{
    sticky.style.backgroundColor="red";
    side.style.marginLeft="20%"
   side.style.opacity="10%"
   side.style.transition="3s"
   side2.style.marginLeft="-30%"
   side2.style.opacity="10%"
   side2.style.transition="3s"
//    conn.style.marginLeft="20%"
//    gifimg.style.marginLeft="20%"
//    conn.style.transition="3s"
//    gifimg.style.transition="3s"
}
}



)