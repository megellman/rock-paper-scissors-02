let player = 0;
let computer = 0;

let playerScore = document.getElementById('player');
let computerScore = document.getElementById('computer');
playerScore.innerHTML = `You: ${player}`;
computerScore.innerHTML = `Computer: ${computer}`;

// objects for the game, winning combo and losing combo
const winGame = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
}
// randomly selects weapon from array for computer's pick
function randomPick(){
    let weapon = ['rock', 'paper', 'scissors'];
    return weapon[Math.floor(Math.random() * weapon.length)]
}
let playerPick;
document.addEventListener('click', function(e){
    playerPick = e.target.textContent.toLowerCase();
    playGame()
})
// looks for player/computer pick in winGame obj, if found, then player wins
// if same pick, tied
// if not, player loses  
function playGame(){
    // assigns prompt answer to playerPick variable
    let computerPick = randomPick();

    console.log(`player: ${playerPick}, computer: ${computerPick}`)
    if(winGame[playerPick] == computerPick){
        player++;
        console.log('You won!');
        console.log(player, computer);
    } else if(playerPick == computerPick) {
        console.log('You tied')
    } else {
        computer++;
        console.log('You lost');
        console.log(player, computer);
    }
    // playAgain()
}
// if player confirms play again, then the playGame function will run again
// if not, then the scores are reset 
function playAgain(){
    let answer = confirm('Play again?');
    if(answer === true){
        playGame()
    } else {
        player = 0;
        computer = 0;
    }
}

