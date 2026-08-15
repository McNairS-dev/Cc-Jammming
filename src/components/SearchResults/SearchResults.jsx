// src/components/SearchResults/SearchResults.jsx

import Tracklist from '../Tracklist/Tracklist'

function SearchResults( props ) {

const DATA = 
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

  return (
  <>
    <div id={props.id}>
      <h3>Search Results</h3>
      <Tracklist buttonType = "+" tracks = { DATA } />
    </div>
  </>
  )
}

export default SearchResults
