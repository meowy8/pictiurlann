import { useAuth } from "./AuthProvider"
import { useSavedArticles } from "./SavedArticlesContext"
import ArticlePreviewCard from "./article-components/ArticlePreviewCard"

const SavedArticles = () => {
  const { isAuth } = useAuth()
  const { savedArticles } = useSavedArticles()

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Saved Articles</h2>
      {savedArticles.map((article) => {
        return (
        isAuth ? 
        <ArticlePreviewCard
          title={article.title}
          key={article.id}
          src={article.src}
          published={article.published}
          /> : <p>You need to sign in to view your saved articles.</p>
      )})
      }
        
      

      
    </section>
  )
}

export default SavedArticles