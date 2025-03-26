'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
let playerScore1 = 0;
let playerSCore2 = 0;
let player = true;
roll.addEventListener('click', function () {
    const number = Math.trunc(Math.random() * 5);
    switch (number) {
        case 0: {
            dice.src = 'dice-1.png';
            if (player) {
                playerScore1 = 0;
                score0.textContent = 0;
            } else {
                playerSCore2 = 0;
                score1.textContent = 0;
            }
            player = !player;
            changecolor();
            break;
        }
        case 1: {
            dice.src = 'dice-2.png';
            if (player) {
                playerScore1 += 2;
                score0.textContent = playerScore1;
                if (playerScore1 > 20) {
                    current0.textContent = Number(current0.textContent) + 1;
                    playerScore1 = 0;
                    score0.textContent = 0;
                    
                }
            }
            else {
                playerSCore2 += 2;
                score1.textContent = playerSCore2;
                if (playerSCore2 > 20) {
                    current1.textContent = Number(current1.textContent) + 1;
                    playerSCore2 = 0;
                    score1.textContent = 0;
                }
            }

            break;
        }
        case 2: {
            dice.src = 'dice-3.png';
            if (player) {
                playerScore1 += 3;
                score0.textContent = playerScore1;
                if (playerScore1 > 20) {
                    current0.textContent = Number(current0.textContent) + 1;
                    playerScore1 = 0;
                    score0.textContent = 0;
                }
            }
            else {
                playerSCore2 += 3;
                score1.textContent = playerSCore2;
                if (playerSCore2 > 20) {
                    current1.textContent = Number(current1.textContent) + 1;
                    playerSCore2 = 0;
                    score1.textContent = 0;
                }
            }
            break;
        }
        case 3: {
            dice.src = 'dice-4.png';
            if (player) {
                playerScore1 += 4;
                score0.textContent = playerScore1;
                if (playerScore1 > 20) {
                    current0.textContent = Number(current0.textContent) + 1;
                    playerScore1 = 0;
                    score0.textContent = 0;
                }
            }
            else {
                playerSCore2 += 4;
                score1.textContent = playerSCore2;
                if (playerSCore2 > 20) {
                    current1.textContent = Number(current1.textContent) + 1;
                    playerSCore2 = 0;
                    score1.textContent = 0;
                }
            }
            break;
        }
        case 4: {
            dice.src = 'dice-5.png';
            if (player) {
                playerScore1 += 5;
                score0.textContent = playerScore1;
                if (playerScore1 > 20) {
                    current0.textContent = Number(current0.textContent) + 1;
                    playerScore1 = 0;
                    score0.textContent = 0;
                }
            }
            else {
                playerSCore2 += 5;
                score1.textContent = playerSCore2;
                if (playerSCore2 > 20) {
                    current1.textContent = Number(current1.textContent) + 1;
                    playerSCore2 = 0;
                    score1.textContent = 0;
                }
            }
            break;
        }
        case 5: {
            dice.src = 'dice-6.png';
            if (player) {
                playerScore1 += 6;
                score0.textContent = playerScore1;
                if (playerScore1 > 20) {
                    current0.textContent = Number(current0.textContent) + 1;
                    playerScore1 = 0;
                    score0.textContent = 0;
                }
            }
            else {
                playerSCore2 += 6;
                score1.textContent = playerSCore2;
                if (playerSCore2 > 20) {
                    current1.textContent = Number(current1.textContent) + 1;
                    playerSCore2 = 0;
                    score1.textContent = 0;
                }
            }
            break;
        }
        default: {
            dice.src = "pig-game-flowchart.png"
        }
    }

})

//hold
hold.addEventListener('click', function () {
    player = !player;
    changecolor();
})

//new game
newGame.addEventListener('click', function () {
    current1.textContent = 0;
    playerSCore2 = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    playerScore1 = 0;
    score0.textContent = 0;
    player=true;
})
function changecolor(){
    if(player1.classList.contains('active')){
        player2.classList.add('active');
        player1.classList.remove('active');
    }
    else{
        player1.classList.add('active');
        player2.classList.remove('active');
    }
}