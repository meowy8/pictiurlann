import { Link } from "react-router-dom"


const ArticlePreviewCard = ({ title, author, preface, src, mainText, published }) => {
  return (
    <Link to={'/article'}>
      <div className="flex flex-col border-2 border-black">
        <div className=" overflow-hidden">
          <img src={src} alt="" className="flex min-w-48"/>
        </div>
        <div className="flex justify-center p-2 bg-black">
          <span className="text-lg">Article Title #1</span>
        </div>
      </div>
    </Link>
  )
}

export default ArticlePreviewCard