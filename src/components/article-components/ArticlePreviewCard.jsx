import { Link } from "react-router-dom"


const ArticlePreviewCard = (articleData) => {
  const articles = {articleData}

  return (
    <Link 
      to= {`/article/${articleData.id}`}
      state={articles}
    >
      <div className="flex flex-col border-2 border-black">
        <div className=" overflow-hidden">
          <img src={articleData.src} alt="" className="flex min-w-48"/>
        </div>
        <div className="flex justify-center p-2 bg-black">
          <span className="text-lg">{articleData.title}</span>
        </div>
      </div>
    </Link>
  )
}

export default ArticlePreviewCard