// establish the player and computer
// if there's a winning combo, give player a point, ask if they want to play again,
// if there's a losing combo, give computer a point, ask if they want to play again

let player = 0;
let computer = 0;

// objects for the game, winning combo and losing combo
const winGame = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
}

// function to randomly pick for the computer
function randomPick(){
    let weapon = ['rock', 'paper', 'scissors'];
    return weapon[Math.floor(Math.random() * weapon.length)]
}

// function playGame that will call the random pick function to get the computer's selection, asks the user for a selection, and then scans the game object to see if there's a match for a win,
function playGame(){
    let computerPick = randomPick();
    let playerPick = (prompt('Rock, Paper, or Scissors').toLowerCase());

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
}

playGame()