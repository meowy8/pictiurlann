import { useSavedArticles } from "./SavedArticlesContext"

const UnsaveButton = ({ id }) => {
  const { unsaveArticle } = useSavedArticles()

  const handleClick = () => {
    unsaveArticle(id)
  }

  return (
    <button onClick={handleClick}>Unsave</button>
  )
}

export default UnsaveButton