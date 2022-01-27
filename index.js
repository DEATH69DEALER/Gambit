var a1 = Math.random();
 var b1 = a1*6;

 var c1 = Math.floor(b1);

 var d1 =  c1+1;


 var a2 = Math.random();
  var b2 = a2*6;

  var c2 = Math.floor(b2);

  var d2 =  c2+1;

document.querySelector(".img1").setAttribute("src", "images/dice"+ d1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+ d2 + ".png");

if( d1 === d2){
  document.querySelector("h1").innerText = "DRAW ,Roll the dice again."
}

else if( d1 > d2){
  document.querySelector("h1").innerText = "Player 1 wins"
}

else{
    document.querySelector("h1").innerText = "Player 2 wins"
}
