function start(){
document.getElementById('puzzleOne').style.display="block";
document.getElementById('start').style.display="none";
}

var answers = ["smiles","pear","pepper","snowman","human"]
var score = 0


function enterAnswer1(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[0]){
    alert("You're right!");
    score++
  document.getElementById('puzzleTwo').style.display="block";
  document.getElementById('puzzleOne').style.display="none";
  }
  else{
    alert("try again");
  }
}



function enterAnswer2(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[1]){
    alert("You're right!");
    score++
  document.getElementById('puzzleThree').style.display="block";
  document.getElementById('puzzleTwo').style.display="none";
  }
  else{
    alert("try again");
  }
}

function enterAnswer3(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[2]){
    alert("You're right!");
    score++
  document.getElementById('puzzleFour').style.display="block";
  document.getElementById('puzzleThree').style.display="none";
  }
  else{
    alert("try again");
  }
}

function enterAnswer4(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[3]){
    alert("You're right!");
    score++
  document.getElementById('puzzleFive').style.display="block";
  document.getElementById('puzzleFour').style.display="none";
  }
  else{
    alert("try again");
  }
}

function enterAnswer5(){
  var response = prompt("Please enter your answer :)");
  if (response === answers[4]){
    alert("You're right!");
    score++
  }
  else{
    alert("try again");
  }
};


function why1(){
  alert("The double S is separated by a mile.");
}

function why2(){
  alert("Pear is pronounced pair. ");
}

function why3(){
  alert("hot means spicy");
}

function why4(){
  alert("Snowmen melt");
}

function why5(){
  alert("When born, people crawl on four legs, walk on two legs as adults, and walk with crutches in their later years.");
};

function correctAnswer1(){
  alert("smiles");
}

function correctAnswer2(){
  alert("pear");
}

function correctAnswer3(){
  alert("pepper");
}

function correctAnswer4(){
  alert("snowman");
}

function correctAnswer5(){
  alert("human");
};

function getScore(){
  alert("Your score is " + score +" !")
}

function pass1(){
  document.getElementById('puzzleTwo').style.display="block";
  document.getElementById('puzzleOne').style.display="none";
}

function pass2(){
  document.getElementById('puzzleThree').style.display="block";
  document.getElementById('puzzleTwo').style.display="none";
}

function pass3(){
  document.getElementById('puzzleFour').style.display="block";
  document.getElementById('puzzleThree').style.display="none";
}

function pass4(){
  document.getElementById('puzzleFive').style.display="block";
  document.getElementById('puzzleFour').style.display="none";
}
