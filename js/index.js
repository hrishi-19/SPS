const HandOptions={
    "rock":"./assets/Rock.png",
    "paper":"./assets/Paper.png",
    "scissor":"./assets/Scissors.png"
}
let  SCORE = 0;
const HandPicked=(hand)=>{
    
    let handSelected=document.querySelector('.game');
    let AfterSelected=document.querySelector('.result');
    handSelected.style.display="none";
    AfterSelected.style.display='flex';

    //set userPickedHand
    document.getElementById("PickedHand").src=HandOptions[hand];

    let gameHand=ComputerHand();
    refere(hand,gameHand);
    
    
}
const ComputerHand=()=>{
    let hands=["rock","paper","scissor"]
    let cpHand=hands[Math.floor(Math.random() * 3)]
    document.getElementById("game-hand").src=HandOptions[cpHand];
    return cpHand;
}
const refere=(hand,gameHand)=>{
    if(hand=="rock"&& gameHand=="paper")
    {
        setDecision('YOU LOOSE!');
    }
    if(hand=="rock"&&gameHand=="scissor")
    {
        setDecision('YOU WIN!');
        setScore(SCORE + 1);
    }
    if(hand=="rock"&&gameHand=="rock")
    {
        setDecision("IT'S A TIE!");
    }
    if(hand=="paper"&&gameHand=="scissor")
    {
        setDecision('YOU LOOSE!');
    }
    if(hand=="paper"&&gameHand=="paper")
    {
        setDecision("IT'S A TIE!");
    }
    if(hand=="paper"&&gameHand=="rock")
    {
        setDecision('YOU WIN!');
        setScore(SCORE + 1);
    }
    if(hand=="scissor"&&gameHand=="paper")
    {
        setDecision('YOU WIN!');
        setScore(SCORE + 1);
    }
    if(hand=="scissor"&&gameHand=="rock")
    {
        setDecision('YOU LOOSE!');
    }
    if(hand=="scissor"&&gameHand=="scissor")
    {
        setDecision("IT'S A TIE!");
    }

}

const setDecision=(decision)=>{
    document.querySelector('.refree h1').innerText=decision;
}
const setScore=(score)=>{
    SCORE=score;
    document.querySelector('.board h1').innerText=score;
} 
//function to restart game
const restart=()=>{
    let handSelected=document.querySelector('.game');
    let AfterSelected=document.querySelector('.result');
    handSelected.style.display="flex";
    AfterSelected.style.display='none';
}