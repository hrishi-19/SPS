const HandOptions={
    "rock":"/SPS/assets/Rock.png",
    "paper":"/SPS/assets/Paper.png",
    "scissor":"/SPS/assets/Scissors.png"
}

const PickUserHand=(hand)=>{
    let handSelected=document.querySelector('.game');
    let AfterSelected=document.querySelector('.result');
    handSelected.style.display="none";
    AfterSelected.style.display='flex';

    //set userPickedHand
    document.getElementById("PickedHand").src=HandOptions[hand];
    
}
const restart=()=>{
    let handSelected=document.querySelector('.game');
    let AfterSelected=document.querySelector('.result');
    handSelected.style.display="flex";
    AfterSelected.style.display='none';
}