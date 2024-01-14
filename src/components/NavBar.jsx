import { Link } from "react-router-dom"
import { useAuth } from "./AuthProvider"

const NavBar = () => {
  const { isAuth, signOut } = useAuth()

  const handleSignOut = () => {
    signOut()
  }

  return (
    <nav className="flex justify-between w-full p-2 font-mono gap-2">
      <Link to={'/'} className="">Pictiurlann</Link>
      <div className="flex gap-4">
        {isAuth ? <button onClick={handleSignOut}>Sign out</button> : <Link to={'sign-in'}>Sign In</Link>}
        <Link to={'articleslist'}>Articles</Link>
        <Link to={'contact'}>Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar 