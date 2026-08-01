function SearchBar() {
  return(
  <>
    <section id="search-bar">
      <h3>Search Form </h3>
        <form>
          <label htmlFor="search-name">Search for... (required):</label>
          <input type="text" name="search-name" id="search-name" required />
          <button type="submit">Search</button>
        </form>
      </section>
  </>
  )
}
export default SearchBar
