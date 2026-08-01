function PlaylistForm() {
  return (
  <>
    <form>
      <label htmlFor="playlist-name">Playlist Name... (required):</label>
      <input type="text" name="playlist-name" id="playlist-name" required />
      <label htmlFor="playlist-descritption">Playlist Description... (optional):</label>
      <textarea name="playlist-description" id="playlist-description"></textarea>
      <button type="submit">Save to Spotify</button>            
    </form>
  </>
  )
}

export default PlaylistForm
