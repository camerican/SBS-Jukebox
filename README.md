# Jukebox Step-By-Step

This is a step-by-step guide intended for New York Code + Design Academy students building a JavaScript Jukebox as part of the 2016-2017 curriculum.  We will first use an HTML5 audio tag before switching over to the SoundCloud streaming API.

## Part A) Basic Interface Design

1. Scaffold project
1. Add HTML Elements w/ labels
1. Controls w/ FontAwesome Icons
1. CSS Styling

## Part B) Wired for Sound w/ HTML5 Audio Tag

1. Prepare songs in subdirectory
1. Add initial src for audio
1. Load array of songs and track current song we're playing
1. Play initial song using JavaScript
1. Add pause button functionality
1. Add back button functionality
1. Add next button functionality

## Part C) Object-Oriented Jukebox Refactoring

1. Create our Jukebox constructor
1. Add play method to Jukebox prototype
1. Add pause method to Jukebox prototype
1. Add back method to Jukebox prototype
1. Add next method to Jukebox prototype
1. Add method to update the UI
1. Track Jukebox element via constructor
1. Rewire listeners to be applied within constructor

## Part D) Exploring the SoundCloud API

1. Set up with SC.initialize
1. Get track info with SC.get
1. Build a playlist of songs
1. Play a song using SC.stream
1. Rescue our player from the callback's scope
1. Test the play and pause functionality

## Part E) Object-Oriented Jukebox w/ SoundCloud API

1. Use the SoundCloud playlist
1. Have play functionality conditionally retrieve SC stream
1. Refactor play, pause, back, next methods
1. Refector with getter/setter helpers
1. Add seek slider