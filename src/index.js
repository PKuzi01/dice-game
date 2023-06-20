//button
function rollDice() {
   //dice one
    let randomNum1 = Math.floor(Math.random () * 6) + 1;
    let dice1 = document.querySelector('#dice1');
    let pathName1 = `./src/imgs/dice${randomNum1}.png`;
    dice1.src = pathName1

    //dice two
    let randomNum2 = Math.floor(Math.random() * 6) + 1;
    let dice2 = document.querySelector('#dice2');
    let pathName2 = `./src/imgs/dice${randomNum2}.png`;
    dice2.src = pathName2; 

    //winner announcement 
    let element = document.querySelector('#result');
    if (randomNum1 > randomNum2) {
        element.innerHTML = 'Player one wins!!';
    } else if (randomNum1 < randomNum2) {
        element.innerHTML = 'Player two wins!!';
    } else if (randomNum1 === randomNum2) {
        element.innerHTML = "It's a draw!!"
    };
}

let rollButton = document.querySelector('#button');
rollButton.addEventListener('click', rollDice);