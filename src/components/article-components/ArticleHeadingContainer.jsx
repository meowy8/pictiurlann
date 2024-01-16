import GoBackButton from '../GoBackButton'
import SaveButton from '../SaveButton'
import { useSavedArticles } from '../SavedArticlesContext'
import UnsaveButton from '../UnsaveButton'

const ArticleHeadingContainer = ({ id, src, title, published, preface, mainText, author }) => {
  console.log('id in heading container: ' + id)
  const { savedArticles } = useSavedArticles()

  return (
    <div id="article-header">
      <div className='flex justify-between'>
        <GoBackButton />
        {savedArticles.some(data => data.id === id) ?
          <UnsaveButton 
          id={id}
          /> 
          :
          <SaveButton 
          id={id}
          src={src}
          published={published}
          title={title}
        />}
      </div>
      <h1 className=" text-4xl">{title}</h1>
      <span className="text-md">{author}</span>
    </div>
  )
}

export default ArticleHeadingContainer