import { useState } from 'react'

 
function PlaylistForm(props) {

  const [playlistName, setPlaylistName] = useState(props.playlistName);
  
  function handleSubmit(e) {
    e.preventDefault();
    props.updatePlaylist(playlistName);
    setPlaylistName('');
  }

  function handleChange(e) {
    e.preventDefault();
    setPlaylistName(e.target.value);
  }

  return (
  <>
    <h3>Playlist Details</h3>
    <form
      id={ props.id }
      onSubmit={ handleSubmit } >
      <label htmlFor="playlist-name">Playlist Name... (required):</label>
      <input 
        type="text" 
        name="playlist-name" 
        id="playlist-name" 
        value={ playlistName }
        onChange={ handleChange }
        required />
      <label htmlFor="playlist-description">Playlist Description... (optional):</label>
      <textarea name="playlist-description" id="playlist-description"></textarea>
      <button type="submit">Save to Spotify</button>            
    </form>
  </>
  )
}

export default PlaylistForm
