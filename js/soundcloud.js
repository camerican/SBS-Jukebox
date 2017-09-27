// SoundCloud Experiments

SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

const playlist = [];

SC.get("/tracks",{q: "Dogs"}).then(function(response){
  playlist.push( ...response );
  console.log(response);
});