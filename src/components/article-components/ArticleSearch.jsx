const ArticleSearch = ({ handleSortAsc }) => {
  return (
    <div className="flex justify-center items-center">
      <input type="text" placeholder="Search for article" className="w-full m-4"/>
      <select onChange={(e) => handleSortAsc(e.target.value)} name="Sort" id="sort-list" className="text-slate-500 h-full w-24">
        <option value="default">Sort by</option>
        <option value="asc">Publish Date (Asc)</option>
        <option value="desc">Publish Date (Desc)</option>
      </select>
    </div>
  )
}

export default ArticleSearch