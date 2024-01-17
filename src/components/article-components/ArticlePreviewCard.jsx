import { Link } from "react-router-dom"


const ArticlePreviewCard = ({ id, src, title, published }) => {
  return (
    <Link 
      to= {`/article/${id}`}
    >
      <div className="flex flex-col border-2 border-black">
        <div className=" overflow-hidden">
          <img src={src} alt="" className="flex min-w-48"/>
        </div>
        <div className="flex flex-col bg-[#ffa72bc3] p-2">
          <div className="">
            <span className="text-lg">{title}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">{published}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticlePreviewCard