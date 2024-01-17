import { Link } from "react-router-dom"


const ArticlePreviewCard = ({ id, src, title, published }) => {
  return (
    <Link 
      to= {`/article/${id}`}
    >
      <div className="flex flex-col border-2 border-black w-96 text-white group">
        <div className="overflow-hidden">
          <img src={src} alt="" className="flex min-w-48 transition-transform transform duration-300 group-hover:scale-105"/>
        </div>
        <div className="flex flex-col bg-[#D24545] p-2 text-white">
          <div className="pb-2">
            <span className="text-lg">{title}</span>
          </div>
          <div className="flex justify-end">
            <span className="text-sm text-slate-200">{published}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticlePreviewCard