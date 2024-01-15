import GoBackButton from '../GoBackButton'
import SaveButton from '../SaveButton'

const ArticleHeadingContainer = ({ title, author }) => {
  return (
    <div id="article-header">
      <div className='flex justify-between'>
        <GoBackButton />
        <SaveButton />
      </div>
      <h1 className=" text-4xl">{title}</h1>
      <span className="text-md">{author}</span>
    </div>
  )
}

export default ArticleHeadingContainer