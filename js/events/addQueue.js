document.getElementById('addQueueButton').addEventListener('click', () => {
    const dropdown = document.getElementById('addQueueDropdown');

    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        dropdown.classList.add('show');
    }
});

window.onclick = (event) => {
    const dropdown = document.getElementById('addQueueDropdown');
    if (dropdown.classList.contains('show')
        && !event.target.matches('#addQueueButton')
        && event.target.parentNode.id !== 'addQueueDropdown') {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

document.getElementById('queue-file').addEventListener('change', (data) => {
    const dropdown = document.getElementById('addQueueDropdown');
    dropdown.classList.remove('show');
    addToQueue(data);
});

document.getElementById('queue-folder').addEventListener('change', (data) => {
    const dropdown = document.getElementById('addQueueDropdown');
    dropdown.classList.remove('show');
    addToQueue(data);
});


const whitelist = [
    '.flac',
    '.mp3',
    '.wav'
]

function addToQueue(data) {
    if (!data.target.files.length) return alert('This directory does not include any files.')
    const queueList = document.getElementById('queueList');
    const clearQueueButton = document.getElementById('clear-queue-button');

    for (const file of data.target.files) {
        for (const extension of whitelist) {
            if (file.name.endsWith(extension)) {
                const songFile = new FileReader();
                const songName = file.name;
                songFile.readAsDataURL(file);

                songFile.onloadend = (event) => {
                    const song = new Howl({
                        src: [event.target.result]
                    });

                    process(song, songName);
                }
            }
        }
    }

    queueList.style.display = 'block';
    clearQueueButton.style.display = 'block';
}