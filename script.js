let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#comp-score");




 let draw = () => {console.log (`game was draw`)
 msg.innerHTML = " Game Was Draw";
 msg.style.backgroundColor = "green"
}

 function gecompChoice () {
    const options = ["rock", "paper", "sissor" ]
    let number = Math.floor(Math.random()* 3)
    return options[number];

}

let showWinner = (userWin) => {
    if (userWin) {
    msg.innerHTML = "User Won"
    msg.style.backgroundColor= "red";
    userScore++;
    userpara.innerHTML= userScore
}
    else {
    msg.innerHTML = " Comp Won";
    msg.style.backgroundColor = " blue";
    compScore++;
    comppara.innerHTML=compScore;
}
}


function playGame (userChoice) {
    console.log(`userChoice ${userChoice}`);
   const compchoice =  gecompChoice();
    console.log(`compChoice`, compchoice )

    if (userChoice === compchoice) {
        draw();
      }else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compchoice === "sissor" ? false : true;
        }else  {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin);

      } 

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => 
    {const userChoice = choice.getAttribute("id");

      playGame(userChoice);
})
})