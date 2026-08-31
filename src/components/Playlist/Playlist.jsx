// src/components/Playlist/Playlist.jsx

import Tracklist from '../Tracklist/Tracklist'

function Playlist( props ) {  

  return (
  <>
    <div id={props.id}>
      <h3>Playlist</h3>
      <Tracklist
        buttonType = "-"
        tracks = { props.PLAYLIST_DATA }
        addRemoveTrack = { props.addRemoveTrack }
      />
    </div>
  </>
  )
}

export default Playlist
