function process(song, name) {
    song.loop(repeat === 'song');
    song.name = name;

    const id = songQueue.length;
    const list = document.getElementById('queueList');

    song.on('end', () => {
        if (repeat === 'queue') {
            if (playing.index + 1 > songQueue.length - 1) playing.index = 0;
            else playing.index++;
            play(playing.index);
        } else if (repeat === 'none') {
            songQueue.splice(playing.index, 1);
            list.innerHTML = list.innerHTML.replace(`<h4 title="Play ${playing.song.name}" id="${playing.index}" style="cursor:pointer;" onclick="play(${playing.index})">${playing.song.name}</h4>`, '');
            if (playing.index > songQueue.length - 1) playing.index = 0;

            if (songQueue[playing.index]) play(playing.index);
            else document.getElementById('stopButton').click();
        }
    });

    list.innerHTML +=
        `<h4 title="Play ${name}" id="${id}" style="cursor:pointer;" onclick="play(${id})">${name}</h4>`;
    songQueue.push(song);
}