import './App.css'
import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import SearchResults from './components/SearchResults/SearchResults'
import PlaylistForm from './components/PlaylistForm/PlaylistForm'
import Playlist from './components/Playlist/Playlist'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Jammming</h1>
        <section id="hero">
          <Hero />
          <p>Hero Component</p>
        </section>
        <section id="search-header">
          <SearchForm />
          <p>SearchForm Component</p>
        </section>
        <section id="search-results">
          <SearchResults />
          <p>SearchResults Component</p>
        </section>
        <section id="playlist-header">
          <PlaylistForm />
          <p>PlaylistForm Component</p>
        </section>
        <section id="playlist-tracks">
          <Playlist />
          <p>Playlist Component</p>
        </section>
    </>
  )
}

export default App
