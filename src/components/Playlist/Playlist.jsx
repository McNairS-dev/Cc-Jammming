// src/components/Playlist/Playlist.jsx


const trackData = 
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

function Playlist( {trackData} ) {
  return (
  <>
    <Tracklist { trackData = { trackData } } /}
  </>
  )
}

export default Playlist
