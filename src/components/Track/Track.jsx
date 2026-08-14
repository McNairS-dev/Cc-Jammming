// src/components/Track/Track.jsx

function Track( props ) {
  return (
    <li>
      <p>Song: {props.song}</p>
      <p>Artist: {props.artist}</p>
      <p>Album: {props.album}</p>
    </li>
    )}

export default Track
