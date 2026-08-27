// src/components/Track/Track.jsx

function Track( props ) {

function handleClick (e) {
  e.preventDefault();
  // alert('You clicked me here!');
  //console.log(typeof props.addRemoveTrack);
  //console.log( props.addRemoveTrack);
  //props.addRemoveTrack('You clicked me down there!');
  const track = {
    id: props.id,
    buttonType: props.buttonType
  }
  props.addRemoveTrack(track);
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
