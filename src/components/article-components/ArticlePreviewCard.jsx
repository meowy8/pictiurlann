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
        <div className="flex flex-col bg-black p-2">
          <div className="">
            <span className="text-lg">{articleData.title}</span>
          </div>
          <div>
            <span className="text-sm">{articleData.published}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticlePreviewCard