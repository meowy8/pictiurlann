import { useAuth } from "./AuthProvider"

const SavedArticles = ({ savedArticles }) => {
  const { isAuth } = useAuth()

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Saved Articles</h2>
      {isAuth ? <p>You are signed in</p> : <p>You need to sign in to view your saved articles.</p>}
    </section>
  )
}

export default SavedArticles