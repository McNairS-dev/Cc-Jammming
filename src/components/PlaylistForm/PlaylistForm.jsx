function PlaylistForm({id}) {
  return (
  <>
    <h3>Playlist Details</h3>
    <form id={id}>
      <label htmlFor="playlist-name">Playlist Name... (required):</label>
      <input type="text" name="playlist-name" id="playlist-name" required />
      <label htmlFor="playlist-description">Playlist Description... (optional):</label>
      <textarea name="playlist-description" id="playlist-description"></textarea>
      <button type="submit">Save to Spotify</button>            
    </form>
  </>
  )
}

export default PlaylistForm
