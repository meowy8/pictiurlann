const ArticleFooter = ({ published }) => {
  return (
    <div id="article-footer">
      <span className="text-xs opacity-80">{published}</span>
    </div>
  )
}

export default ArticleFooter