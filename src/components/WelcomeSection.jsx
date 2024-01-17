import PageHeading from "./PageHeading"
import SavedArticles from "./SavedArticles"

const WelcomeSection = () => {
  return (
    <section className="flex flex-col w-full gap-10">
      <PageHeading className="text-4xl">Welcome to Pictiurlann!</PageHeading>
      <SavedArticles />
    </section>
  )
}

export default WelcomeSection