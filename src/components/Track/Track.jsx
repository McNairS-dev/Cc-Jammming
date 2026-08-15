// src/components/Track/Track.jsx

function Track( props ) {
  return (
    <li>
      <p> Song: {props.song}
          &nbsp;
          |
          &nbsp;
          Artist: {props.artist}
       <button>{ props.buttonType }</button>
     </p>
       <p> Album: {props.album}</p>
    </li>
    )}

export default Track
