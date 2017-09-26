
function Jukebox(){
  this.songs = [
    "corruption.mp3",
    "hitman.mp3",
    "killers.mp3"
  ];
  this.currentSong = 0;
}


const myJukebox = new Jukebox();

document.addEventListener("DOMContentLoaded",function(){
  elAudio = document.querySelector("audio");
  elAudio.play();

  document.querySelector("#jukebox .controls").addEventListener("click",function(event){
    if( event.target.classList.contains("play") ){
      elAudio.play();
    } else if( event.target.classList.contains("pause")) {
      elAudio.pause();
    } else if( event.target.classList.contains("back")) {
      currentSong -= 1;
      if( currentSong < 0) {
        currentSong = songs.length - 1;
      }
      elAudio.src = `media/${songs[currentSong]}`;
      elAudio.play();
    } else if( event.target.classList.contains("next")) {
      currentSong = (currentSong + 1) % songs.length;
      elAudio.src = `media/${songs[currentSong]}`;
      elAudio.play();
    }
  });
});