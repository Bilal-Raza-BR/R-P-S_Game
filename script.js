let userScore = 0;
let compScore = 0;

let uChoice = document.querySelector('#user-choice');
let cChoice = document.querySelector('#computer-choice');

const userResult = document.querySelector('#userScore');
const compResult = document.querySelector('#compScore');

console.log(userResult,compResult);

const result = document.querySelector('#result');

// get all the options 
const choices = document.querySelectorAll('.choice');
console.log(choices);





// functions for game decision 
const drawGame = () => {
    console.log('Game was Draw');
    result.innerHTML = 'Game was Draw, Play Again';
    result.style.backgroundColor = 'rgb(0, 2, 32)'
}




// function to show winner 
const showWinner = (userWin , CompChoice , userChoice) => {

    if(userWin) {
        userScore++;
        userResult.innerHTML = userScore;
        console.log('You Win!');
        result.innerHTML = `You Win! your ${userChoice} beats ${CompChoice}`;
        result.style.backgroundColor = 'green';


    } else {
        compScore++;
        compResult.innerHTML = compScore;
        console.log('You Lose');
        result.innerHTML = `You Lost. ${CompChoice} beats your ${userChoice}`;
        result.style.backgroundColor = 'red';

    }
}



// because choices return a nodeList 
choices.forEach(
    // choices k her index pr ye kam krwana h 
    (choice)=> { //name choice Do ya c Do koi farq nhe parta bs, nichay bhi name same dena
        //   aur us pr ye kam krna h, eventListner add krna h 
        choice.addEventListener( 'click', ()=> {
            //  aur phir event listner pr bhi kuch kam hi krwana hota h
            
            // jis choice pr click hoga, uski id is me store ho gye gi 
            const userChoice = choice.getAttribute('id');
            // console.log('choice was clickd!',userChoice);

            // userChoice k ander jo value aye GainNode, wo playGame function k arrgument hogi, look below! 
            playGame(userChoice); // arrgument of playGame = userChoice == rock/paper/scissors

        });

    }

);



// LOGIC for generate computer choice 
const genCompChoice = () => {

    //rock, paper , scissors (create a array for getting computer choice value)
    let choices = ['rock','paper','scissors'];

    // apply a logic to get random value of Array, through random number generate 
    const randomIndex = Math.floor(Math.random()*3); // 0,1,2   < 3

    // return the random index of options array 
    return choices[randomIndex];

}



// function for play the game 
const playGame = (userChoice) => { // parameter of playGame = userChoice and its arrgument, define below!

    // this is userChoice
    console.log('userChoice ==> ',userChoice);

    // get computer choice, from above function 
    const CompChoice = genCompChoice();
    console.log('comp choice ==> ', CompChoice);

    // show the images in box VS
    uChoice.style.backgroundImage =  `url(./assets/${userChoice}.png)`
    cChoice.style.backgroundImage = `url(./assets/${CompChoice}.png)`
   


    uChoice.innerHTML = '';
    cChoice.innerHTML = '';


    // conditions for game decision
    if (userChoice === CompChoice) {

        drawGame();

    } else {

        // suppose we are won 
        let userWin = true;
        //if we chooose rock then comp choose scissors or paper, because comp bhi rock choose kry ga to draw ho gye ga
        if (userChoice === "rock") {

            //scissors or paper
            userWin = CompChoice == 'scissors' ? true : false;

        }
        else if ( userChoice == 'paper') {

            // comp can choose (rock or sciccors), paper pr to drawGame ka function chal gye ga
            userWin = CompChoice == 'rock' ? true : false;
            
        } 
        else if ( userChoice == 'scissors') {

            // comp can choose (rock or paper), paper pr to drawGame ka function chal gye ga
            userWin = CompChoice == 'paper' ? true : false;

        }

        showWinner(userWin , CompChoice , userChoice);
    }

}
function animat(){
     
     uChoice.className = 'animate__animated animate__flip'
    cChoice.className = 'animate__animated animate__flip'
setTimeout(() => {
    uChoice.className = 'noClass'
   cChoice.className = 'noClass'
    
}, 600);

}
