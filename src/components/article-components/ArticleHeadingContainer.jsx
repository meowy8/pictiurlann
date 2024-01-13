import GoBackButton from '../GoBackButton'

const ArticleHeadingContainer = ({ title, author }) => {
  return (
    <div id="article-header">
      <GoBackButton />
      <h1 className=" text-4xl">{title}</h1>
      <span className="text-md">{author}</span>
    </div>
  )
}

export default ArticleHeadingContainer