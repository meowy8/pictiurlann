import { useAuth } from "./AuthProvider"
import { useSavedArticles } from "./SavedArticlesContext"

const SavedArticles = () => {
  const { isAuth } = useAuth()
  const { savedArticles } = useSavedArticles()

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Saved Articles</h2>
      {isAuth ? <p>{savedArticles[0].test}</p> : <p>You need to sign in to view your saved articles.</p>}
    </section>
  )
}

export default SavedArticles