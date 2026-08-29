import Hero from './components/Hero/Hero' 
import SearchBar from './components/SearchBar/SearchBar'
import PlaylistForm from './components/PlaylistForm/PlaylistForm'
import SearchResults from './components/SearchResults/SearchResults'
import Playlist from './components/Playlist/Playlist'

import './App.css'

import { useState } from 'react'

function App() {
  const PLAYLIST_DATA = {
  playlistName: 'Playlist',
  playlistDescription: 'Oh, what a lovely Playlist!',
  
  trackData: [ 
  
  {
    id:     "d003",
    song:   'Half Life',
    artist: 'Sneaker Pimps',
    album:  'Splinter'
    },
    {
      id:     "e004",
      song:   "It Could Be Sweet",
      artist: "Portishead",
      album:  "Dummy"
    },
    {
      id:     "f005",
      song:   'Underwater',
      artist: 'Elizabeth Frazer',
      album:  "Sun's Signature" 
    }
  ]
}
const SEARCH_DATA = 
[  
  {
    id:     "a000",
    song:   'Teardrop',
    artist: 'Massive Attack',
    album:  'Mezzanine'
  },
  {
    id:     "b001",
    song:   "Girlfriend Is Better",
    artist: "Talking Heads",
    album:  "Speaking in Tongues"
  },
  {
    id:     "c002",
    song:   "Feet Don't Fail Me Now",
    artist: "Joy Crookes",
    album:  "Skin" 
  }
]

const [playlistName, setPlaylistName] = useState(PLAYLIST_DATA.playlistName);
const [playlistDescription, setPlaylistDescription] = useState(PLAYLIST_DATA.playlistDescription);
//const [playlistTracks, setPlaylistTracks] = useState();
const [playlistTracks, setPlaylistTracks] = useState(PLAYLIST_DATA.trackData);
const [searchResultsTracks, setSearchResultsTracks] = useState(SEARCH_DATA);
//console.log(searchResultsTracks);

function updatePlaylist(playlistName, playlistDescription) {
  PLAYLIST_DATA.playlistName = playlistName;
  PLAYLIST_DATA.playlistDescription = playlistDescription;
}
//function addRemoveTrack (track) {
function addRemoveTrack (id, buttonType) {
  //console.log(track.id);
  //console.log(track.song);
  //console.log(track.buttonType);
  //console.log(id);
  //console.log(buttonType);
      //const trackToAdd = searchResultsTracks.find(track =>{
      console.log(id);
      
      const trackToAdd = searchResultsTracks.find((track) => track.id === id);
      console.log(trackToAdd);
      console.log(playlistTracks);
      setPlaylistTracks([...playlistTracks, trackToAdd]);
      console.log(playlistTracks);
      //console.log(track.id);
      //console.log(track);
      //track.id
    const remainingTracks = searchResultsTracks.filter((trackToRemove) => id !== trackToRemove.id);
    
    console.log(remainingTracks);
    setSearchResultsTracks(remainingTracks);
}

  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>
      <main>
        <Hero id="hero" />
        <SearchBar id="search-bar" />
        <SearchResults
          id="search-result-tracks"
          SEARCH_DATA = { searchResultsTracks }
          addRemoveTrack = { addRemoveTrack }
        />
        <PlaylistForm 
          updatePlaylist={ updatePlaylist } 
          id={"playlist-form"}
          playlistName={ playlistName }
          playlistDescription={ playlistDescription }
           />
        <Playlist
          id="playlist-tracks"
          PLAYLIST_DATA={ playlistTracks }
          addRemoveTrack={ addRemoveTrack }
        />
      </main>
      <footer></footer>
    </>
  )
}

export default App
