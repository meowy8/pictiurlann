import { createContext, useContext, useState } from "react"

const SavedArticlesContext = createContext()

export const SavedArticlesProvider = ({ children }) => {
  const [ savedArticles, setSavedArticles ] = useState([])

  const saveArticle = (article) => {
    if (!savedArticles.some(data => data.id === article.id)) {
      setSavedArticles([...savedArticles, article])
    }
    console.log(savedArticles)
}

  return (
    <SavedArticlesContext.Provider value={{ savedArticles, saveArticle }}>
      {children}
    </SavedArticlesContext.Provider>
  )
}

export const useSavedArticles = () => {
  return useContext(SavedArticlesContext)
}