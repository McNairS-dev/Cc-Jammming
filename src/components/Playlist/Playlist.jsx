// src/components/Playlist/Playlist.jsx

import Tracklist from '../Tracklist/Tracklist'

function Playlist() {

const DATA = 
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

  return (
  <>
    <h3>Playlist</h3>
    <Tracklist tracks = { DATA } />
  </>
  )
}

export default Playlist
