import { useSavedArticles } from "./SavedArticlesContext"
import PropTypes from 'prop-types'

const UnsaveButton = ({ id }) => {
  const { unsaveArticle } = useSavedArticles()

  const handleClick = () => {
    unsaveArticle(id)
  }

  return (
    <button onClick={handleClick} className="rounded-lg hover:text-red-600">Unsave</button>
  )
}

export default UnsaveButton

UnsaveButton.propTypes = {
  id: PropTypes.number
}