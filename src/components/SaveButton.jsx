import { useSavedArticles } from "./SavedArticlesContext"

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