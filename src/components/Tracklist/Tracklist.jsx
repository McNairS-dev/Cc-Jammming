// src/components/Tracklist/Tracklist.jsx

import Track from '../Track/Track'

function Tracklist( props ) {
  
const trackList = props.tracks?.map((track) => (
  <Track
    id      = { track.id }
    key     = { track.id }
    song    = { track.song }
    artist  = { track.artist }
    album   = { track.album }
    buttonType = {props.buttonType}
    addRemoveTrack={ props.addRemoveTrack }
    />
));
  return (
    <>
      <ul>
        {trackList}
      </ul>
    </>
  )}

export default Tracklist
