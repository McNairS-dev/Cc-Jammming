import { useState } from 'react'

 
function PlaylistForm(props) {

  const [playlistName, setPlaylistName] = useState(props.playlistName);
  const [playlistDescription, setPlaylistDescription] = useState(props.playlistDescription);
  
  function handleSubmit(e) {
    e.preventDefault();
    props.updatePlaylist(playlistName, playlistDescription);
  }

  function handleRenamePlaylist(e) {
    e.preventDefault();
    setPlaylistName(e.target.value);
  }
  
function handleChangePlaylistDescription(e) {
    e.preventDefault();
    console.log(e.target.value);
    setPlaylistDescription(e.target.value);
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
        onChange={ handleRenamePlaylist }
        required />
      <label htmlFor="playlist-description">Playlist Description... (optional):</label>
      <textarea 
        name="playlist-description" 
        id="playlist-description"
        value={ playlistDescription }
        onChange={ handleChangePlaylistDescription }
        >
      </textarea>
      <button type="submit">Save to Spotify</button>            
    </form>
  </>
  )
}

export default PlaylistForm
