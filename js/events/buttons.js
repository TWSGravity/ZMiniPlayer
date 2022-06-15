document.getElementById('repeatButton').addEventListener('click', () => {
    const button = document.getElementById('repeatButton');

    switch (button.value) {
        case 'Repeat':
            button.value = 'Repeat[]';
            repeat = 'song'
            window.localStorage.setItem('repeat', repeat);
            break;
        case 'Repeat[]':
            button.value = 'Repeat[1]';
            repeat = 'queue'
            window.localStorage.setItem('repeat', repeat);
            break;
        case 'Repeat[1]':
            button.value = 'Repeat';
            repeat = 'none';
            window.localStorage.setItem('repeat', repeat);
            break;
    }

    if (playing.song) playing.song.loop(repeat === 'song' ? true : false);
});

document.getElementById('stopButton').addEventListener('click', () => {
    document.getElementById('stopButton').style.display = 'none';
    document.getElementById('startButton').style.display = '';
    document.title = title;
    playing.song.stop();
});

document.getElementById('startButton').addEventListener('click', () => {
    if (!songQueue.length) return alert('There are no songs in the queue.');
    const song = songQueue[playing.index || 0];
    document.title = `${title} | ${song.name}`;
    document.getElementById('stopButton').style.display = '';
    document.getElementById('startButton').style.display = 'none';
    playing.song = song;
    playing.index = playing.index || 0;
    playing.state = true;
    playing.song.play();
});

document.getElementById('shuffleButton').addEventListener('click', () => {
    const button = document.getElementById('shuffleButton');

    switch (button.value) {
        case 'Shuffle':
            button.value = 'Shuffle[]';
            shuffle = true;
            window.localStorage.setItem('shuffle', true);
            break;
        case 'Shuffle[]':
            button.value = 'Shuffle';
            shuffle = false;
            window.localStorage.setItem('shuffle', false);
            break;
    }
});

document.getElementById('clear-queue-button').addEventListener('click', () => {
    const queueList = document.getElementById('queueList');
    const clearQueueButton = document.getElementById('clear-queue-button');
    queueList.innerHTML = '<h2>Queue</h2>';
    queueList.style.display = 'none';
    clearQueueButton.style.display = 'none';
    songQueue = [];

    if (playing.song) playing.song.stop();
    document.getElementById('stopButton').style.display = 'none';
    document.getElementById('startButton').style.display = '';
    document.title = title;

    playing = {
        index: 0,
        song: null,
        state: false
    };
});