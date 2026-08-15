// src/components/Playlist/Playlist.jsx

import Tracklist from '../Tracklist/Tracklist'

function Playlist( props) {
  
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
    <div id={props.id}>
      <h3>Playlist</h3>
      <Tracklist  buttonType = "-" tracks = { DATA } />
    </div>
  </>
  )
}

export default Playlist
