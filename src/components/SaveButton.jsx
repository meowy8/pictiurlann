import { useSavedArticles } from "./SavedArticlesContext"

const SaveButton = () => {
  const { saveArticle } = useSavedArticles()

  const handleClick = () => {
    saveArticle({test: 'test'})
  }

  return (
    <button onClick={handleClick}>Save</button>
  )
}

export default SaveButton