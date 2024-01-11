import { Link, Outlet } from "react-router-dom"
import ArticleContent from "./ArticleContent"
import PageHeading from "../PageHeading"

const ArticlesList = () => {
  return (
    <section className="w-full">
      <PageHeading>Articles</PageHeading>
      <ul className="py-4">
        <li className="list-disc">
          <Link to={'/article'}>Article Title</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  )
}

export default ArticlesList