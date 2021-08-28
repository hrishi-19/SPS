const HandOptions={
    "rock":"./assets/Rock.png",
    "paper":"./assets/Paper.png",
    "scissor":"./assets/Scissors.png"
}

const HandPicked=(hand)=>{
    let handSelected=document.querySelector('.game');
    let AfterSelected=document.querySelector('.result');
    handSelected.style.display="none";
    AfterSelected.style.display='flex';

    //set userPickedHand
    document.getElementById("PickedHand").src=HandOptions[hand];
    ComputerHand();
}
const ComputerHand=()=>{
    let hands=["rock","paper","scissor"]
    let cpHand=hands[Math.floor(Math.random() * 3)]
    document.getElementById("game-hand").src=HandOptions[cpHand];
}
    
//function to play again
const restart=()=>{
    let handSelected=document.querySelector('.game');
    let AfterSelected=document.querySelector('.result');
    handSelected.style.display="flex";
    AfterSelected.style.display='none';
}