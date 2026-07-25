import './App.css'
import Hero from './components/Hero/Hero'

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
