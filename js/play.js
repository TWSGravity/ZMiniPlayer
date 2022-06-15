function play(id) {
    const song = songQueue[id];
    if (!song) {
        alert('This song is not in the queue.');
        const songInList = document.getElementById(`${id}`);
        songInList.remove();
        return;
    }

    if (playing.song) playing.song.stop();
    playing.song = song;
    playing.index = id;
    playing.state = true;

    playing.song.play();
    document.title = `${title} | ${song.name}`;
    document.getElementById('stopButton').style.display = '';
    document.getElementById('startButton').style.display = 'none';
}