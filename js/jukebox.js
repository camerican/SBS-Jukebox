
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
  let that = this;
  this.htmlElements.controls.addEventListener("click",function(event){
    if( event.target.classList.contains("play") ){
      console.log("This", this)
      that.play();
    } else if( event.target.classList.contains("pause")) {
      that.pause();
    } else if( event.target.classList.contains("back")) {
      that.back();
    } else if( event.target.classList.contains("next")) {
      that.next();
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
}


let myJukebox;
document.addEventListener("DOMContentLoaded",function(){
  myJukebox = new Jukebox(document.getElementById("jukebox"));
});

// document.addEventListener("DOMContentLoaded",function(){
//   elAudio = document.querySelector("audio");
//   elAudio.play();

//   document.querySelector("#jukebox .controls").addEventListener("click",function(event){
//     if( event.target.classList.contains("play") ){
//       elAudio.play();
//     } else if( event.target.classList.contains("pause")) {
//       elAudio.pause();
//     } else if( event.target.classList.contains("back")) {
//       currentSong -= 1;
//       if( currentSong < 0) {
//         currentSong = songs.length - 1;
//       }
//       elAudio.src = `media/${songs[currentSong]}`;
//       elAudio.play();
//     } else if( event.target.classList.contains("next")) {
//       currentSong = (currentSong + 1) % songs.length;
//       elAudio.src = `media/${songs[currentSong]}`;
//       elAudio.play();
//     }
//   });
// });