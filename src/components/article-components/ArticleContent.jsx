import { useLocation } from "react-router-dom"
import ArticleFooter from "./ArticleFooter"
import ArticleHeaderImage from "./ArticleHeaderImage"
import ArticleHeadingContainer from "./ArticleHeadingContainer"
import ArticleMain from "./ArticleMain"
import ArticlePreface from "./ArticlePreface"

const ArticleContent = () => {
  const location = useLocation()
  const { articleData } = location.state || {}

  if (!articleData) {
    return <div>Nothing to see here</div>
  }

  return (
    <div className="flex flex-col gap-3 bg-[#5e2424] p-4">
      <ArticleHeadingContainer title={articleData.title} author={articleData.author}/>
      <ArticlePreface preface={articleData.preface}/>
      <ArticleHeaderImage src={articleData.src}/>
      <ArticleMain mainText={articleData.mainText}/>
      <ArticleFooter published={articleData.published}/>
    </div>
  )
}

export default ArticleContent