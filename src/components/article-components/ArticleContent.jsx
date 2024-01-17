import { useParams } from "react-router-dom"
import ArticleFooter from "./ArticleFooter"
import ArticleHeaderImage from "./ArticleHeaderImage"
import ArticleHeadingContainer from "./ArticleHeadingContainer"
import ArticleMain from "./ArticleMain"
import ArticlePreface from "./ArticlePreface"
import { useEffect, useState } from "react"

const ArticleContent = () => {
  const [ articleContentData, setArticleContentData ] = useState(null)
  const [ currentArticle, setCurrentArticle ] = useState(null)
  const { id } = useParams()
  console.log('id from params: ' + id)

  useEffect(() => {
    fetch('/articleData.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then(data => {
      setArticleContentData(data)
    })
    .catch(error => {
      console.error('Error: ', error)
    })
  }, [])

  useEffect(() => {
    const currentArticleSearch = (id) => {
      if (articleContentData) {
        const correctArticle = articleContentData.find(article => article.id == id)
        if (correctArticle) {
          setCurrentArticle(correctArticle)
        } else console.log('no article found')
      }
    }
    
    currentArticleSearch(id)
  }, [id, articleContentData])

  console.log('current article: ' + currentArticle)

  return (
    <>
   {currentArticle ? 
    <div className="flex flex-col gap-3 bg-[#5e2424] p-4">
      <ArticleHeadingContainer
        title={currentArticle.title}
        author={currentArticle.author}
        id={currentArticle.id}
        src={currentArticle.src}
        published={currentArticle.published}
        mainText={currentArticle.mainText}
        preface={currentArticle.preface}
      />
      <ArticlePreface preface={currentArticle.preface}/>
      <ArticleHeaderImage src={currentArticle.src}/>
      <ArticleMain mainText={currentArticle.mainText}/>
      <ArticleFooter published={currentArticle.published}/>
    </div>
    : <p>error</p>}
    </>
  )
}

export default ArticleContent