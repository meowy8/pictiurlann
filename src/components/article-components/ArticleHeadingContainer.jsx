import GoBackButton from '../GoBackButton'
import SaveButton from '../SaveButton'

const ArticleHeadingContainer = ({ id, src, title, published, preface, mainText, author }) => {
  console.log('id in heading container: ' + id)

  return (
    <div id="article-header">
      <div className='flex justify-between'>
        <GoBackButton />
        <SaveButton 
          id={id}
          src={src}
          published={published}
          title={title}
        />
      </div>
      <h1 className=" text-4xl">{title}</h1>
      <span className="text-md">{author}</span>
    </div>
  )
}

export default ArticleHeadingContainer