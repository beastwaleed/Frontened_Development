// Ensure the DOM is fully loaded before executing JavaScript that interacts with it.
document.addEventListener('DOMContentLoaded', main);


const genericMusicIconPath = '/images/music.png';
const songs = []; // Array to store the extracted song filenames.

// --- Helper function to parse filename into song title and artist ---
// This function assumes filenames are consistently formatted as "Song Name - Artist Name.mp3".
function parseSongFilename(filename) {
     let title = "Unknown Title";
     let artist = "Unknown Artist";

    // Remove the .mp3 extension
    let cleanedFilename = filename.replace(/\.mp3$/, '');

    // Attempt to split the cleaned filename by " - "
    const parts = cleanedFilename.split(' - ');

    if (parts.length >= 2) {
        title = parts[0].trim();
        // Join the rest of the parts to handle cases where the artist name itself contains " - "
        artist = parts[1].trim();
    } 
    return { title, artist };
}


// --- Your Fixed getSongs function ---
// This function attempts to fetch an HTML directory listing from a local web server.
// It relies on that server being configured to provide such a listing.
async function getSongs(folder) {
    const libraryUl = document.querySelector('.songList ul');

    libraryUl.innerHTML = ''; // Clear existing list items before populating.

    console.log(`Attempting to fetch directory listing from: /${folder}/`);
    let response = await fetch(`/${folder}/`);

    // We still need to check if the HTTP response itself was successful.
    if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status} when fetching /${folder}/`);
        console.error("Please ensure your simple local web server is running and configured to show directory listings.");
        return songs; // Return empty array on error.
    }

    let responseText = await response.text();
    console.log(responseText);

    // Create a temporary div element to parse the HTML response.
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = responseText;

    // Find all <a> (anchor/link) tags within the parsed HTML.
    let links = tempDiv.getElementsByTagName("a");

    // Iterate through the links to find MP3 files.
    for (let i = 0; i < links.length; i++) {
        const linkElement = links[i];
        const href = linkElement.getAttribute('href'); // Get the href attribute of the link

        // Check if the link ends with ".mp3" (case-insensitive)
        // And ensure it's not a link to the parent directory ("../").
        if (href && href.toLowerCase().endsWith(".mp3") && href !== "../") {
            // Extract the filename from the href.
            const filename = decodeURIComponent(href.split('\\').pop());

            songs.push(filename); // Add the filename to songs array.

            // --- Display the song in the list ---
            const { title, artist } = parseSongFilename(filename);

            const listItem = document.createElement('li');
            listItem.classList.add('library-list-item');

            const audioPath = `/${folder}/${encodeURIComponent(filename)}`;

            listItem.innerHTML = `
            <div class="librarySection">
            <div class="song-details">
                <h3>${title}</h3>
                <p>${artist}</p>
                </div>
                <div class="playSongs">
                <p class="playsong">Play Song</p> </div>
                </div>
            `;
            listItem.dataset.audio = audioPath; // Store the full audio path for playback.
            libraryUl.appendChild(listItem);
        }
    }
    return songs; // Return the list of filenames that were found and displayed.
}


async function songsCards(folder) {
    const cardContainer = document.querySelector('.cardContainer');

    if (!cardContainer) {
        console.error("Error: '.cardContainer' element not found in HTML. Check your HTML structure.");
        return;
    }

    cardContainer.innerHTML = '';

    console.log(`Attempting to fetch directory listing for cards from: /${folder}/`);
    let response = await fetch(`/${folder}/`);

    // CRITICAL CHECK: Still need to verify if the server response was OK (e.g., not a 404).
    if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status} when fetching /${folder}/ for cards.`);
        console.error("Please ensure your simple local web server is running and configured to show directory listings.");
        return;
    }

    let responseText = await response.text();
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = responseText;
    let links = tempDiv.getElementsByTagName("a");

    for (let i = 0; i < links.length; i++) {
        const linkElement = links[i];
        const href = linkElement.getAttribute('href');

        if (href && href.toLowerCase().endsWith(".mp3") && href !== "../") {
            const filename = decodeURIComponent(href.split('\\').pop());
            const { title, artist } = parseSongFilename(filename);

            const imageFile = `${encodeURIComponent(title)}.jpg`;
            const imagePath = `/images/${imageFile}`;

            const songCard = document.createElement('div');
            songCard.classList.add('songCard');

            const audioPath = `/${folder}/${encodeURIComponent(filename)}`;

            songCard.innerHTML = `
                <img src="${imagePath}" alt="${title}" class="song-card">
                <h3>${title}</h3>
                <p>${artist}</p>
            `;

            songCard.dataset.audio = audioPath;
            cardContainer.appendChild(songCard);
        }
    }
}

const playIcon = 'images/play.svg';
const pauseIcon = 'images/pause.svg';

let currentSong = new Audio();
let currentSongElement = null;
let currentSongIndex = -1; // Tracks currently playing song index

function playSong(audioUrl, title, artist, songElement = null) {
    // Pause if something is already playing
    if (!currentSong.paused && currentSong.src) {
        currentSong.pause();
    }

    // Find the index of the song being played
    currentSongIndex = allSongsData.findIndex(song => song.audioUrl === audioUrl);
    
    // Update current song
    currentSong.src = audioUrl;
    currentSongElement = songElement;

    // Play the song
    currentSong.play()
        .then(() => {
            console.log(`Now Playing: ${title} by ${artist}`);
            updatePlayPause(true);
            updateSongInfo(title, artist);
        })
        .catch(error => {
            console.error("Error playing song:", error);
        });
}

