//Music Details
const background_cover = document.querySelector(".background_cover");
const music_cover = document.querySelector(".music_cover");
const music_title = document.querySelector(".music_title");
const music = document.querySelector(".music");


//Buttons
const previous_btn = document.querySelector(".previous");
const play_btn = document.querySelector(".play");
const next_btn = document.querySelector(".next");


//Track Control
const progress_bar = document.querySelector(".music_progess");
const vol_bar = document.querySelector(".vol_range");




function playbtn_pressed(){
    let check = music.classList.contains("playing");
    
    if(check){
        music.classList.remove("playing");
        play_btn.innerHTML = `<i class="fas fa-pause"></i>`;
        music.play();
    }
    else{
        music.classList.add("playing");
        play_btn.innerHTML = `<i class="fas fa-play"></i>`;
        music.pause();
    }
    
};






// PREVIOUS AND NEXT BUTTON ACTIONS
const musics_array = ["culturecode", "elysium", "fearless", "heart", "station2"];
let music_index = 0;


function loadmusic(index){
    music.src = "music/" + musics_array[index] + ".mp3";
    background_cover.src = "img/" + musics_array[index] + ".jpg";
    music_cover.src = "img/" + musics_array[index] + ".jpg";
    music_title.textContent = musics_array[index] + " - " + "NCS";
    playbtn_pressed();    
};

function prebtn_pressed(){
    music_index--;

    if(music_index < 0){
        music_index = musics_array.length - 1;
    }

    loadmusic(music_index);
};


function nextbtn_pressed(){
    music_index++;

    if(music_index >= musics_array.length){
        music_index = 0;
    }
    loadmusic(music_index);
};





//Change Volume
function vol_change(){
    let vol_track = document.querySelector(".vol_range");
    music.volume = vol_track.value / 100;
};




//Change Duration
function updatetime(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    document.querySelector(".music_progress").value = progressPercent;
}

music.addEventListener("timeupdate", updatetime);

function music_progress(){
    let bar_val = document.querySelector(".music_progress").value;
    music.currentTime = bar_val;
};