/*-------------------------------- Constants --------------------------------*/
const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
}



/*---------------------------- Variables (state) ----------------------------*/

let timer;
let gameOver;


/*------------------------ Cached Element References ------------------------*/
// Adding Play Again button to a variable

const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');

const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');

const gameMessageEl = document.getElementsByClassName('game-state-wrapper');
const resetBtnEl = document.getElementById('restart');

const messageVis = document.querySelectorAll('.hidden');


// console.log(boredomStatEl);
// console.log(hungerStatEl);
// console.log(sleepinessStatEl);
// console.log(playBtnEl);
// console.log(feedBtnEl);
// console.log(sleepBtnEl);
// console.log(gameMessageEl);
// console.log(resetBtnEl);
// console.log(allButtons);





/*----------------------------- Event Listeners -----------------------------*/

// When play, feed, or sleep is clicked, run function to randomly increment
//    corresponding value
playBtnEl.addEventListener('click', playBtnClick);
sleepBtnEl.addEventListener('click', sleepinessBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);


// When Play Again button is clicked, run init (restart the game)
resetBtnEl.addEventListener('click', init);


/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  messageVis.forEach(element => {
    element.classList.add('hidden');
  })
  // Reset values to 0
  state.boredom = 0;
  state.hunger = 0;
  state.sleepiness = 0;
  // Reset visual values to 0
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepinessStatEl.textContent = state.sleepiness;
  // gameOver = false, so continue game
  gameOver = false;
  // setInterval repeatedly calls runGame every 2000ms (2 secs)
  timer = setInterval(runGame, 2000);
}

function runGame() {
  updateStates();
  checkGameOver();
  render();
}

function render() {
  // Replacing textContent of each 
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepinessStatEl.textContent = state.sleepiness;
  if (gameOver === true) {
    clearInterval(timer);
    // querySelectorAll to grab all elements with .hidden class then
    //  then used a forEach remove .hidden from all elements
    messageVis.forEach(element => {
      element.classList.remove('hidden');
    });
  }
}

// Sets boredom back to 0 on click
function playBtnClick() {
  state.boredom = 0;
  render();
}

// Sets hunger back to 0 on click
function feedBtnClick() {
  state.hunger = 0;
  render();
}

// Sets boredom back to 0 on click
function sleepinessBtnClick() {
  state.sleepiness = 0;
  render();
}

// Updates value of each state randomly from 0-3
function updateStates() {
  state.boredom += Math.floor((Math.random() * (3 + 1)));
  state.hunger += Math.floor((Math.random() * (3 + 1)));
  state.sleepiness += Math.floor((Math.random() * (3 + 1)));
}

function checkGameOver() {
  if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness>= 10) {
    gameOver = true;
  }
}
