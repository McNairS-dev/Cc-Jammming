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
          <h3>Hero Section</h3>
          <Hero />
        </section>
        <section id="search">
          <h3>Search Section</h3>
          <section id="search-form">
            <h4>SearchForm Component</h4>
            <SearchForm />
          </section>
          <section id="search-results">
            <h4>SearchResults Component</h4>
            <SearchResults />
          </section>
        </section>
        <section id="playlist">
          <h3>Playlist Section</h3>
          <section id="playlist-form">
            <h4>PlaylistForm Component</h4>
            <PlaylistForm />
          </section>
          <section id="playlist-tracks">
            <h4>Playlist Component</h4>
            <Playlist />
          </section>
        </section>
    </>
  )
}

export default App
