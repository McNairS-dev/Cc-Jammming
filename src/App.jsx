import Hero from './components/Hero/Hero' 
import SearchBar from './components/SearchBar/SearchBar'
import PlaylistForm from './components/PlaylistForm/PlaylistForm'
import SearchResults from './components/SearchResults/SearchResults'
import Playlist from './components/Playlist/Playlist'

import './App.css'

import { useState } from 'react'

function App() {
  const PLAYLIST_DATA = 
[

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

const [playlistName, setPlaylistName] = useState('Playlist');

function updatePlaylist(playlistName) {
  alert(playlistName);
}

  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>
      <main>
        <Hero id="hero" />
        <SearchBar id="search-bar" />
        <SearchResults id="search-result-tracks" SEARCH_DATA = { SEARCH_DATA } />
        <PlaylistForm 
          updatePlaylist={ updatePlaylist } 
          id={"playlist-form"}
          playlistName={ playlistName } />
        <Playlist id="playlist-tracks" PLAYLIST_DATA =  { PLAYLIST_DATA } />
      </main>
      <footer></footer>
    </>
  )
}

export default App
