let game = { // state
    playing: false,
    seconds: 0,
    minutes: 0,
};

let playBtn = document.getElementById('play');
let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let inputName = document.getElementById('input');
let newUsername = document.getElementById('playerName');
let submitBtn = document.getElementById('submit');

playBtn.addEventListener('click', function() {
    game.playing = true;
});

function submitClick() {
    newUsername.innerHTML = inputName.value
    inputName.value = ''
  }
  
  submitBtn.addEventListener("click", submitClick )

function advanceTime() {
    if (game.playing === false) {
        return;
    }
    game.seconds++;
    if (game.seconds === 60) {
        game.minutes++
        game.seconds = 0
    }

    minutes.innerText = game.minutes;
    seconds.innerText = game.seconds;
}

setInterval(advanceTime, 1000);