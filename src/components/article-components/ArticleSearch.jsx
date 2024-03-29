import PropTypes from 'prop-types'

const ArticleSearch = ({ search, setSearch, handleSearch, handleSortAsc }) => {
  const handleInputChange = (e) => {
    const value = e.target.value
    setSearch(value)
    handleSearch(search)
  }

  return (
    <div className="flex justify-center items-center">
      <input type="text" id="search" placeholder="Search for article" value={search} onChange={handleInputChange} className="w-full m-4 text-black rounded-md md:w-96"/>
      <select onChange={(e) => handleSortAsc(e.target.value)} name="Sort" id="sort-list" className="text-slate-500 h-full w-24 rounded-md">
        <option value="default">Sort by</option>
        <option value="asc">Publish Date (Asc)</option>
        <option value="desc">Publish Date (Desc)</option>
      </select>
    </div>
  )
}

export default ArticleSearch

ArticleSearch.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  handleSearch: PropTypes.func,
  handleSortAsc: PropTypes.func
}