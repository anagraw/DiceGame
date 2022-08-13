var rando= Math.floor(Math.random()*6)+1;
var randimg= "dice"+ rando+".png";
var randimgso= "images/"+randimg;
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src", randimgso);

var rando2= Math.floor(Math.random()*6)+1;
var randimgso2= "images/dice"+ rando2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src", randimgso2);

if(rando>rando2){
  document.querySelector("h1").innerHTML= " 🏁 Player 1 wins!"
}
else if (rando2> rando){
  document.querySelector("h1").innerHTML= " 🏁 Player 2 wins!"
}
else{
  document.querySelector("h1").innerHTML= " 🏁 Draw! 🏁"
}
