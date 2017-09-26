const songs = [
  "corruption.mp3",
  "hitman.mp3",
  "killers.mp3"
];
let currentSong = 0
  , elAudio;

document.addEventListener("DOMContentLoaded",function(){
  elAudio = document.querySelector("audio");
  elAudio.play();

  document.querySelector("#jukebox .controls .play").addEventListener("click",function(){
    elAudio.play();
  });
  document.querySelector("#jukebox .controls .pause").addEventListener("click",function(){
    elAudio.pause();
  });
  document.querySelector("#jukebox .controls .back").addEventListener("click",function(){
    currentSong -= 1;
    if( currentSong < 0) {
      currentSong = songs.length - 1;
    }
    elAudio.src = `media/${songs[currentSong]}`;
    elAudio.play();
  });
});