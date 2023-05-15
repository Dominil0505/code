myVideo = document.getElementById("video_module_tag");
var play_pause = document.getElementById("video_modul_play_pause");
play_pause.addEventListener("click", playPause);


function playPause(){
    if(myVideo.paused){
        myVideo.play();
        play_pause.innerHTML = "Pause";
    }
    else {
        myVideo.pause();
        play_pause.innerHTML = "Play";
    }
}

var mute_unmute = document.getElementById("video_modul_mute_unmute");
mute_unmute.addEventListener("click", muteUnmute);

function muteUnmute(){
    if(myVideo.muted == false){
        myVideo.muted = true;
        mute_unmute.innerHTML = "Unmute";
    }
    else {
        myVideo.muted = false;
        mute_unmute.innerHTML = "Mute";
    }
}
