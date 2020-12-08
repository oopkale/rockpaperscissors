$("button").click(function(){
  
  // get the user input
  let userinput = $("#input").val();
  let userName = $("#name").val();
  
  // generate random computer input
  let computerchoice;
  let randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber < 1.0/3.0) {
        computerchoice = "rock"
  }
	else if (randomNumber < 2.0/3.0) {
        computerchoice = "scissors"
  
  }
  else if (randomNumber < 1) {
        computerchoice = "paper"        
  }
  
  // print user input to screen
  $("#userChoice").html(userinput)
  
  // print computer input to screen
  $("#computerChoice").html(computerchoice)
  
  // determine whether the user or the computer won
  if (userinput==="rock" && computerchoice==="scissors") {
    $("#result").html(userName+" Wins!")
  } 
  else if (userinput==="paper" && computerchoice==="scissors") {
    $("#result").html("computerwins")
  }
  else if (userinput==="scissors" && computerchoice==="scissors") {
    $("#result").html("tie")
  }
  else if (userinput==="rock" && computerchoice==="rock") {
    $("#result").html("tie")
  }
  else if (userinput==="paper" && computerchoice==="rock") {
    $("#result").html(userName+" Wins!")
  }
  else if (userinput==="scissors" && computerchoice==="rock") {
    $("#result").html("computer wins")
  }
  else if (userinput==="rock" && computerchoice==="paper") {
    $("#result").html("computerwins")
  }
  else if (userinput==="paper" && computerchoice==="paper") {
    $("#result").html("tie")
  }
  else if (userinput==="scissors" && computerchoice==="paper") {
    $("#result").html(userName+" Wins!")
  }
  
  
  

});





