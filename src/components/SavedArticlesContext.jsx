import { createContext, useContext, useState } from "react"

const SavedArticlesContext = createContext()

export const SavedArticlesProvider = ({ children }) => {
  const [ savedArticles, setSavedArticles ] = useState([])

  const saveArticle = (article) => [
    setSavedArticles([...savedArticles, article])
  ]

  return (
    <SavedArticlesContext.Provider value={{ savedArticles, saveArticle}}>
      {children}
    </SavedArticlesContext.Provider>
  )
}

export const useSavedArticles = () => {
  return useContext(SavedArticlesContext)
}