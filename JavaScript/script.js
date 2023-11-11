var player1Score = 0;
var player2Score = 0;

function rollDice() {
    var value1 = Math.floor(Math.random() * 6) + 1;
    var value2 = Math.floor(Math.random() * 6) + 1;

    updateDice('dice1', value1);
    updateDice('dice2', value2);

    if (value1 > value2) {
        incrementScore('player1-score');
    } else if (value2 > value1) {
        incrementScore('player2-score');
    }
}

function updateDice(diceId, value) {
    var dice = document.getElementById(diceId);
    dice.innerHTML = ''; // Clear previous dots

    for (var i = 0; i < value; i++) {
        var dot = document.createElement('div');
        dot.className = 'dot';
        dice.appendChild(dot);
    }
}

function incrementScore(scoreId) {
    var playerScore = document.getElementById(scoreId);
    var currentScore = parseInt(playerScore.innerText, 10);
    playerScore.innerText = currentScore + 1;
}