function updatePlayPause(isPlaying){
    const playPauseBtn= document.querySelector('.songbuttons img[src$="play.svg"], .songbuttons img[src$="pause.svg"]');
    
    if(isPlaying===true){
        playPauseBtn.src=pauseIcon;
        playPauseBtn.alt="pause";
    }
    else{
        playPauseBtn.src=playIcon;
        playPauseBtn.alt="play";
    }
}

function updateSongInfo(sTitle, sArtist ){
    const songInfoDiv = document.querySelector('.songinfo');
        if(sTitle && sArtist){
            songInfoDiv.innerHTML = `<div><strong>${sTitle}</strong></div><div>${sArtist}</div>`;
        }
        else {
            songInfoDiv.innerHTML= `<div><strong>No Song Selected </strong></div>`;
        }
    }


function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00"; // Return default if input is invalid
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    // Pad with leading zero if minutes or seconds are less than 10
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


function updateSongTime(currentTime, duration){
    const songTimeDiv = document.querySelector('.songtime');
    songTimeDiv.innerHTML = `${secondsToMinutesSeconds(currentTime)} / ${secondsToMinutesSeconds(duration)}`;
}


const nextIcon = '/images/next.svg';
const prevIcon = '/images/prev.svg';


let allSongsData = [];
let songIndex=-1;


async function fetchSongsData(folder){
    const songs = [];
    let response = await fetch(`/${folder}/`);

    let responseText = await response.text();
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = responseText;
    let links = tempDiv.getElementsByTagName("a");

    for(let i=0;i<links.length;i++){
        const linkElement = links[i];
        const href = linkElement.getAttribute('href'); 

         if (href && href.toLowerCase().endsWith(".mp3") && href !== "../") {
            const filename = decodeURIComponent(href.split('/').pop());
            const { title, artist } = parseSongFilename(filename);
            const audioUrl = `/${folder}/${encodeURIComponent(filename)}`;
            songs.push({ audioUrl, title, artist, filename }); // Store all necessary info
        }

    }
    return songs;
}

function playNext() {
    if (allSongsData.length === 0) return;
    
    // Calculate next index (wraps around to 0 if at end)
    const nextIndex = (currentSongIndex + 1) % allSongsData.length;
    const nextSong = allSongsData[nextIndex];
    
    // Play the next song
    playSong(nextSong.audioUrl, nextSong.title, nextSong.artist);
}

function playPrev() {
    if (allSongsData.length === 0) return;
    
    // Calculate previous index (wraps to end if at 0)
    const prevIndex = (currentSongIndex - 1 + allSongsData.length) % allSongsData.length;
    const prevSong = allSongsData[prevIndex];
    
    // Play the previous song
    playSong(prevSong.audioUrl, prevSong.title, prevSong.artist);
}


function attachPlayBack(){
    const libraryUl = document.querySelector('.songList ul');
    libraryUl.addEventListener('click', (event) =>{
        const clickedItem = event.target.closest('.library-list-item');

        const audioUrl = clickedItem.dataset.audio;
        const Title = clickedItem.querySelector('h3').innerText;
        const Artist = clickedItem.querySelector('p').innerText;

        playSong(audioUrl, Title, Artist, clickedItem);
    })

    const playPause = document.querySelector('.songbuttons img[src$="play.svg"], .songbuttons img[src$="pause.svg"]');

        playPause.addEventListener('click', ()=>{
            if(currentSong.paused){
                if(currentSong.src){
                    currentSong.play();
                }
            }
            else{
                currentSong.pause();    
            }
        });

    currentSong.addEventListener('ended',()=>{
        console.log("song ended");

        updatePlayPause(false);
        updateSongInfo("No Song Playing", "");
        updateSongTimeDisplay(0, 0);
        currentSongElement=null;
    });

    currentSong.addEventListener('playing', ()=>{
        updatePlayPause(true);
    })

    currentSong.addEventListener('pause', ()=>{
        updatePlayPause(false);
    })


    ///for card container on the right side songs

    const cardContainer = document.querySelector('.cardContainer');
    cardContainer.addEventListener('click', (event) => {

        const clickedCard = event.target.closest('.songCard');
        const audioURL = clickedCard.dataset.audio;
        const Title = clickedCard.querySelector('h3').innerText;
        const Artist = clickedCard.querySelector('p').innerText;

        playSong(audioURL, Title, Artist, clickedCard)
    });


    currentSong.addEventListener('loadedmetadata', ()=>{
        updateSongTime(currentSong.currentTime, currentSong.duration);
    });

    currentSong.addEventListener('timeupdate',()=>{
        updateSongTime(currentSong.currentTime, currentSong.duration);
        moveCircle(currentSong.currentTime, currentSong.duration);
    });


    //play next prev songs

    const nextButton = document.querySelector('.songbuttons img[src$="next.svg"]');

    const PrevButton = document.querySelector('.songbuttons img[src$="prev.svg"]');

    nextButton.addEventListener('click', playNext);
    PrevButton.addEventListener('click', playPrev);

}

function moveCircle(currentTime, duration){
    const circle = document.querySelector('.circle');
    circle.style.left = ((currentTime/duration)*100) + '%';
}

async function main() {

    console.log("Starting main function...");
    // Call getSongs with the folder name.
    // This will now try to fetch the directory listing from your simple local web server.
    
    await getSongs('songs');
    await songsCards('songs');
    
    
    updateSongInfo("No Song Selected", "");
    updatePlayPause(false);
    updateSongTime(0, 0);
    
    allSongsData = await fetchSongsData('songs');
    
    attachPlayBack();
}


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close');
    const leftSection = document.querySelector('.left');

    hamburger.addEventListener('click', function() {
        leftSection.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        leftSection.classList.remove('active');
    });
});
