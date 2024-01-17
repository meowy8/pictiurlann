import GoBackButton from '../GoBackButton'
import SaveButton from '../SaveButton'
import { useSavedArticles } from '../SavedArticlesContext'
import UnsaveButton from '../UnsaveButton'
import PropTypes from 'prop-types'

const ArticleHeadingContainer = ({ id, src, title, published, author }) => {
  console.log('id in heading container: ' + id)
  const { savedArticles } = useSavedArticles()

  return (
    <div id="article-header">
      <div className='flex justify-between pb-4'>
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

ArticleHeadingContainer.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string,
  published: PropTypes.string,
  author: PropTypes.string
}