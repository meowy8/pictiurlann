import { useAuth } from "./AuthProvider"
import { useSavedArticles } from "./SavedArticlesContext"
import ArticlePreviewCard from "./article-components/ArticlePreviewCard"

const SavedArticles = () => {
  const { isAuth } = useAuth()
  const { savedArticles } = useSavedArticles()

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Saved Articles</h2>
      <ul className="flex flex-col gap-4">
      {!isAuth ?
       <p>You need to sign in to view your saved articles.</p>
        : savedArticles.length !== 0 ?
        savedArticles.map((article) => {
          return (
            <li key={article.id}>
              <ArticlePreviewCard
                title={article.title}
                key={article.id}
                src={article.src}
                published={article.published}
                mainText={article.mainText}
                preface={article.preface}
                author={article.author}
              /> 
            </li>
        )})
        : <p>No saved articles</p>
      }
      </ul>
    </section>
  )
}

export default SavedArticles