import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full px-10 py-2 font-mono gap-2">
      <Link to={'/'} className="">Pictiurlann</Link>
      <div className="flex gap-10">
        <Link to={'sign-in'}>Sign In</Link>
        <Link to={'articleslist'}>Articles</Link>
        <Link to={'contact'}>Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar 