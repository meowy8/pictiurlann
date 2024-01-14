import PageHeading from "./PageHeading"
import { useAuth } from "./AuthProvider"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const { signIn } = useAuth()
  const navigateTo = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    signIn()
    navigateTo('/')
  }

  return (
    <section className="w-full">
      <PageHeading>Sign In</PageHeading>
      <form type="submit" onSubmit={(e) => handleSignIn(e)} className="flex flex-col gap-4 py-8">
        <label htmlFor="username">
          Username:
          <input type="text" className="text-black"/>
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" className="text-black"/>
        </label>
        <button>Sign In</button>
      </form>
    </section>
  )
}

export default SignIn