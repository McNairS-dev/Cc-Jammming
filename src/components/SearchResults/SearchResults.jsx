// src/components/SearchResults/SearchResults.jsx

import Tracklist from '../Tracklist/Tracklist'

function SearchResults( props ) {

  return (
  <>
    <div id={ props.id }>
      <h3>Search Results</h3>
      <Tracklist
        buttonType = "+"
        tracks = { props.SEARCH_DATA }
        addRemoveTrack = { props.addRemoveTrack }
      />
    </div>
  </>
  )
}

export default SearchResults
