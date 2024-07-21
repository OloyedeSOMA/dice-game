// storage of our dice images
const dice= ["dice-1.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png", "dice-6.png"]

//assigning variables to store  our players//
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

//assigning variables to store  our players score//
let player1_score = document.getElementById("score--0");
let player2_score = document.getElementById("score--1");

// first game values and assets starts//
let playeractive = true;
let current = 0;
let currentplayer = 0;
let score = 0;

document.getElementById("current--0").innerHTML = "0";
document.getElementById("current--1").innerHTML = "0";
player1_score.textContent = "0";
player2_score.textContent = "0";

document.querySelector(".btn--roll").disabled = false;

setTimeout(function() { alert("How The Game Works: (1) To play the game, you click on roll the dice button which then provide you a random dice number ranging from one to six [1 - 6]. (2) Then You click on hold button to add your points which then gives access to the second player. (3) You can choose to avoid the hold button by continuously pressing the roll the dice button which accumulate all your points but access is given back to the player 2 when you get a one [1] on the dice. (4) Null point is given when the dice shows one [1] (5)First player to reach '10' wins."); }, 500);

//first game values and assets ends//

//player switch mechanics/function

const Switch= function(){
    document.getElementById(`current--${currentplayer}`).innerHTML = 0;
    current = 0;
    currentplayer = currentplayer === 1 ? 0 : 1;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
}
// switch mechanics/function ends

//roll dice mechanics/function
function rollDice(){
    
    if (playeractive){
    
        if (document.getElementById(`score--${currentplayer}`).innerHTML >= 10){
            document.querySelector(`.player--${currentplayer}`).classList.add("player--winner"); 
            document.querySelector(`.player--${currentplayer}`).classList.remove("player--active");
            document.querySelector(".dice").classList.add("hidden");
            document.querySelector(".btn--roll").disabled = true;
            let player_name = document.getElementById(`name--${currentplayer}`).textContent;
            setTimeout(function() { alert(`Hurray!! ${player_name} wins`); }, 800);
            //window.alert(`${player_name} wins`);

            
        }
        
        
        //guessing Dice images counting from 0-5//  
        let guess = Math.floor(Math.random()* dice.length);
            console.log(guess);
        const final= dice[guess];
        
        let showcase= document.querySelector(".dice").src = "./image/"+ final;
        
        
        console.log(showcase); 

        // if (guess != 0){
        //     current+=guess+1;

        // }
            
            if (guess != 0){
            document.querySelector(".dice").classList.remove("hidden");
                current = current + Number(guess)+1;
                console.log(current);
                document.getElementById(`current--${currentplayer}`).innerHTML = current;
                // document.getElementById("current--0")
                // console.log(document.getElementById('current --${currentplayer}').innerHTML);
            }
        else{
            document.querySelector(".dice").classList.remove("hidden");
            Switch();
            score = score === 1 ? 0 : 1;
        }
    } 
}
//rolldice mechanics/function ends


// hold mechanics/function 
   function holdNow(){
    if (playeractive)

        if (document.getElementById(`score--${currentplayer}`).innerHTML >= 10){
            document.querySelector(".dice").classList.add("hidden");
            document.querySelector(`.player--${currentplayer}`).classList.add("player--winner"); 
            document.querySelector(`.player--${currentplayer}`).classList.remove("player--active");
            document.querySelector(".btn--roll").disabled = true;
        }
        else{
        document.getElementById(`score--${score}`).innerHTML = current + Number(document.getElementById(`score--${score}`).innerHTML);
        
            current = 0;
            currentplayer = currentplayer === 1 ? 0 : 1;
            score = score === 1 ? 0 : 1;
            player1.classList.toggle("player--active");
            player2.classList.toggle("player--active");
        }
    }
         
//hold mechanics/function ends

// new game mechanics/function  
document.querySelector(".btn--new").addEventListener('click',function(){
    document.querySelector(`.player--${currentplayer}`).classList.remove("player--winner");
    document.querySelector(".btn--roll").disabled = false;
    current = 0;
    score = 0;
    document.querySelector(`.player--${currentplayer}`).classList.remove("player--active");
    currentplayer = 0;
    player1_score.textContent = "0";
    player2_score.textContent = "0";
   
    document.querySelector(".dice").classList.add("hidden")

    document.querySelector(`.player--${currentplayer}`).classList.add("player--active");
  
    document.getElementById("current--0").innerHTML = 0;
    document.getElementById("current--1").innerHTML = 0;
});

//new game mechanics/function ends

    




