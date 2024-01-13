import { Link, Outlet } from "react-router-dom"
import PageHeading from "../PageHeading"
import ArticleSearch from "./ArticleSearch"

const ArticlesList = () => {
  return (
    <section className="w-full">
      <PageHeading>Articles</PageHeading>
      <ArticleSearch />
      <ul className="p-4">
        <li className="list-disc">
          <Link to={'/article'}>Article Title</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  )
}

export default ArticlesList