let title = document.title;

let songQueue = [];
let playing = {
    index: 0,
    song: null,
    state: false
}

let repeat = window.localStorage.getItem('repeat');
let shuffle = window.localStorage.getItem('shuffle') === 'true';

switch (repeat) {
    case 'song':
        document.getElementById('repeatButton').value = 'Repeat[]';
        break;
    case 'queue':
        document.getElementById('repeatButton').value = 'Repeat[1]';
        break;
}

switch (shuffle) {
    case true:
        document.getElementById('shuffleButton').value = 'Shuffle[]';
        break;
}