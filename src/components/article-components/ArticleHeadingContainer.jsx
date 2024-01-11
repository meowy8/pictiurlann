import GoBackButton from '../GoBackButton'

const ArticleHeadingContainer = () => {
  return (
    <div id="article-header">
      <GoBackButton />
      <h1 className=" text-4xl">Article Title</h1>
      <span className="text-md">author</span>
    </div>
  )
}

export default ArticleHeadingContainer