import { useSavedArticles } from "./SavedArticlesContext"
import PropTypes from 'prop-types'

const SaveButton = ({ id, src, title, published, preface, mainText, author }) => {
  const { saveArticle } = useSavedArticles()


  const handleClick = () => {
    saveArticle({ title, src, id, published, preface, mainText, author })
  }

  return (
    <button onClick={handleClick} className="hover:text-[#A1EEBD]">Save</button>
  )
}

export default SaveButton

SaveButton.propTypes = {
  id: PropTypes.number,
  src: PropTypes.string,
  title: PropTypes.string,
  published: PropTypes.string,
  author: PropTypes.string,
  preface: PropTypes.string,
  mainText: PropTypes.string
}