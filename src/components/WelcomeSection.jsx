import SavedArticles from "./SavedArticles"

const WelcomeSection = () => {
  return (
    <section className="flex flex-col justify-center w-full gap-10">
      <h1 className="text-4xl">Welcome to Pictiurlann!</h1>
      <SavedArticles />
    </section>
  )
}

export default WelcomeSection