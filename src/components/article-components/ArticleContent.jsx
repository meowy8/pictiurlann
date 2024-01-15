import { useLocation } from "react-router-dom"
import ArticleFooter from "./ArticleFooter"
import ArticleHeaderImage from "./ArticleHeaderImage"
import ArticleHeadingContainer from "./ArticleHeadingContainer"
import ArticleMain from "./ArticleMain"
import ArticlePreface from "./ArticlePreface"

const ArticleContent = () => {
  const location = useLocation()
  const { src, title, published, preface, author, mainText } = location.state || {}


  return (
    <div className="flex flex-col gap-3 bg-[#5e2424] p-4">
      <ArticleHeadingContainer title={title} author={author}/>
      <ArticlePreface preface={preface}/>
      <ArticleHeaderImage src={src}/>
      <ArticleMain mainText={mainText}/>
      <ArticleFooter published={published}/>
    </div>
  )
}

export default ArticleContent