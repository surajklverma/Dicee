function random ()
{
  return Math.ceil(Math.random()*6);
}

var randomNumber1=random();
var randomNumber2=random();
var randomDiceImage="dice"+randomNumber1+".png";
var imageSource1="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource1);

var imageSource2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img") [1];
image2.setAttribute("src", imageSource2);


if (randomNumber1===randomNumber2)
{
  document.querySelector("h1").innerHTML="Draw";
}

else if(randomNumber1>=randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player1 wins";
}

else
{
  document.querySelector("h1").innerHTML="Player2 wins🚩";
}
