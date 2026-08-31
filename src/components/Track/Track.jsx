// src/components/Track/Track.jsx

function Track( props ) {

function handleClick (e) {
  e.preventDefault();
  props.addRemoveTrack(props.id, props.buttonType);
}

  return (
    <li>
      <p> Song: {props.song}
          &nbsp;
          |
          &nbsp;
          Artist: {props.artist}
      <button
        type='button'
        onClick={ handleClick }
      >
        { props.buttonType }
      </button>
     </p>
       <p> Album: {props.album}</p>
    </li>
    )}

export default Track
