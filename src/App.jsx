import Hero from './components/Hero/Hero' 
import SearchBar from './components/SearchBar/SearchBar'
import PlaylistForm from './components/PlaylistForm/PlaylistForm'
import SearchResults from './components/SearchResults/SearchResults'
import Playlist from './components/Playlist/Playlist'

import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>
      <main>
        <Hero id="hero" />
        <SearchBar id="search-bar" />
        <SearchResults id="search-result-tracks" />
        <PlaylistForm id="playlist-form" />
        <Playlist id="playlist-tracks" />
      </main>
      <footer></footer>
    </>
  )
}

export default App
