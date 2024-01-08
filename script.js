const searchbar = document.getElementsByClassName('search-bar');
const censorButton = document.getElementById('censor-button');
const censorText = document.getElementById('censor-text');
const songClean = document.getElementById('song-clean');
const songXXX = document.getElementById('song-xxx');

//censor state toggle... AKA, Bleep
let bleep = false;
let timeBump = 0.07;

//Button Behavior
censorButton.addEventListener("click", () => {
    censorButton.innerText = (buttonIcon(toggle() ) );
    censorText.innerText = (buttonInfo(bleep) );
    bleeped(bleep);
});

//Video player

//State switcher
var toggle = function(){
    if (bleep) {
        bleep = false;
    } else {
        bleep = true;
    }
    return bleep;
};

//Button Icon Switcher
var buttonIcon = function(pick) {
    if(pick) {
        return '🙉';
    } else {
        return '🤬';
    }
}

//Button Info Switcher
var buttonInfo = function(pick) {
    if(pick) {
        return 'Censor: On';
    } else {
        return 'Censor: Off';
    }
}

//Song Logic
function bleeped(pick) {
    if(pick) {
        songClean.style.visibility = 'visible';
        songXXX.style.visibility = 'hidden';
        songClean.currentTime = songXXX.currentTime + timeBump;
        songXXX.muted = true;
        songClean.muted = false
    } else {
        songClean.style.visibility = 'hidden';
        songXXX.style.visibility = 'visible';
        songXXX.currentTime = songClean.currentTime + timeBump;
        songClean.muted = true;
        songXXX.muted = false;
    }
}

//Video Syncer
songXXX.onplay = function() {
    songClean.play();
}
songClean.onplay = function() {
    songXXX.play();
}

songXXX.onpause = function() {
    songClean.pause();
}

songClean.onpause = function() {
    songXXX.pause();
}

// State 1: 🤬

// State 2: 🙉
