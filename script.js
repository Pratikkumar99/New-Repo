let userScore=0;
let compScore=0;

 const choices= document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const compScoreId=document.querySelector("#comp-score");
 const userScoreId=document.querySelector("#user-score");

 const genCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3); 
    return options[randIdx];

 }

 const drawGame =(compChoice)=>{
    msg.innerText=`Game was Draw, Comp- ${compChoice}, play again..`;
    msg.style.backgroundColor="#081b31";
 }
 const showWinner=(userWin,compChoice)=>{
    if(userWin){
        msg.innerText=`You Win!, Computer- ${compChoice}.`;
        msg.style.backgroundColor="green";
        userScore++;
        userScoreId.innerText = userScore

    }
    else{

        msg.innerText=`You Lose!, Computer- ${compChoice}.`;
        msg.style.backgroundColor="red";
        compScore++;
        compScoreId.innerText=compScore;
        
    }
 }

 const playGame = (userChoice) =>{
    console.log("UserChoice=",userChoice); 
    //Next step to generate computer choice -> modular
    const compChoice = genCompChoice();
    console.log("compChoice=",compChoice);

    if(userChoice === compChoice){
        //draw Game
        drawGame(compChoice);
    }else{
        let userWin =true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,compChoice);

    }

   
      
 }
 choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
 });