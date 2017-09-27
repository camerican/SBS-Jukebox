
function Jukebox(element){
  this.songs = [
    { name: "Corruption", file: "corruption.mp3"},
    { name: "Hitman", file: "hitman.mp3"},
    { name: "Killers", file: "killers.mp3"}
  ];
  this.currentSong = 0;
  this.htmlElements = {
    container: element,
    audio: element.querySelector("audio"),
    controls: element.querySelector(".controls"),
    info: element.querySelector(".info")
  };

  this.htmlElements.controls.addEventListener("click",function(event){
    if( event.target.classList.contains("play") ){
      this.play();
    } else if( event.target.classList.contains("pause")) {
      this.pause();
    } else if( event.target.classList.contains("back")) {
      this.back();
    } else if( event.target.classList.contains("next")) {
      this.next();
    }
  });
}
Jukebox.prototype = {
  play: function(){
    this.updateUI();
    this.htmlElements.audio.play();
  },
  pause: function(){
    this.htmlElements.audio.pause();
  },
  back: function(){
    this.currentSong = (this.currentSong + this.songs.length - 1) % this.songs.length;
    this.play();
  },
  next: function(){
    this.currentSong = (this.currentSong + 1) % this.songs.length;
    this.play();
  },
  updateUI: function(){
    this.htmlElements.info.innerText = this.songs[this.currentSong].name;
    this.htmlElements.audio.src = `media/${this.songs[this.currentSong].file}`;
  }
};


let myJukebox;
document.addEventListener("DOMContentLoaded",function(){
  myJukebox = new Jukebox(document.getElementById("jukebox"));
});
