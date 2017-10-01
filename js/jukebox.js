SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

function Jukebox(element){
  this.songs = [];
  this.currentSong = 0;
  // populate list of songs
  SC.get("/tracks",{q: "Dogs"}).then((response) => {
    console.log("this", this)
    this.songs.push( ...response );
    this.play();
  });
  this.htmlElements = {
    container: element,
    controls: element.querySelector(".controls"),
    info: element.querySelector(".info")
  };

  this.htmlElements.controls.addEventListener("click", (event) => {
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
    const song = this.songs[this.currentSong];
    if( song.player ) {
      song.player.play();
    } else {
      SC.stream(`/tracks/${song.id}`).then(function(player){
        song.player = player;
        player.play();
      });
    }
    this.updateUI();
  },
  pause: function(){
    if( this.songs[this.currentSong].player ) {
      this.songs[this.currentSong].player.pause();
      return true;
    }
    return false;
  },
  stop: function(){
    if( this.pause() ) {
      this.songs[this.currentSong].player.seek(0);
    }
  },
  back: function(){
    this.stop();
    this.currentSong = (this.currentSong + this.songs.length - 1) % this.songs.length;
    this.play();
  },
  next: function(){
    this.stop();
    this.currentSong = (this.currentSong + 1) % this.songs.length;
    this.play();
  },
  updateUI: function(){
    this.htmlElements.info.innerText = this.songs[this.currentSong].title;
  }
};


let myJukebox;
document.addEventListener("DOMContentLoaded",function(){
  myJukebox = new Jukebox(document.getElementById("jukebox"));
});
